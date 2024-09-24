//package back.domain.gathering.service;
//
//import back.api.gathering.dto.ProjectRequest.Create;
//import back.domain.gathering.Project;
//import back.domain.gathering.repository.ProjectRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//@Service
//@RequiredArgsConstructor
//public class ProjectService {
//
//    private final ProjectRepository projectRepository;
//    public void write(Create request) {
//        Project project = Project.from(request);
//
//        Project saved = projectRepository.save(project);
//    }
//
//    public Project find(Long id) {
//        System.out.println(projectRepository.count());
//        return projectRepository.findByIdWithPositions(id);
//    }
//}
