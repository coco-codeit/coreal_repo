package back.api.user;

import back.api.common.dto.CustomApiResponse;
import back.api.user.dto.UserRequest;
import back.common.config.auth.LoginUser;
import back.domain.user.dto.UserResponse;
import back.domain.user.UserService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @Operation(summary = "유저 회원가입")
    @PostMapping("/join")
    public CustomApiResponse<UserResponse.Join> join(@RequestBody UserRequest.Join request) {
        return CustomApiResponse.ok("회원가입 성공", userService.join(request.toCommand()));
    }

    @Operation(summary = "프로필 조회")
    @GetMapping("/user/{id}/profile")
    public CustomApiResponse<UserResponse.Read> getProfile(@PathVariable Long id,
                                                           @AuthenticationPrincipal LoginUser loginUser) {
        return CustomApiResponse.ok("프로필 정보를 성공적으로 조회하였습니다."
                , userService.getProfile(id,loginUser.getUser().getId()));
    }

    @Operation(summary = "프로필 정보 수정")
    @PatchMapping("/user/{id}/profile")
    public CustomApiResponse<UserResponse.Update> updateProfile(@RequestBody UserRequest.Update request) {
        return CustomApiResponse.ok("프로필 정보 수정", new UserResponse.Update(1L, "닉네임", "coreal@naver.com", "s3주소"));
    }

    @Operation(summary = "신청한 스터디 목록 조회")
    @GetMapping("/user/gathering")
    public CustomApiResponse<List<UserResponse.ReadGathering>> getAppliedGathering() {
        return CustomApiResponse.ok("신청한 스터디 목록 조회", List.of(
                new UserResponse.ReadGathering(
                        1L, "인프런 스프링 강의 스터디1", "코리얼", LocalDateTime.now(), LocalDateTime.now(),
                        "월~금", "오전~오후 파트", List.of("java", "spring"), "s3 주소", "온라인",
                        20, 3
                ),
                new UserResponse.ReadGathering(
                        2L, "인프런 스프링 강의 스터디2", "리얼코", LocalDateTime.now(), LocalDateTime.now(),
                        "목", "오전 파트", List.of("java", "spring"), "s3 주소", "오프라인",
                        20, 3
                )));
    }

    @Operation(summary = "유저 추가 정보 저장")
    @PostMapping("/user/info")
    public CustomApiResponse<UserResponse.Info> saveInfo(@RequestBody UserRequest.Info request,
                                                         @AuthenticationPrincipal LoginUser loginUser) {
        return CustomApiResponse.ok("회원 추가 정보 저장", userService.saveInfo(loginUser.getUser().getId(), request.toCommand()));
    }

    @Operation(summary = "닉네임 중복 체크")
    @GetMapping("/check-nickname")
    public CustomApiResponse<Void> getUserProfile(@RequestBody String nickname){
        userService.checkNickname(nickname);
        return CustomApiResponse.ok("사용 가능한 닉네임입니다.",null);
    }
}
