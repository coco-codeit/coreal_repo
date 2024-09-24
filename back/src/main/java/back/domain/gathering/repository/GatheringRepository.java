package back.domain.gathering.repository;

import back.domain.gathering.Gathering;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GatheringRepository extends JpaRepository<Gathering,Long> {
}
