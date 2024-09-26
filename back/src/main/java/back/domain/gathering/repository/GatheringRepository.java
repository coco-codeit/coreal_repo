package back.domain.gathering.repository;

import back.domain.gathering.Gathering;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface GatheringRepository extends JpaRepository<Gathering,Long> {

    @Query("SELECT DISTINCT g FROM Gathering g JOIN g.applicants a WHERE a.userId = :userId")
    List<Gathering> findApplicants(@Param("userId") Long userId);
}
