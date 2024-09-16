package back.api.user.token.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class TokenResponse {

    @Getter
    @AllArgsConstructor
    public static class ReIssue{
        private Long id;
        private String accessToken;
        private String refreshToken;
    }
}
