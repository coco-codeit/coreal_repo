package back.api.gathering.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

public class GatheringRequest {

    @Getter
    @AllArgsConstructor
    public static class Create{
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
}
