package back.domain.user.token;

import back.api.user.token.dto.TokenResponse;
import back.common.config.auth.LoginUser;
import back.common.config.jwt.JwtProcess;
import back.domain.common.exception.CustomGlobalException;
import back.domain.common.exception.ErrorType;
import back.domain.user.User;
import back.domain.user.UserRepository;
import back.domain.user.token.dto.TokenCommand;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RefreshTokenService {

    private final UserRedisRepository redisRepository;
    private final UserRepository userRepository;

    public TokenResponse.ReIssue reIssue(TokenCommand.ReIssue command) {
        RefreshToken token = redisRepository.findById(String.valueOf(command.getUserId()))
                .orElseThrow(() -> new CustomGlobalException(ErrorType.NOT_EXIST_REFRESH_TOKEN));
        User user = userRepository.findById(command.getUserId())
                .orElseThrow(() -> new CustomGlobalException(ErrorType.NOT_FOUND_USER));

        if (!command.getRefreshToken().equals(token.getRefreshToken())) {
            throw new CustomGlobalException(ErrorType.NON_MATCH_REFRESH_TOKEN);
        }

        String accessToken = JwtProcess.create(new LoginUser(user));
        String refreshToken = JwtProcess.createRefreshToken();

        redisRepository.save(new RefreshToken(String.valueOf(user.getId()), refreshToken));

        return new TokenResponse.ReIssue(user.getId(), accessToken, refreshToken);
    }


}
