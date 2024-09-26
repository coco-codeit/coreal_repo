package back.domain.gathering;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@MappedSuperclass
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class BaseEntity {

    @Column(updatable = false) //update 방지
    private LocalDateTime createdDate;
    private LocalDateTime updatedDate;

    @PrePersist //persist 전 이벤트 발생
    public void prePersist() {
        LocalDateTime now = LocalDateTime.now();
        createdDate = now;
        updatedDate = now; //데이터를 미리 넣어두는 것이 좋다~
    }

    @PreUpdate //update 전 이벹
    public void preUpdate() {
        updatedDate = LocalDateTime.now();
    }
}
