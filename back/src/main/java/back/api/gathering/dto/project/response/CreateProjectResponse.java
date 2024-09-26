package back.api.gathering.dto.project.response;

import back.api.gathering.dto.project.response.ProjectListResponse.PositionDto;
import back.domain.gathering.GatheringStack;
import back.domain.gathering.Position;
import back.domain.gathering.Project;
import back.domain.gathering.status.GatheringType;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateProjectResponse {
    private Long id;
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
    @Builder
    public static class PositionDto{
        private String field;
        private int totalCapacity;
        private int currentCapacity;
        public static PositionDto from(Position position) {
            return PositionDto.builder()
                .field(position.getTechPosition())
                .currentCapacity(position.getCurrentCapacity())
                .totalCapacity(position.getTotalCapacity())
                .build();
        }
    }

    public static CreateProjectResponse from(Project savedStudy) {
        return CreateProjectResponse.builder()
            .id(savedStudy.getId())
            .title(savedStudy.getGatheringName())
            .image(savedStudy.getImage() != null ? savedStudy.getImage() : "/images/logo-text.svg")
            .startDate(savedStudy.getStartDate())
            .endDate(savedStudy.getEndDate())
            .connection(savedStudy.getGatheringType())
            .techStacks(savedStudy.getStackList().stream()
                .map(GatheringStack::getName)
                .collect(Collectors.toList()))
            .recruitment(savedStudy.getPositions().stream()
                .map(PositionDto::from).toList())
            .day(savedStudy.getDay())
            .time(savedStudy.getTime())
            .type("POSITION")
            .description(savedStudy.getDescription())
//            .currentCapacity(project.getCurrentCapacity())
//            .totalCapacity(project.getTotalCapacity())
            .build();
    }


}
