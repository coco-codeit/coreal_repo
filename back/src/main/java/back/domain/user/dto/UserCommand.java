package back.domain.user.dto;

import back.domain.user.User;
import back.domain.user.UserEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class UserCommand {

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Join{
        private String email;
        private String password;
        private String checkPassword;

        public User toEntity() {
            return User.builder()
                    .email(email)
                    .password(password)
                    .role(UserEnum.USER)
                    .build();
        }
    }
}
