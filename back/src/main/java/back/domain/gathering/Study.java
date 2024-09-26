package back.domain.gathering;

import back.api.gathering.dto.study.request.CreateStudyRequest;
import back.domain.gathering.status.GatheringStatus;
import back.domain.gathering.status.GatheringType;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Getter
@Entity
@SuperBuilder
@NoArgsConstructor
@DiscriminatorValue("STUDY")
public class Study extends Gathering {


    public static Study from(CreateStudyRequest request, Long masterId) {
        Study study = Study.builder()
            .gatheringName(request.getTitle())
            .image(request.getImage())
            .gatheringType(request.getConnection())
            .gatheringStatus(GatheringStatus.OPEN)
            .day(request.getDay())
            .time(request.getTime())
            .startDate(request.getStartDate())
            .endDate(request.getEndDate())
            .description(request.getDescription())
            .totalCapacity(request.getTotalCapacity())
            .stackList(new ArrayList<>())
            .currentCapacity(1)
            .masterId(masterId)
            .build();

        // Add tech stacks
        for (String stackName : request.getTechStacks()) {
            study.addTechStack(stackName);
        }

        return study;
    }
    public void addTechStack(String stackName) {
        GatheringStack stack = new GatheringStack(stackName, this);
        this.getStackList().add(stack);
    }

    public void setTechStacks(List<String> techStackNames) {
        if (techStackNames != null) {
            for (String stackName : techStackNames) {
                GatheringStack techStack = new GatheringStack(stackName, this);
                super.getStackList().add(techStack);
            }
        }
    }

//    public StudyEditor.StudyEditorBuilder toEditor() {
//        return StudyEditor.builder()
//            .name(getName())
//            .startDate(getStartDate())
//            .endDate(getEndDate())
//            .totalCapacity(getTotalCapacity())
//            .image(getImage())
//            .techStacks(getStackList())
//            .location(getLocation())
//            .description(getDescription())
//            .gatheringStatus(getGatheringStatus())
//            .gatheringType(getGatheringType());
////            .master(getMaster());
//    }

}
