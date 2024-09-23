package back.domain.user.evaluation.dto;

import back.domain.user.evaluation.Evaluation;
import lombok.Getter;
import lombok.Setter;

public class EvaluationDto {

    @Getter
    @Setter
    public static class Read {
        private int rank;
        private String key;
        private int count;

        public Read(Evaluation evaluation) {
            this.key = evaluation.getDescription();
            this.count = evaluation.getCount();
        }
    }
}
