package back.api.gathering.dto.study.response;

import back.domain.gathering.Study;
import back.domain.gathering.status.GatheringType;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Getter
@Builder
public class StudyListResponse {

    Long id;
    String title;
    String image;
    LocalDateTime dateTime; //시작일
    LocalDateTime registrationEnd;
    LocalDateTime startDateTime;
    LocalDateTime canceledAt;
    GatheringType connection; //온라인 오프라인 여부
    List<String> skills;
    int currentCapacity;
    int totalCapacity;

    public static StudyListResponse from(Study study) {
        return StudyListResponse.builder()
            .id(study.getId())
            .title(study.getGatheringName())
            .image(study.getImage() != null ? study.getImage() : "/images/logo-text.svg")
            .dateTime(study.getStartDate())
            .registrationEnd(study.getEndDate())
            .startDateTime(study.getStartDate())
            .canceledAt(null)
            .connection(study.getGatheringType())
            .skills(study.getStackList().stream()
                .map(stack -> stack.getName())
                .collect(Collectors.toList()))
            .currentCapacity(study.getCurrentCapacity())
            .totalCapacity(study.getTotalCapacity())
            .build();
    }
}
