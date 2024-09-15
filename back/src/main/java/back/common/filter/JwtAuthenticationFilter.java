package back.common.filter;

import back.api.user.dto.UserRequest;
import back.domain.user.User;
import back.domain.user.UserRepository;
import back.domain.user.dto.UserResponse;
import back.common.config.auth.LoginUser;
import back.common.config.jwt.JwtProcess;
import back.common.util.CustomResponseUtil;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.io.IOException;

@Slf4j
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager,UserRepository userRepository) {
        super(authenticationManager);
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        log.debug("디버그 : attemptAuthentication 호출됨");
        try {
            ObjectMapper om = new ObjectMapper();
            UserRequest.Login loginRequest = om.readValue(request.getInputStream(), UserRequest.Login.class);

            UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                    loginRequest.getEmail(), loginRequest.getPassword());

            return authenticationManager.authenticate(token);
        } catch (Exception e) {
            CustomResponseUtil.unAuthentication(response, "아이디나 비밀번호가 틀렸습니다.");
        }
        return null;
    }


    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        log.debug("디버그 : successfulAuthentication 호출됨");
        LoginUser loginUser = (LoginUser) authResult.getPrincipal();
        String jwtToken = JwtProcess.create(loginUser);

        User user = userRepository.findByEmail(loginUser.getUsername()).get();
        boolean firstLoginCheck = user.isFirstLoginCheck();
        UserResponse.Login loginResponse = new UserResponse.Login(loginUser.getUser(), jwtToken, firstLoginCheck);
        if (firstLoginCheck == true){
            user.changeFirstLogin();
            userRepository.save(user);
        }
        CustomResponseUtil.success(response, loginResponse);
    }
}
