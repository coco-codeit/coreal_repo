package back.api.gathering.dto.project.request;

import back.domain.gathering.status.GatheringType;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.Data;

@Data
public class CreateProjectRequest {
    private String image;
    private String title; //모임명
    private String type; //Project, Study
    private GatheringType connection; //on,off
    private String day;
    private String time;
    private LocalDateTime startDate; //시작일
    private LocalDateTime endDate; //종료일
    private List<PositionDto> recruitment = new ArrayList<>();
    private List<String> techStacks = new ArrayList<>();
    private String description;

    @Data
    public static class PositionDto{
        private String field;
        private int totalCapacity;
    }
}
