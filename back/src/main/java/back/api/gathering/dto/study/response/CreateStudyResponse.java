package back.api.gathering.dto.study.response;

import back.domain.gathering.GatheringStack;
import back.domain.gathering.Study;
import back.domain.gathering.status.GatheringStatus;
import back.domain.gathering.status.GatheringType;
import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class CreateStudyResponse {
    private Long id;
    private String image;
    private String title; // 모임명 (gatheringName을 title로 변경)
    private String type; // "Study"로 고정
    private GatheringType connection; // on,off (gatheringType을 connection으로 변경)
    private String day;
    private String time;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private List<String> techStacks; // stackList를 techStacks로 변경
    private String description;
    private int totalCapacity;

    public static CreateStudyResponse from(Study study) {
        return CreateStudyResponse.builder()
            .id(study.getId())
            .image(study.getImage())
            .title(study.getGatheringName())
            .type("STUDY")
            .connection(study.getGatheringType())
            .day(study.getDay())
            .time(study.getTime())
            .startDate(study.getStartDate())
            .endDate(study.getEndDate())
            .techStacks(study.getStackList().stream().map(GatheringStack::getName).toList())
            .description(study.getDescription())
            .totalCapacity(study.getTotalCapacity())
            .build();
    }
}
