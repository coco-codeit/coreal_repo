package back.common.util;

import back.common.config.jwt.JwtUtil;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

public class CookieUtil {
    public static void addRefreshTokenCookie(HttpServletResponse response, String refreshToken) {
        refreshToken = refreshToken.replace(JwtUtil.TOKEN_PREFIX, "");
        Cookie refreshTokenCookie = new Cookie("refreshToken", refreshToken);
        refreshTokenCookie.setHttpOnly(true);
        // refreshTokenCookie.setSecure(true); TODO https 적용 후 변경
        response.addCookie(refreshTokenCookie);
    }
}
