package back.domain.user.token;

import java.util.Optional;

public interface UserRedisRepository {
    RefreshToken save(RefreshToken refreshToken);
    Optional<RefreshToken> findById(String id);
    void deleteById(String id);
}
