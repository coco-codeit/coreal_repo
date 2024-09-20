package back.api.user.token;

import back.api.common.dto.CustomApiResponse;
import back.api.user.token.dto.TokenRequest;
import back.api.user.token.dto.TokenResponse;
import back.domain.user.token.RefreshTokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class TokenController {

    private final RefreshTokenService refreshTokenService;

    @PostMapping("/re-issue")
    public CustomApiResponse<TokenResponse.ReIssue> reIssue(@RequestBody TokenRequest.ReIssue request) {
        return CustomApiResponse.ok(refreshTokenService.reIssue(request.toCommand()));
    }
}
