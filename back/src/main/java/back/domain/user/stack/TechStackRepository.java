package back.domain.user.stack;

import java.util.List;
import java.util.Optional;

public interface TechStackRepository {
    Optional<TechStack> findById(Long id);
    List<TechStack> findByUserId(Long userId);
    List<TechStack> findByGatheringId(Long gatheringId);
    TechStack save(TechStack techStack);
    List<TechStack> saveAll(List<TechStack> techStacks);
    List<TechStack> findByGatheringIds(List<Long> gatheringIds);
}
