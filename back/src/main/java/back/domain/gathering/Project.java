//package back.domain.gathering;
//
//import back.domain.gathering.status.GatheringStatus;
//import back.domain.gathering.status.GatheringType;
//import jakarta.persistence.CascadeType;
//import jakarta.persistence.Entity;
//import jakarta.persistence.OneToMany;
//import java.time.LocalDateTime;
//import java.util.ArrayList;
//import java.util.List;
//import lombok.AccessLevel;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//
//@Getter
//@Entity
//@NoArgsConstructor(access = AccessLevel.PUBLIC)
//public class Project extends Gathering{
//
//    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
//    private List<Position> positions = new ArrayList<>();
//
//    public Project(String name, LocalDateTime startDate, LocalDateTime endDate,
//        int totalCapacity, String location, String description,
//        GatheringType gatheringType, List<String> techStacks,
//        List<Position> positions) {
//        super(name, startDate, endDate, totalCapacity, 0, location, description,
//            GatheringStatus.OPEN, gatheringType, new ArrayList<>());
//
//        setTechStacks(techStacks);
//        setPositions(positions);
//    }
//
//    public static Project from(ProjectRequest.Create request) {
//        return new Project(
//            request.getGatheringName(),
//            request.getStartDate(),
//            request.getEndDate(),
//            request.getTotalCapacity(),
//            request.getLocation(),
//            request.getDescription(),
//            request.getGatheringType(),
//            request.getStackList(),
//            request.getPositions()
//        );
//    }
//
//    private void setTechStacks(List<String> techStackNames) {
//        if (techStackNames != null) {
//            for (String stackName : techStackNames) {
//                GatheringStack techStack = new GatheringStack(stackName, this);
//                super.getStackList().add(techStack);
//            }
//        }
//    }
//
//    private void setPositions(List<Position> positions) {
//        if (positions != null) {
//            for (Position position : positions) {
//                position.changeProject(this);
//            }
//            this.positions.addAll(positions);
//        }
//    }
//
//}
