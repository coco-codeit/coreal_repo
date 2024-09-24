package back.domain.gathering;

import back.api.gathering.dto.study.request.CreateStudyRequest;
import back.domain.gathering.status.GatheringStatus;
import back.domain.gathering.status.GatheringType;
import jakarta.persistence.Entity;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
public class Study extends Gathering {

    @Builder(builderMethodName = "studyBuilder")
    private Study(String name, LocalDateTime startDate, LocalDateTime endDate,
        int totalCapacity, int currentCapacity, String location, String description,
        GatheringType gatheringType, List<String> techStacks, Long masterId) {
        super(name, startDate, endDate, totalCapacity, currentCapacity, location, description,
            GatheringStatus.OPEN, gatheringType, new ArrayList<>(), masterId);
        setTechStacks(techStacks);
    }

    public static Study from(CreateStudyRequest request) {
        return studyBuilder()
            .name(request.getGatheringName())
            .startDate(request.getStartDate())
            .endDate(request.getEndDate())
            .totalCapacity(request.getTotalCapacity())
            .currentCapacity(1)
            .location(request.getLocation())
            .description(request.getDescription())
            .gatheringType(request.getGatheringType())
            .techStacks(request.getStackList())
            .masterId(request.getMasterId())
            .build();
    }

    private void setTechStacks(List<String> techStackNames) {
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
