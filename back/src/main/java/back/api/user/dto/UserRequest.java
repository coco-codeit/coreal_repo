package back.api.user.dto;

import back.domain.user.dto.UserCommand;
import back.domain.user.stack.TechStack;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

public class UserRequest {

    @Getter
    @AllArgsConstructor
    public static class Join{
        private String email;
        private String password;
        private String checkPassword;

        public UserCommand.Join toCommand(){
            return UserCommand.Join.builder()
                    .email(email)
                    .password(password)
                    .checkPassword(checkPassword)
                    .build();
        }
    }

    @Getter
    @AllArgsConstructor
    public static class Update{
        private Long id;
        private String nickname;
        private String email;
        private String profileImage;
        private int temperature;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Login{
        private String email;
        private String password;
    }

    @Getter
    @AllArgsConstructor
    public static class Info{
        private String username;
        private String nickname;
        private String jobField;
        private List<TechStack> techStacks;

        public UserCommand.Info toCommand(){
            return UserCommand.Info.builder()
                    .username(username)
                    .nickname(nickname)
                    .jobField(jobField)
                    .techStacks(techStacks)
                    .build();
        }
    }
}
