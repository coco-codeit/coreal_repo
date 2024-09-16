package back.api.user.token.dto;

import back.domain.user.token.dto.TokenCommand;
import lombok.AllArgsConstructor;
import lombok.Getter;

public class TokenRequest {

    @Getter
    @AllArgsConstructor
    public static class ReIssue {
        private Long userId;
        private String refreshToken;

        public TokenCommand.ReIssue toCommand() {
            return new TokenCommand.ReIssue(userId, refreshToken);
        }
    }
}
