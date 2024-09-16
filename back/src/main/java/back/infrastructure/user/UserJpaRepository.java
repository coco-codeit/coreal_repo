package back.infrastructure.user;

import back.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserJpaRepository extends JpaRepository<User,Long> {

    Optional<User> findByEmail(String email);
    Long findFirstIdByOrderByIdDesc();
    Optional<User> findFirstByOrderByIdDesc();
}
