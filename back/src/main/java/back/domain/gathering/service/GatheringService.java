package back.domain.gathering.service;

import back.common.config.auth.LoginUser;
import back.domain.gathering.Applicant;
import back.domain.gathering.Gathering;
import back.domain.gathering.repository.ApplicantRepository;
import back.domain.gathering.repository.GatheringRepository;
import back.domain.gathering.status.ApplicantStatus;
import java.util.List;
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
//        // 중복 신청 확인
//        if (applicantRepository.existsByUserIdAndGatheringId(loginUser.getUser().getId(), id)) {
//            throw new IllegalStateException("이미 신청한 모임입니다.");
//        }
//
//        // 정원 확인
//        if (gathering.getCurrentCapacity() >= gathering.getTotalCapacity()) {
//            throw new IllegalStateException("모임 정원이 초과되었습니다.");
//        }

        /**
         * 임시설정 유저 아이디 1
         * username : Eddy
         */
        Applicant applicant = new Applicant(
//            loginUser.getUser().getId(),
            1L,
//            loginUser.getUsername(),
            "Eddy",
            gathering
        );
        applicant.changeApplicantStatus(ApplicantStatus.ready);
        applicantRepository.save(applicant);
    }

    public void cancel(Long id, LoginUser loginUser) {
        //유저아이디와 모임아이디 정보를 통해 값을 가져온다
        applicantRepository.findById(id);
    }

    public List<Applicant> getApplicants(Long id) {

        List<Gathering> applicants = gatheringRepository.findApplicants(id);
        System.out.println(applicants.size());
        return applicantRepository.findByUserId(id);
    }
}
