package back.api.gathering.dto.project.response;

import back.api.gathering.dto.study.response.StudyListResponse;
import back.domain.gathering.GatheringStack;
import back.domain.gathering.Position;
import back.domain.gathering.Project;
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
public class ProjectListResponse {
    Long id;
    String title;
    String image;
    LocalDateTime dateTime; //시작일
    LocalDateTime registrationEnd;
    LocalDateTime startDateTime;
    LocalDateTime canceledAt;
    GatheringType connection; //온라인 오프라인 여부
    List<String> skills;
    List<PositionDto> recruitment;


    public static ProjectListResponse from(Project project) {
        return ProjectListResponse.builder()
            .id(project.getId())
            .title(project.getGatheringName())
            .image(project.getImage() != null ? project.getImage() : "/images/logo-text.svg")
            .dateTime(project.getStartDate())
            .registrationEnd(project.getEndDate())
            .startDateTime(project.getStartDate())
            .canceledAt(null)
            .connection(project.getGatheringType())
            .skills(project.getStackList().stream()
                .map(GatheringStack::getName)
                .collect(Collectors.toList()))
            .recruitment(project.getPositions().stream()
                .map(PositionDto::from).toList())
//            .currentCapacity(project.getCurrentCapacity())
//            .totalCapacity(project.getTotalCapacity())
            .build();
    }

    @Data
    @Builder
    public static class PositionDto {
        private String field;
        private int currentCapacity;
        private int totalCapacity;

        public static PositionDto from(Position position) {
            return PositionDto.builder()
                .field(position.getTechPosition())
                .currentCapacity(position.getCurrentCapacity())
                .totalCapacity(position.getTotalCapacity())
                .build();
        }
    }

}
