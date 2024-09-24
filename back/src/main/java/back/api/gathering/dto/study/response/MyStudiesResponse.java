package back.api.gathering.dto.study.response;

import back.domain.gathering.status.GatheringStatus;
import back.domain.gathering.status.GatheringType;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Builder;

public class MyStudiesResponse {
    private Long id;
    private String image;
    private String title;//gatheringName
    private String content; //description
    private LocalDateTime createdAt;
    private String category; //Project, Study
    private String gatheringName; //모임명
    private GatheringStatus progress;
    private LocalDateTime startDate; //시작일
    private LocalDateTime endDate; //종료일
    private String location; //위치

    //    private String image;
    private List<String> stackList;
    private int totalCapacity; //인원수
    private int currentCapacity;//현재 인원수
    private GatheringType gatheringType; //on,off

}
