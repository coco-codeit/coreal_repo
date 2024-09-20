package back.domain.user.stack;

import java.util.List;
import java.util.Optional;

public interface TechStackRepository {
    Optional<TechStack> findById(Long id);
    TechStack save(TechStack techStack);
    List<TechStack> saveAll(List<TechStack> techStacks);
}
