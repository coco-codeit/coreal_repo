package back.domain.gathering;

import back.domain.gathering.status.GatheringStatus;
import back.domain.gathering.status.GatheringType;
import jakarta.persistence.CascadeType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.Builder;
import lombok.Getter;

@Getter
public class StudyEditor {

    private String name;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private int totalCapacity;
    private String image;
    @OneToMany(mappedBy = "gathering", cascade = CascadeType.ALL)
    private List<GatheringStack> techStacks = new ArrayList<>();
    @OneToMany(mappedBy = "gathering")
    private List<Applicant> applicants = new ArrayList<>();
    private String location;
    @Lob
    private String description;
    @Enumerated(EnumType.STRING)
    private GatheringStatus gatheringStatus;
    @Enumerated(EnumType.STRING)
    private GatheringType gatheringType;
    private String master = "userId";

    @Builder
    public StudyEditor(String name, LocalDateTime startDate, LocalDateTime endDate,
        int totalCapacity, String image, List<GatheringStack> techStacks, List<Applicant> applicants,
        String location, String description, GatheringStatus gatheringStatus,
        GatheringType gatheringType, String master) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalCapacity = totalCapacity;
        this.image = image;
        this.techStacks = techStacks;
        this.applicants = applicants;
        this.location = location;
        this.description = description;
        this.gatheringStatus = gatheringStatus;
        this.gatheringType = gatheringType;
        this.master = master;
    }
}
