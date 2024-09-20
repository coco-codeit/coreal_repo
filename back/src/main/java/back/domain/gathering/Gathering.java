package back.domain.gathering;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Gathering {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String gatheringType;
    private String gatheringName;
    private String progress;
    private String location;
    private String image;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String gatheringMonth;
    private String time;
    private String description;
    private int totalCapacity;
}
