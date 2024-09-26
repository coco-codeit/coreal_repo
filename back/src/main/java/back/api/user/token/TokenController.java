package back.api.user.token;

import back.api.common.dto.CustomApiResponse;
import back.api.user.token.dto.TokenRequest;
import back.api.user.token.dto.TokenResponse;
import back.common.util.CookieUtil;
import back.domain.user.token.RefreshTokenService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class TokenController {

    private final RefreshTokenService refreshTokenService;

    @Operation(summary = "refresh token 재발급 api",description = "body에는 \"Bearer \"를 붙이고 refresh token을 넣어 주셔야 합니다")
    @PostMapping("/re-issue")
    public CustomApiResponse<TokenResponse.ReIssue> reIssue(@RequestBody TokenRequest.ReIssue request, HttpServletResponse response) {
        TokenResponse.ReIssue tokenResponse = refreshTokenService.reIssue(request.toCommand());
        CookieUtil.addRefreshTokenCookie(response,tokenResponse.getRefreshToken());
        return CustomApiResponse.ok(tokenResponse);
    }
}
