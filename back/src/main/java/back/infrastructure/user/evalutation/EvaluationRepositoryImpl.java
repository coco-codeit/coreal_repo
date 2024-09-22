package back.infrastructure.user.evalutation;

import back.domain.user.evaluation.Evaluation;
import back.domain.user.evaluation.EvaluationRepository;
import back.domain.user.stack.TechStack;
import back.domain.user.stack.TechStackRepository;
import back.infrastructure.user.stack.TechStackJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class EvaluationRepositoryImpl implements EvaluationRepository {

    private final EvaluationJpaRepository evaluationJpaRepository;

    @Override
    public Optional<Evaluation> findById(Long id) {
        return evaluationJpaRepository.findById(id);
    }

    @Override
    public Evaluation save(Evaluation evaluation) {
        return evaluationJpaRepository.save(evaluation);
    }

    @Override
    public List<Evaluation> saveAll(List<Evaluation> techStacks) {
        return evaluationJpaRepository.saveAll(techStacks);
    }

    @Override
    public List<Evaluation> findByUserId(Long userId) {
        return evaluationJpaRepository.findByUserId(userId);
    }
}