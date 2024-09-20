package back.api.user.token.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;

public class TokenResponse {

    @Getter
    @AllArgsConstructor
    public static class ReIssue{
        private Long id;
        private String accessToken;
        @JsonIgnore
        private String refreshToken;
    }
}
