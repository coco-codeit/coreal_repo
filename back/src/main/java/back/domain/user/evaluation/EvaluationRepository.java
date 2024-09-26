package back.domain.user.evaluation;

import java.util.List;
import java.util.Optional;

public interface EvaluationRepository {
    Optional<Evaluation> findById(Long id);
    Evaluation save(Evaluation evaluation);
    List<Evaluation> saveAll(List<Evaluation> evaluations);
    List<Evaluation> findByUserId(Long userId);
    List<Evaluation> findTop3ByUserIdOrderByCountDesc(Long userId);

}
