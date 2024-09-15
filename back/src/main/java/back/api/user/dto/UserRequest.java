package back.api.user.dto;

import back.domain.user.dto.UserCommand;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

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
}
