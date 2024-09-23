package back.domain.user.dto;

import back.common.util.DateUtil;
import back.domain.gathering.Gathering;
import back.domain.gathering.GatheringEnum;
import back.domain.gathering.dto.GatheringDto;
import back.domain.user.User;
import back.domain.user.evaluation.Evaluation;
import back.domain.user.evaluation.dto.EvaluationDto;
import back.domain.user.stack.TechStack;
import back.domain.user.stack.dto.TechStackDto;
import back.domain.user.usergatherting.UserGathering;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class UserResponse {

    @Getter
    @AllArgsConstructor
    public static class Join {
        private Long id;
        private String email;

    }

    @Getter
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Read {
        private Long id;
        private String username;
        private String nickname;
        private String profileImage;
        private int temperature;
        private List<String> techStacks;
        private List<EvaluationDto.Read> evaluations;
        private List<GatheringDto.Read> gatheringStudy;
        private List<GatheringDto.Read> gatheringProject;
        private boolean isOwner;

        public Read(User user, List<String> userTechStacks, List<EvaluationDto.Read> evaluations, Map<String, List<GatheringDto.Read>> gatherings , boolean isOwner) {
            this.id = user.getId();
            this.username = user.getUsername();
            this.nickname = user.getNickname();
            this.profileImage = user.getProfileImage();
            this.temperature = user.getUserTemp();
            this.techStacks = userTechStacks;
            this.evaluations = evaluations;
            this.gatheringStudy = gatherings.get(GatheringEnum.STUDY.getText());
            this.gatheringProject = gatherings.get(GatheringEnum.PROJECT.getText());
            this.isOwner = isOwner;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class Update {
        private Long id;
        private String nickname;
        private String email;
        private String profileImage;
    }

    @Getter
    @AllArgsConstructor
    public static class ReadGathering {
        private Long id;
        private String gatheringName;
        private String gatheringOwner;
        private LocalDateTime startDate;
        private LocalDateTime endDate;
        private String month;
        private String time;
        private List<String> stacks;
        private String image;
        private String progress;
        private int totalCapacity;
        private int currentCapacity;
    }

    @Getter
    public static class Login {
        private Long id;
        private String username;
        private String nickname;
        private String accessToken;
        private boolean isFirstLogin;
        private String createdAt;

        public Login(User user, String accessToken, boolean isFirstLogin) {
            this.id = user.getId();
            this.username = user.getEmail();
            this.nickname = user.getNickname();
            this.accessToken = accessToken;
            this.createdAt = DateUtil.toStringFormat(LocalDateTime.now());
            this.isFirstLogin = isFirstLogin;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class Info {
        private Long id;
        private String nickname;
    }
}
