package back.domain.user.stack.dto;

import lombok.Getter;

public class TechStackDto {

    @Getter
    public static class Read{
        private String techStack;
        public Read(String techStack) {
            this.techStack = techStack;
        }
    }
}
