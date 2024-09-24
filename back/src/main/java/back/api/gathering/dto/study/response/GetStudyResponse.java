package back.api.gathering.dto.study.response;


import back.domain.gathering.GatheringStack;
import back.domain.gathering.Study;
import back.domain.gathering.status.GatheringStatus;
import back.domain.gathering.status.GatheringType;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class GetStudyResponse {
    private Long gatheringId;
    private LocalDateTime createdAt;
    private String category; //Project, Study
    private String gatheringName; //모임명
    private GatheringStatus progress;
    private LocalDateTime startDate; //시작일
    private LocalDateTime endDate; //종료일
    private String location; //위치
    private String description; //설명
//    private String image;
    private List<String> stackList;
    private int totalCapacity; //인원수
    private int currentCapacity;//현재 인원수
    private GatheringType gatheringType; //on,off
    @Builder.Default
    private String month = "월~수";
    @Builder.Default
    private String time = "오후";
    private Long masterId;

    public static GetStudyResponse from(Study study) {
        return GetStudyResponse.builder()
            .gatheringId(study.getId())
            .createdAt(study.getCreatedDate())
            .category("Study")
            .gatheringName(study.getGatheringName())
            .progress(study.getGatheringStatus())
            .startDate(study.getStartDate())
            .endDate(study.getEndDate())
            .location(study.getLocation())
            .description(study.getDescription())
            .stackList(study.getStackList().stream().map(GatheringStack::getName).toList())
            .totalCapacity(study.getTotalCapacity())
            .currentCapacity(study.getCurrentCapacity())
            .gatheringType(study.getGatheringType())
            .masterId(study.getMasterId())
            .build();
    }
}
