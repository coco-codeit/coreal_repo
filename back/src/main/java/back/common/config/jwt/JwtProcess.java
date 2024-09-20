package back.common.config.jwt;

import back.common.config.auth.LoginUser;
import back.domain.user.User;
import back.domain.user.UserEnum;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

import java.util.Date;

public class JwtProcess {

    public static String create(LoginUser loginUser) {
        String jwtToken = JWT.create()
                .withSubject("coreal")
                .withExpiresAt(new Date(System.currentTimeMillis() + JwtUtil.ACCESS_EXPIRATION_TIME))
                .withClaim("id", loginUser.getUser().getId())
                .withClaim("role", loginUser.getUser().getRole().name())
                .sign(Algorithm.HMAC512(JwtUtil.SECRET));
        return JwtUtil.TOKEN_PREFIX + jwtToken;
    }

    public static String createRefreshToken() {
        String jwtToken = JWT.create()
                .withSubject("coreal")
                .withExpiresAt(new Date(System.currentTimeMillis() + JwtUtil.REFRESH_EXPIRATION_TIME))
                .sign(Algorithm.HMAC512(JwtUtil.SECRET));
        return JwtUtil.TOKEN_PREFIX + jwtToken;
    }

    // 토큰 검증 시 return 되는 LoginUser 객체를 강제로 시큐리티 세션에 직접 주입
    public static LoginUser verify(String token) {
        DecodedJWT decodedJWT = JWT
                .require(Algorithm.HMAC512(JwtUtil.SECRET))
                .build()
                .verify(token);

        Long id = decodedJWT.getClaim("id").asLong();
        String role = decodedJWT.getClaim("role").asString();
        User user = User.builder().id(id).role(UserEnum.valueOf(role)).build();
        return new LoginUser(user);
    }
}
