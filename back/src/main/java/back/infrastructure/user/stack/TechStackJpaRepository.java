package back.infrastructure.user.stack;

import back.domain.user.User;
import back.domain.user.stack.TechStack;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TechStackJpaRepository extends JpaRepository<TechStack,Long> {

}
