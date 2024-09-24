//package back.domain.gathering;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.FetchType;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.ManyToOne;
//import jakarta.persistence.Table;
//import lombok.Builder;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//
//@Getter
//@Entity
//@NoArgsConstructor
//@Table(name = "positions")
//public class Position {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "gathering_id")
//    private Project project;
//    private String techPosition;
//    private int capacity;
//    @Builder
//    public Position(String techPosition, int capacity) {
//        this.techPosition = techPosition;
//        this.capacity = capacity;
//    }
//
//    public void changeProject(Project project) {
//        this.project = project; //생성된 position에 project을 초기화
//        project.getPositions().add(this);
//    }
//
//}
