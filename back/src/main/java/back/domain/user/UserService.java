package back.domain.user;

import back.common.config.auth.LoginUser;
import back.domain.common.exception.CustomGlobalException;
import back.domain.common.exception.ErrorType;
import back.domain.gathering.Gathering;
import back.domain.gathering.dto.GatheringDto;
import back.domain.user.dto.UserCommand;
import back.domain.user.dto.UserResponse;
import back.domain.user.evaluation.Evaluation;
import back.domain.user.evaluation.EvaluationRepository;
import back.domain.user.stack.TechStack;
import back.domain.user.stack.TechStackRepository;
import back.domain.user.stack.dto.TechStackDto;
import back.domain.user.usergatherting.UserGathering;
import back.domain.user.usergatherting.UserGatheringRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final TechStackRepository techStackRepository;
    private final EvaluationRepository evaluationRepository;
    private final UserGatheringRepository userGatheringRepository;
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

    @Transactional
    public UserResponse.Info saveInfo(Long userId, UserCommand.Info command) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new CustomGlobalException(ErrorType.NOT_FOUND_USER));
        user.changeInfo(command.getJobField(), command.getUsername(), command.getNickname(), command.getProfileImage());
        List<TechStack> techStacks = command.getTechStacks().stream()
                .map(techStack -> new TechStack(user, techStack.getName())).collect(Collectors.toList());
        techStackRepository.saveAll(techStacks);

        return new UserResponse.Info(userId, command.getNickname());
    }

    public UserResponse.Read getProfile(Long profileUserId, LoginUser currentUser) {
        boolean isOwner = (currentUser != null && profileUserId == currentUser.getUser().getId());

        User profileUser = userRepository.findById(profileUserId)
                .orElseThrow(() -> new CustomGlobalException(ErrorType.NOT_FOUND_PROFILE));

        List<String> userTechStacks = techStackRepository.findByUserId(profileUserId)
                .stream().map(userTechStack -> userTechStack.getName()).collect(Collectors.toList());
        List<String> evaluations = evaluationRepository.findTop3ByUserIdOrderByCountDesc(profileUserId)
                .stream().map(userEvaluation->userEvaluation.getDescription()).collect(Collectors.toList());
        List<UserGathering> userGatherings = userGatheringRepository.findByUserIdWithGathering(profileUserId);

        // Gathering ID 목록 추출
        List<Long> gatheringIds = userGatherings.stream()
                .map(ug -> ug.getGathering().getId())
                .collect(Collectors.toList());

        List<TechStack> allTechStacks = techStackRepository.findByGatheringIds(gatheringIds);

        // 맵 생성 ( 1: [TS1, TS2])
        Map<Long, List<TechStack>> techStackMap = allTechStacks.stream()
                .collect(Collectors.groupingBy(ts -> ts.getGathering().getId()));

        // "STUDY": [GatheringDto1, GatheringDto3],
        Map<String, List<GatheringDto.Read>> gatherings = userGatherings.stream()
                .collect(Collectors.groupingBy(
                        ug -> ug.getGathering().getGatheringType(),
                        Collectors.mapping(ug -> {
                            Gathering gathering = ug.getGathering();
                            List<TechStack> techStacks = techStackMap.getOrDefault(gathering.getId(), Collections.emptyList());
                            List<String> techStackDtos = techStacks.stream()
                                    .map(ts -> ts.getName())
                                    .collect(Collectors.toList());
                            return new GatheringDto.Read(gathering, techStackDtos);
                        }, Collectors.toList())));
        return new UserResponse.Read(profileUser, userTechStacks, evaluations, gatherings, isOwner);
    }

    public void checkNickname(String nickname) {
        Optional<User> optionalUser = userRepository.findByNickname(nickname);
        if (optionalUser.isPresent()){
            throw new CustomGlobalException(ErrorType.DUPLICATE_NICKNAME);
        }
    }
}
