package back.domain.user.usergatherting;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserGatheringRepository {
    List<UserGathering> findByUserId(Long userId);
    List<UserGathering> findByUserIdWithGathering(Long profileId);
}
