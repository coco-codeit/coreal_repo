package back.domain.user.evaluation.dto;

import lombok.Getter;

public class EvaluationDto {

    @Getter
    public static class Read {
        private String description;

        public Read(String description) {
            this.description = description;
        }
    }
}
