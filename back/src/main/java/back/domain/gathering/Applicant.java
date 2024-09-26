package back.domain.gathering;

import back.domain.gathering.status.ApplicantStatus;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Table(name = "applicants")
public class Applicant {
    @Id
    @GeneratedValue
    private Long id;
    private Long userId;
    private String username;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "gathering_id")
    private Gathering gathering;
    @Enumerated(EnumType.STRING)
    private ApplicantStatus applicantStatus;
    public Applicant(Long userId, String username, Gathering gathering) {
        this.userId = userId;
        this.username=username;
        this.gathering=gathering;
    }

    public void changeApplicantStatus(ApplicantStatus applicantStatus) {
        this.applicantStatus = applicantStatus;
    }
    public void changeGathering(Gathering gathering) {
        this.gathering = gathering;
        gathering.getApplicants().add(this);
    }
}
