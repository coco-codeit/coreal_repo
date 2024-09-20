package back.infrastructure.user.token;

import back.domain.user.token.RefreshToken;
import back.domain.user.token.UserRedisRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Repository
@RequiredArgsConstructor
public class UserRedisRepositoryImpl implements UserRedisRepository {

    private final RedisTemplate<String, RefreshToken> redisTemplate;

    private final long REFRESH_TOKEN_VALIDITY = 7 * 24 * 60 * 60;
    private final String REFRESH_KEY = "refresh_token:";

    @Override
    public RefreshToken save(RefreshToken refreshToken) {
        String key = REFRESH_KEY + refreshToken.getId();
        redisTemplate.opsForValue().set(key, refreshToken, REFRESH_TOKEN_VALIDITY, TimeUnit.SECONDS);
        return refreshToken;
    }

    @Override
    public Optional<RefreshToken> findById(String id) {
        String key = REFRESH_KEY + id;
        RefreshToken refreshToken = redisTemplate.opsForValue().get(key);
        return Optional.ofNullable(refreshToken);
    }

    @Override
    public void deleteById(String id) {
        String key = REFRESH_KEY + id;
        redisTemplate.delete(key);
    }
}
