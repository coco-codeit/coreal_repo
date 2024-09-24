package back.api.gathering.dto.study.request;

import back.domain.gathering.status.GatheringType;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Data;

@Data
public class CreateStudyRequest{
    private String category; //Project, Study
    private String gatheringName; //모임명
    private String progress;
    private String location; //위치
    private LocalDateTime startDate; //시작일
    private LocalDateTime endDate; //종료일
    //        private String month;
//        private String time;
    private String description; //설명
    private List<String> stackList;
    private int totalCapacity; //인원수
    private GatheringType gatheringType; //on,off
    private Long masterId;
}
