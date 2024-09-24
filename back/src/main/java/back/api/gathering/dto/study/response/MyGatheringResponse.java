package back.api.gathering.dto.study.response;

import back.domain.gathering.GatheringStack;
import back.domain.gathering.Study;
import back.domain.gathering.status.GatheringType;
import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@AllArgsConstructor
@Data
public class MyGatheringResponse {

    Long id;
    String image;
    String title;//-> gatheringName
    String content;//-> description
    String organizer;//-> master
    GatheringType gatheringType;
    List<String> skills; //->stackList
    int participant; //currentCapacity
    int capacity; //total
//    List<Position>
    LocalDateTime dateTime; // 모임 생성일
    LocalDateTime registrationEnd;/// 모임 마감일
    LocalDateTime startDateTime; // 모임 시작일
    LocalDateTime canceledAt; //취소하면 취소일 아니면 null
    public static MyGatheringResponse from(Study study,String username) {
        return MyGatheringResponse.builder()
            .id(study.getId())
            .image(study.getImage())
            .title(study.getGatheringName())
            .content(study.getDescription())
            .organizer(username)
            .gatheringType(study.getGatheringType())
            .skills(study.getStackList().stream().map(stack -> stack.getName()).toList())
            .participant(study.getCurrentCapacity())
            .capacity(study.getTotalCapacity())
            .dateTime(study.getCreatedDate())
            .registrationEnd(study.getEndDate())//모임 마감일로 변경
            .startDateTime(study.getStartDate())
            .canceledAt(study.getEndDate()) //모임 취소일로 변경
            .build();
    }
}
