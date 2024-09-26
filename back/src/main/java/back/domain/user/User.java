package back.domain.user;

import back.domain.user.stack.TechStack;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    private String password;
    private String nickname;
    private String jobField;
    private String profileImage;
    private int userTemp;
    private boolean isFirstLogin;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserEnum role;

    public boolean isFirstLoginCheck(){
        return this.isFirstLogin == true;
    }

    public void changeFirstLogin(){
        this.isFirstLogin = false;
    }

    public void changeInfo(String jobField,String username,String nickname,String profileImage){
        this.jobField = jobField;
        this.username = username;
        this.nickname = nickname;
        this.profileImage = profileImage;
    }
}
