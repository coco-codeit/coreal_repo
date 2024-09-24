//package back.domain.gathering.repository;
//
//import back.domain.gathering.Project;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//
//public interface ProjectRepository extends JpaRepository<Project,Long> {
//
//    @Query("select p from Project p join fetch p.positions where p.id = :id")
//    Project findByIdWithPositions(@Param("id") Long id);
//}
