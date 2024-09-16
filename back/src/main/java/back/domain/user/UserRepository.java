package back.domain.user;

import java.util.Optional;

public interface UserRepository {
    Optional<User> findById(Long id);

    Optional<User> findByEmail(String email);

    User save(User user);

    Long findFirstIdByOrderByIdDesc();
    Optional<User> findFirstByOrderByIdDesc();
}
