package back.api.gathering;

import back.api.common.dto.CustomApiResponse;
import back.api.gathering.dto.study.request.AcceptStudyRequest;
import back.api.gathering.dto.study.request.CreateStudyRequest;
import back.api.gathering.dto.study.request.UpdateStudyRequest;
import back.api.gathering.dto.study.response.CreateStudyResponse;
import back.api.gathering.dto.study.response.GetStudyResponse;
import back.api.gathering.dto.study.response.MyGatheringResponse;
import back.api.gathering.dto.study.response.StudyListResponse;
import back.common.config.auth.LoginUser;
import back.domain.gathering.Study;
import back.domain.gathering.service.StudyService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class StudyController {

    private final StudyService studyService;

    /***
     * 1. study 생성
     * 2. study 목록
     * 서영님 파트
     */

    @Operation(summary = "스터디 생성")
    @PostMapping("/studies")
    public CustomApiResponse<CreateStudyResponse> saveStudy(
        @RequestBody @Valid CreateStudyRequest request
//         @AuthenticationPrincipal LoginUser loginUser
    ) {
//        @RequestPart("image") MultipartFile image
//
//        if(loginUser!=null){
//
//        }

        Study savedStudy = studyService.write(request, 1L);
        return CustomApiResponse.ok(CreateStudyResponse.from(savedStudy));
    }

    @Operation(summary = "스터디 리스트 조회")
    @GetMapping("/studies")
    public CustomApiResponse<List<StudyListResponse>> GetStudyListResponse(
        @RequestParam(defaultValue = "0") int page) {

        return CustomApiResponse.ok(studyService.getList(page));
    }


    @Operation(summary = "스터디 조회")
    @GetMapping("/studies/{studyId}")
    public GetStudyResponse get(@PathVariable(name = "studyId") Long id) {
        GetStudyResponse study = studyService.get(id);

        return study;
    }

    //내가 만든 모임 상세 수정
    @Operation(summary = "스터디 수정")
    @PatchMapping("/studies")
    public Long updateStudy(
        @PathVariable("id") Long id,
        @AuthenticationPrincipal LoginUser loginUser,
        @RequestBody @Valid UpdateStudyRequest request
    ) {
        //userId
        return studyService.edit(id, request);
    }

    //내가 만든 모임 삭제
    @Operation(summary = "스터디 삭제")
    @DeleteMapping("/gatherings/{id}/manage/delete")
    public void deleteStudy(
        @AuthenticationPrincipal LoginUser loginUser,
        @PathVariable("id") Long id) {
        studyService.delete(id, loginUser);
    }

    //내가 만든 모임 페이지 정보 조회
//    @Operation(summary = "내가 만든 모임 페이지 정보 조회")
//    @GetMapping("/gatherings/{id}/manage")
//    public CreateStudyResponse getMyGathering(@AuthenticationPrincipal LoginUser loginUser) {
//        loginUser.getUser().getId();
//
//    }ㄴ

    //내가 만든 모임 중 신청자 리스트 정보 조회
    @Operation(summary = "내가 만든 모임 페이지 조회")
    @GetMapping("/gatherings/manage")
    public List<MyGatheringResponse> myGatherings(
//        @AuthenticationPrincipal LoginUser loginUser,
        int page) {

//        return studyService.getMyGatherings(page,loginUser.getUser().getId());
        return studyService.getMyGatherings(page, 1L);
    }

    //모임 신청 승인 거절
    @Operation(summary = "모임 신청 승인 거절")
    @PostMapping("/gatherings/{id}/manage/accept")
    public void accept(@RequestBody AcceptStudyRequest acceptStudyRequest) {

    }

}
