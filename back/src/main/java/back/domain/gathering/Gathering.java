package back.domain.gathering;

import back.domain.gathering.status.GatheringStatus;
import back.domain.gathering.status.GatheringType;
import back.domain.user.stack.TechStack;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.BatchSize;

@Getter
@Entity
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn
@Table(name = "gatherings")
public class Gathering extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gathering_id")
    private Long id;
    private String gatheringName;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private int totalCapacity;
    private int currentCapacity;
    private String image;
    @BatchSize(size = 100)
    @OneToMany(mappedBy = "gathering", cascade = CascadeType.ALL)
    private List<GatheringStack> stackList = new ArrayList<>();
    @OneToMany(mappedBy = "gathering")
    private List<Applicant> applicants = new ArrayList<>();
    @Column(name = "gathering_day")
    private String day;
    private String time;
    @Lob
    private String description;
    @Enumerated(EnumType.STRING)
    private GatheringStatus gatheringStatus; //진행중~
    @Enumerated(EnumType.STRING)
    private GatheringType gatheringType;//ONLINE, OFFLINE
    private Long masterId;
    @Column(name = "DTYPE", insertable = false, updatable = false)
    private String dtype;

}

//    @Builder(builderMethodName = "gatheringBuilder")
//    protected Gathering(String name, LocalDateTime startDate, LocalDateTime endDate,
//        int totalCapacity, int currentCapacity, String location,
//        String description, GatheringStatus gatheringStatus,
//        GatheringType gatheringType, List<GatheringStack> stackList, Long masterId) {
//        this.gatheringName = name;
//        this.startDate = startDate;
//        this.endDate = endDate;
//        this.totalCapacity = totalCapacity;
//        this.currentCapacity = currentCapacity;
//        this.
//        this.description = description;
//        this.gatheringStatus = gatheringStatus;
//        this.gatheringType = gatheringType;
//        this.masterId = masterId;
//        this.stackList = stackList != null ? stackList : new ArrayList<>();
//    }
