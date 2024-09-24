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
    private Long gatheringId;
    private String category; //Project, Study
    private String gatheringName; //모임명
    private GatheringStatus progress;
    private String location; //위치
    private LocalDateTime startDate; //시작일
    private LocalDateTime endDate; //종료일
    private String description; //설명
    private List<String> stackList;
    private int totalCapacity; //인원수
    private GatheringType gatheringType; //on,off
    private Long masterId;

    public static CreateStudyResponse from(Study study) {
        return CreateStudyResponse.builder()
            .category("Study")
            .gatheringName(study.getGatheringName())
            .progress(study.getGatheringStatus())
            .location(study.getLocation())
            .startDate(study.getStartDate())
            .endDate(study.getEndDate())
            .description(study.getDescription())
            .stackList(study.getStackList().stream().map(GatheringStack::getName).toList())
            .totalCapacity(study.getTotalCapacity())
            .gatheringType(study.getGatheringType())
            .masterId(study.getMasterId())
            .build();
    }
}
