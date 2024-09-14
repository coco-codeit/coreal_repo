package back.api.gathering.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public class GatheringResponse {

    @Getter
    @AllArgsConstructor
    public static class Create{
        private Long id;
        private String gatheringType;
        private String gatheringName;
        private String progress;
        private String location;
        private LocalDateTime startDate;
        private LocalDateTime endDate;
        private String month;
        private String time;
        private Map<String,Integer> positions;
        private String description;
        private List<String> stackList;
    }

    @Getter
    @AllArgsConstructor
    public static class Detail{
        private Long gatheringId;
        private LocalDateTime createdAt;
        private String progress;
        private LocalDateTime startDate;
        private LocalDateTime endDate;
        private List<String> stackList;
        private String gatheringName;
        private String description;
        private String image;
        private int totalCapacity;
        private int currentCapacity;
        private String location;
        private String month;
        private String time;
    }

    @Getter
    @AllArgsConstructor
    public static class Participate{
        private Long userId;
        private Long gatheringId;
        private String gatheringName;
    }

    @Getter
    @AllArgsConstructor
    public static class Cancel{
        private Long userId;
        private Long gatheringId;
        private String gatheringName;
    }

    /**
     * /gatherings/{id}/manage
     * 어떤 페이지인지?
     * 밑에 특정 모임 신청자 리스트 조회가 있는데 왜 response값의
     * 리스트로 user를 받고 스택을 또 받는지?
     */
    @Getter
    @AllArgsConstructor
    public static class ManageGathering{
       private Long id;
       private String gatheringName;
       private String description;
       private List<String> stackList;
    }

    /**
     * /gatherings/{id}/manage/applicants
     * 어떤 페이지인지?
     * 내가 만든 모임중 특정 모임 신청자 리스트 정보 조회인데
     * 왜 기술스택을 받고 userTemp는 뭔지?
     */
    @Getter
    @AllArgsConstructor
    public static class ManageUser{
       private Long id;
       private String gatheringName;
       private String description;
       private List<String> stackList;
    }

    @Getter
    @AllArgsConstructor
    public static class Delete{
        private Long id;
        private String gatheringName;
    }

    @Getter
    @AllArgsConstructor
    public static class Update{
        private Long id;
        private String gatheringName;
    }
}
