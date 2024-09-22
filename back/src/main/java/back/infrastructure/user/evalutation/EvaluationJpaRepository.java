package back.infrastructure.user.evalutation;

import back.domain.user.evaluation.Evaluation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EvaluationJpaRepository extends JpaRepository<Evaluation,Long> {
    List<Evaluation> findByUserId(Long userId);
}
