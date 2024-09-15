package back.infrastructure;

import back.domain.user.User;
import back.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class UserRepositoryImpl implements UserRepository {

    private final UserJpaRepository userJpaRepository;

    @Override
    public Optional<User> findById(Long id) {
        return userJpaRepository.findById(id);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return userJpaRepository.findByEmail(email);
    }

    @Override
    public User save(User user) {
        return userJpaRepository.save(user);
    }

    @Override
    public Long findFirstIdByOrderByIdDesc() {
        return userJpaRepository.findFirstIdByOrderByIdDesc();
    }

    @Override
    public Optional<User> findFirstByOrderByIdDesc() {
        return userJpaRepository.findFirstByOrderByIdDesc();
    }
}
