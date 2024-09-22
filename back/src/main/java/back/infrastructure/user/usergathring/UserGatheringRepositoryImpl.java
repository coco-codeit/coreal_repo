package back.infrastructure.user.usergathring;

import back.domain.user.usergatherting.UserGathering;
import back.domain.user.usergatherting.UserGatheringRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class UserGatheringRepositoryImpl implements UserGatheringRepository {

    private final UserGatheringJpaRepository userGatheringRepository;

    @Override
    public List<UserGathering> findByUserId(Long userId) {
        return userGatheringRepository.findByUserId(userId);
    }

    @Override
    public List<UserGathering> findByUserIdWithGathering(Long profileId) {
        return userGatheringRepository.findByUserIdWithGathering(profileId);
    }
}
