package back.domain.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;
    private String nickname;
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
}
