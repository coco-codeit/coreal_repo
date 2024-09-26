package back.api.gathering.dto.study.request;

import back.domain.gathering.status.GatheringType;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.Data;

@Data
public class CreateStudyRequest{

    private String image;
    private String title; //모임명
    private String type; //Project, Study
    private GatheringType connection; //on,off
    private String day;
    private String time;
    private LocalDateTime startDate; //시작일
    private LocalDateTime endDate; //종료일
    private List<String> techStacks = new ArrayList<>();
    private String description;
    private int totalCapacity;

}
