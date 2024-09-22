package back.infrastructure.gathering;

import back.domain.gathering.Gathering;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GatheringJpaRepository extends JpaRepository<Gathering,Long> {
}
