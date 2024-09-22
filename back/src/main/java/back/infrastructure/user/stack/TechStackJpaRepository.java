package back.infrastructure.user.stack;

import back.domain.user.User;
import back.domain.user.stack.TechStack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TechStackJpaRepository extends JpaRepository<TechStack, Long> {
    List<TechStack> findByUserId(Long userId);

    List<TechStack> findByGatheringId(Long gatheringId);

    @Query("SELECT ts FROM TechStack ts WHERE ts.gathering.id IN :gatheringIds")
    List<TechStack> findByGatheringIds(@Param("gatheringIds") List<Long> gatheringIds);
}

