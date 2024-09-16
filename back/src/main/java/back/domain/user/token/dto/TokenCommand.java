package back.domain.user.token.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class TokenCommand {

    @Getter
    @AllArgsConstructor
    public static class ReIssue{
        private Long userId;
        private String refreshToken;
    }
}
