package back.domain.user.dto;

import back.domain.user.User;
import back.domain.user.UserEnum;
import back.domain.user.stack.TechStack;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

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

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Info{
        private String username;
        private String nickname;
        private String profileImage;
        private String jobField;
        private List<TechStack> techStacks;

    }
}
