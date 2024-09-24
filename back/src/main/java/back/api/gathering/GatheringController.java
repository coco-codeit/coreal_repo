package back.api.gathering;

import back.api.common.dto.CustomApiResponse;
import back.api.gathering.dto.GatheringRequest;
import back.api.gathering.dto.GatheringResponse;
import back.common.config.auth.LoginUser;
import back.domain.gathering.service.GatheringService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class GatheringController {

    private final GatheringService gatheringService;

    @Operation(summary = "모임 생성")
    @PostMapping("/gatherings")
    public CustomApiResponse<GatheringResponse.Create> create(@RequestBody GatheringRequest.Create request,
                                                              @RequestPart("iamge") MultipartFile image) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("백엔드 개발자", 3);
        map.put("프론트엔드 개발자", 2);
        return CustomApiResponse.ok("모임 생성", new GatheringResponse.Create(
                1L, "스터디", "인프런 스프링 강의 스터디",
                "온라인", "서울시 강남구", LocalDateTime.now(), LocalDateTime.now(),
                "월~금", "오준~오후 파트", map, "열심히 해요!", List.of("java", "spring")
        ));
    }

    /**
     * 리스트로 수정
     */
    @Operation(summary = "모임 상세 페이지 조회")
    @GetMapping("/gatherings/{id}")
    public CustomApiResponse<List<GatheringResponse.Detail>> getGathering(@PathVariable Long id,
                                                                          @RequestParam(value = "gubun", defaultValue = "STUDY") String gubun) {
        return CustomApiResponse.ok("모임 상세 페이지 조회", List.of(
                new GatheringResponse.Detail(
                        id, LocalDateTime.now(), "온라인", LocalDateTime.now(), LocalDateTime.now(),
                        List.of("java", "spring"), "인프런 스프링 강의 스터디", "열심히 해요!",
                        "s3주소", 20, 3, "서울시 강남구", "월~금", "오전~오후 파트"
                ),
                new GatheringResponse.Detail(
                        id, LocalDateTime.now(), "오프라인", LocalDateTime.now(), LocalDateTime.now(),
                        List.of("java", "spring"), "인프런 스프링 강의 스터디", "열심히 해요!",
                        "s3주소", 20, 3, "서울시 강남구", "목", "오전 파트"
                )));
    }

    @Operation(summary = "모임 참여")
    @PostMapping("/gatherings/{id}")
    public CustomApiResponse<GatheringResponse.Participate> participate(@PathVariable Long id) {
        return CustomApiResponse.ok("모임 참여 완료", new GatheringResponse.Participate(
                1L, id, "인프런 스프링 강의 스터디"
        ));
    }

    @Operation(summary = "모임 취소")
    @PutMapping("/gatherings/{id}")
    public CustomApiResponse<GatheringResponse.Cancel> cancel(@PathVariable Long id) {
        return CustomApiResponse.ok("모임 취소 완료", new GatheringResponse.Cancel(
                1L, id, "인프런 스프링 강의 스터디"
        ));
    }

    @Operation(summary = "모임 삭제")
    @DeleteMapping("/gatherings/{id}")
    public CustomApiResponse<GatheringResponse.Delete> delete(@PathVariable Long id) {
        return CustomApiResponse.ok("모임 삭제 완료", new GatheringResponse.Delete(1L, "인프런 스프링 강의 스터디"));
    }

    /**
     * request body 안적혀 있음
     */
    @Operation(summary = "논의 필요")
    @PatchMapping("/gatherings/{id}")
    public CustomApiResponse<GatheringResponse.Update> update(@PathVariable Long id) {
        return CustomApiResponse.ok("모임 삭제 완료", new GatheringResponse.Update(1L, "새롭게 바뀐 인프런 스프링 강의 스터디"));
    }

    /**
     * 내가 만든 모임 관리 페이지 정보 조회
     * 각 모임의 신청대기 유저리스트 정보 조회
     */
    @Operation(summary = "논의 필요")
    @GetMapping("/manages")
    public void getUserGatheringList() {

    }

    @Operation(summary = "논의 필요")
    @GetMapping("/gathering/{id}/review")
    public void getReview() {

    }

    //==여기부터 실제 동작 코드==//
    /***
     *
     * @param loginUser
     * @param id
     */

    @Operation(summary = "모임 참여 신청")
    @PostMapping("/gatherings/{id}/join")
    public void join(
        @AuthenticationPrincipal LoginUser loginUser,
        @PathVariable("id") Long id
    ) {
        //유저의 정보를 받아 가입을 신청합니다
        gatheringService.join(id, loginUser);
    }

    @Operation(summary = "모임 참여 취소")
    @PutMapping("/gatherings/{id}/cancel")
    public void cancel(
        @AuthenticationPrincipal LoginUser loginUser,
        @PathVariable("id") Long id
    ) {

    }
}
