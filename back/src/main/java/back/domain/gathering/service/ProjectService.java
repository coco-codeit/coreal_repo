package back.domain.gathering.service;

import back.api.gathering.dto.project.request.CreateProjectRequest;
import back.api.gathering.dto.project.response.ProjectListResponse;
import back.domain.gathering.Project;
import back.domain.gathering.repository.ProjectRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    public Project write(CreateProjectRequest request, long userId) {
        Project project = Project.from(request, userId);

        Project saved = projectRepository.save(project);
        System.out.println(saved.getDtype());
        return project;
    }

    public List<ProjectListResponse> getList(int page) {
        PageRequest pageRequest = PageRequest.of(page, 3, Sort.by("id"));

        List<ProjectListResponse> responses = projectRepository.findAll(pageRequest).stream()
            .map(ProjectListResponse::from)
            .toList();

        return responses;
    }

    public List<ProjectListResponse> getAllProjects() {
        List<Project> allProjects = projectRepository.findAll();
        log.info("Total projects: {}", allProjects.size());

        return allProjects.stream()
            .map(ProjectListResponse::from)
            .toList();
    }
}
