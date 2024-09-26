package back.domain.gathering.repository;

import back.domain.gathering.Applicant;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicantRepository extends JpaRepository<Applicant, Long> {
    List<Applicant> findByUserId(Long userId);

    boolean existsByUserIdAndGatheringId(Long userId, Long gatheringId);
}
