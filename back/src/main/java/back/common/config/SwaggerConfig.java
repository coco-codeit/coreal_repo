package back.common.config;

import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    private Info apiInfo() {
        return new Info()
                .title("co-real application") // API의 제목
                .description("Co-Real Swagger UI") // API에 대한 설명
                .version("1.0.0"); // API의 버전
    }
}
