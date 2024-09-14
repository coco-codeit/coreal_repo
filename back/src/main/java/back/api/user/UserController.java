package back.api.user;

import back.api.common.dto.CustomApiResponse;
import back.api.gathering.dto.GatheringResponse;
import back.api.user.dto.UserRequest;
import back.api.user.dto.UserResponse;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserController {

    @Operation(summary = "유저 회원가입")
    @PostMapping("/join")
    public CustomApiResponse<UserResponse.Join> join(@RequestBody UserRequest.Join request) {
        return CustomApiResponse.ok("회원가입 성공", new UserResponse.Join(1L, "coreal@naver.com"));
    }

    @Operation(summary = "프로필 조회")
    @GetMapping("/user/profile")
    public CustomApiResponse<UserResponse.Read> getProfile() {
        return CustomApiResponse.ok("프로필 정보를 성공적으로 조회하였습니다."
                , new UserResponse.Read(1L, "닉네임", "coreal@naver.com", "s3주소", 38));
    }

    @Operation(summary = "프로필 정보 수정")
    @PatchMapping("/user/profile")
    public CustomApiResponse<UserResponse.Update> updateProfile(@RequestBody UserRequest.Update request) {
        return CustomApiResponse.ok("프로필 정보 수정",new UserResponse.Update(1L, "닉네임", "coreal@naver.com", "s3주소"));
    }

    @Operation(summary = "신청한 스터디 목록 조회")
    @GetMapping("/user/gathering")
    public CustomApiResponse<List<UserResponse.ReadGathering>> getAppliedGathering(){
        return CustomApiResponse.ok("신청한 스터디 목록 조회",List.of(
                new UserResponse.ReadGathering(
                        1L, "인프런 스프링 강의 스터디1", "코리얼", LocalDateTime.now(), LocalDateTime.now(),
                        "월~금", "오전~오후 파트",List.of("java", "spring"), "s3 주소", "온라인",
                         20, 3
                ),
                new UserResponse.ReadGathering(
                        2L, "인프런 스프링 강의 스터디2", "리얼코", LocalDateTime.now(), LocalDateTime.now(),
                        "목", "오전 파트",List.of("java", "spring"), "s3 주소", "오프라인",
                         20, 3
                )));
    }

}
