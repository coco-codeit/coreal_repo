package back.domain.gathering.service;

import back.common.config.auth.LoginUser;
import back.domain.gathering.Applicant;
import back.domain.gathering.Gathering;
import back.domain.gathering.repository.ApplicantRepository;
import back.domain.gathering.repository.GatheringRepository;
import back.domain.gathering.status.ApplicantStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GatheringService {

    private final GatheringRepository gatheringRepository;
    private final ApplicantRepository applicantRepository;
    public void join(Long id, LoginUser loginUser) {
        Gathering gathering = gatheringRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 스터디입니다."));

        Applicant applicant = new Applicant(
            loginUser.getUser().getId(),
            loginUser.getUsername(),
            gathering
        );
        applicant.changeApplicantStatus(ApplicantStatus.ready);
        applicantRepository.save(applicant);
    }

    public void cancel(Long id, LoginUser loginUser) {
        //유저아이디와 모임아이디 정보를 통해 값을 가져온다
        applicantRepository.findById(id);
    }
}
