package back.domain.gathering.dto;

import back.domain.gathering.Gathering;
import back.domain.user.stack.dto.TechStackDto;
import lombok.Getter;

import java.util.List;

public class GatheringDto {

    @Getter
    public static class Read{
        private Long id;
        private String gatheringImg;
        private String gatheringName;
        private String description;
        private List<TechStackDto.Read> techStacks;

        public Read(Gathering gathering,List<TechStackDto.Read> techStacks) {
            this.id = gathering.getId();
            this.gatheringImg = gathering.getImage();
            this.gatheringName = gathering.getGatheringName();
            this.description = gathering.getDescription();
            this.techStacks = techStacks;
        }
    }
}
