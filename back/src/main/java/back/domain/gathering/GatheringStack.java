package back.domain.gathering;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
@Table(name = "gathering_stacks")
public class GatheringStack {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name; //기술명

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "gathering_id")
    private Gathering gathering; //외래키

    public GatheringStack(String name, Gathering gathering) {
        this.name = name;
        this.gathering = gathering;
    }
    public void setGathering(Gathering gathering) {
        this.gathering = gathering;
    }
    public void changeGathering(Gathering gathering) {
        this.gathering = gathering;
        gathering.getStackList().add(this);
    }

}
