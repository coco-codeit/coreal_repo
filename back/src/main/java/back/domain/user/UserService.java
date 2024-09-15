package back.domain.user;

import back.domain.common.exception.CustomGlobalException;
import back.domain.common.exception.ErrorType;
import back.domain.user.dto.UserCommand;
import back.domain.user.dto.UserResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public UserResponse.Join join(UserCommand.Join command) {
        duplicateCheckEmail(command.getEmail());
        checkPassword(command.getPassword(), command.getCheckPassword());

        Long nicknameNum = userRepository.findFirstByOrderByIdDesc()
                .map(User::getId).orElse(1L);

        User user = User.builder()
                .email(command.getEmail())
                .password(passwordEncoder.encode(command.getPassword()))
                .nickname("user" + nicknameNum)
                .isFirstLogin(true)
                .role(UserEnum.USER)
                .build();
        User savedUser = userRepository.save(user);
        return new UserResponse.Join(savedUser.getId(), savedUser.getEmail());
    }

    private void duplicateCheckEmail(String email) {
        Optional<User> optionalEmail = userRepository.findByEmail(email);
        if (optionalEmail.isPresent()) {
            throw new CustomGlobalException(ErrorType.DUPLICATE_EMAIL);
        }
    }

    private void checkPassword(String password, String checkPassword) {
        if (!password.equals(checkPassword)) {
            throw new CustomGlobalException(ErrorType.NON_MATCH_PASSWORD);
        }
    }
}
