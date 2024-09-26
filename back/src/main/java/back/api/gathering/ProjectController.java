package back.api.gathering;

import back.api.common.dto.CustomApiResponse;
import back.api.gathering.dto.project.request.CreateProjectRequest;
import back.api.gathering.dto.project.response.CreateProjectResponse;
import back.api.gathering.dto.project.response.ProjectListResponse;
import back.api.gathering.dto.study.response.CreateStudyResponse;
import back.domain.gathering.Project;
import back.domain.gathering.service.ProjectService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @Operation(summary = "스터디 생성")
    @PostMapping("/projects")
    public CustomApiResponse<CreateProjectResponse> saveStudy(
        @RequestBody @Valid CreateProjectRequest request
//         @AuthenticationPrincipal LoginUser loginUser
    ){
//        @RequestPart("image") MultipartFile image
//
//        if(loginUser!=null){
//
//        }

        Project savedStudy = projectService.write(request, 1L);
        return CustomApiResponse.ok(CreateProjectResponse.from(savedStudy));
    }
    @Operation(summary = "포르젝트 리스트 조회")
    @GetMapping("/projects")
    public CustomApiResponse<List<ProjectListResponse>> GetStudyListResponse(@RequestParam(defaultValue = "0") int page) {
        return CustomApiResponse.ok(projectService.getList(page));
    }

    @Operation(summary = "포르젝트 리스트 조회")
    @GetMapping("/projects/all")
    public List<ProjectListResponse> AllProjects() {
        return projectService.getAllProjects();
    }
}
