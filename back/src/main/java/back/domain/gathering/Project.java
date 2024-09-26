package back.domain.gathering;

import back.api.gathering.dto.project.request.CreateProjectRequest;
import back.domain.gathering.status.GatheringStatus;
import jakarta.persistence.CascadeType;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.BatchSize;

@Getter
@Entity
@SuperBuilder
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@DiscriminatorValue("PROJECT")
public class Project extends Gathering{

    @BatchSize(size = 100)
    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
    private List<Position> positions = new ArrayList<>();

    public static Project from(CreateProjectRequest request, Long masterId) {
        Project project = Project.builder()
            .gatheringName(request.getTitle())
            .image(request.getImage())
            .gatheringType(request.getConnection())
            .gatheringStatus(GatheringStatus.OPEN)
            .day(request.getDay())
            .time(request.getTime())
            .startDate(request.getStartDate())
            .endDate(request.getEndDate())
            .description(request.getDescription())
            .positions(new ArrayList<>())
            .stackList(new ArrayList<>())
            .currentCapacity(1)
            .masterId(masterId)
            .build();

        for (String stackName : request.getTechStacks()) {
            project.addTechStack(stackName);
        }
        
        for (CreateProjectRequest.PositionDto positionDto : request.getRecruitment()) {
            project.addPosition(positionDto);
        }

        return project;
    }

    private void addPosition(CreateProjectRequest.PositionDto positionDto) {
        Position position = Position.builder()
            .project(this)
            .techPosition(positionDto.getField())
            .totalCapacity(positionDto.getTotalCapacity())
            .build();
        this.positions.add(position);
    }

    public void addTechStack(String stackName) {
        GatheringStack stack = new GatheringStack(stackName, this);
        this.getStackList().add(stack);
    }

}
