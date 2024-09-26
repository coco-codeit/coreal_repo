package back.domain.gathering.service;

import back.api.gathering.dto.study.request.CreateStudyRequest;
import back.api.gathering.dto.study.request.UpdateStudyRequest;
import back.api.gathering.dto.study.response.GetStudyResponse;
import back.api.gathering.dto.study.response.MyGatheringResponse;
import back.api.gathering.dto.study.response.StudyListResponse;
import back.api.gathering.dto.study.response.StudyListResponse.StudyListResponseBuilder;
import back.common.config.auth.LoginUser;
import back.domain.gathering.Study;
import back.domain.gathering.repository.StudyRepository;
import back.domain.user.UserRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class StudyService {

    private final StudyRepository studyRepository;
    private final UserRepository userRepository;

    @Transactional
    public Study write(CreateStudyRequest request, Long userId) {
        Study study = Study.from(request, userId);
        return studyRepository.save(study);
    }

    @Transactional
    public Long edit(Long id, UpdateStudyRequest updateStudyRequest) {
        Study study = studyRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 스터디입니다."));

        //수정 코드
        return study.getId();
    }

    public GetStudyResponse get(Long id) {
        Study study = studyRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 스터디입니다."));

        return GetStudyResponse.from(study);
    }

    public List<StudyListResponse> getList(int page) {
        PageRequest pageRequest = PageRequest.of(page, 3, Sort.by("id"));

        return studyRepository.findAll(pageRequest).stream()
            .map(StudyListResponse::from)
            .toList();
    }

    @Transactional
    public void delete(Long id, LoginUser loginUser) {
        Study study = studyRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 스터디입니다."));

        if(study.getMasterId().equals(loginUser.getUser().getId())){
            studyRepository.delete(study);
        }else{
            throw new IllegalArgumentException("권한이 없습니다");
        }
    }

    public List<MyGatheringResponse> getMyGatherings(int page, Long id) {

        PageRequest pageRequest = PageRequest.of(page, 5, Sort.by("id"));
//        String username = userRepository.findById(id).orElseThrow().getUsername();
        String username = "eddy";
        return studyRepository.findAllByMasterId(id, pageRequest).stream()
            .map(study -> MyGatheringResponse.from(study,username))
            .toList();
    }
}
