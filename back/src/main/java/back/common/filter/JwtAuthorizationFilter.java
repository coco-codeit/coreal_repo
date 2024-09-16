package back.common.filter;

import back.common.config.auth.LoginUser;
import back.common.config.jwt.JwtProcess;
import back.common.config.jwt.JwtUtil;
import back.common.util.CustomResponseUtil;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import java.io.IOException;

@Slf4j
public class JwtAuthorizationFilter extends BasicAuthenticationFilter {
    public JwtAuthorizationFilter(AuthenticationManager authenticationManager) {
        super(authenticationManager);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        if (isHeaderVerify(request,response)){
            String token = request.getHeader(JwtUtil.Header).replaceAll(JwtUtil.TOKEN_PREFIX, "");

            LoginUser loginUser = null;
            try {
                loginUser = JwtProcess.verify(token);
            }catch (TokenExpiredException e){
                CustomResponseUtil.unAuthentication(response,"토큰 만료 시간이 지났습니다.");
                return;
            } catch (Exception e){
                CustomResponseUtil.unAuthentication(response,"토큰이 유효하지 않습니다.");
                return;
            }

            Authentication authentication = new UsernamePasswordAuthenticationToken(loginUser, null, loginUser.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        chain.doFilter(request,response);
    }

    private boolean isHeaderVerify(HttpServletRequest request,HttpServletResponse response){
        String header = request.getHeader(JwtUtil.Header);
        if (header == null || !header.startsWith(JwtUtil.TOKEN_PREFIX)){
            return false;
        }
        return true;
    }
}
