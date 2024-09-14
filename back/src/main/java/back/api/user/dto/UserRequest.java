package back.api.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class UserRequest {

    @Getter
    @AllArgsConstructor
    public static class Join{
        private String email;
        private String password;
        private String checkPassword;
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
}
