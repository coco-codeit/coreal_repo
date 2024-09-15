package back.domain.common.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ErrorType {

    NOT_FOUND_USER(404, "등록된 유저가 없습니다."),
    DUPLICATE_EMAIL(409, "중복된 이메일입니다. 다른 이메일을 사용해 주세요."),
    NON_MATCH_PASSWORD(400,"비밀번호가 일치하지 않습니다.");

    private final int status;
    private final String message;

}
