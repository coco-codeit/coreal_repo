package back.infrastructure.user.stack;

import back.domain.user.User;
import back.domain.user.stack.TechStack;
import back.domain.user.stack.TechStackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class TechRepositoryImpl implements TechStackRepository {

    private final TechStackJpaRepository techStackJpaRepository;

    @Override
    public Optional<TechStack> findById(Long id) {
        return techStackJpaRepository.findById(id);
    }

    @Override
    public TechStack save(TechStack techStack) {
        return techStackJpaRepository.save(techStack);
    }

    @Override
    public List<TechStack> saveAll(List<TechStack> techStacks) {
        return techStackJpaRepository.saveAll(techStacks);
    }
}
