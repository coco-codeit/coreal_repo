package back.infrastructure.user.usergathring;

import back.domain.user.usergatherting.UserGathering;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserGatheringJpaRepository extends JpaRepository<UserGathering,Long> {
    List<UserGathering> findByUserId(Long userId);

    @Query("SELECT ug FROM UserGathering ug " +
            "JOIN FETCH ug.gathering g " +
            "WHERE ug.user.id = :profileId")
    List<UserGathering> findByUserIdWithGathering(@Param("profileId") Long profileId);
}
