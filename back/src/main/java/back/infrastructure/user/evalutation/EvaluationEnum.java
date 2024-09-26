package back.infrastructure.user.evalutation;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum EvaluationEnum {
    c1("피드백이 빨라요"),
    c2("커뮤니케이션이 잘 돼요"),
    c3("시간 약속을 잘 지켜요"),
    c4("아이디어가 좋아요"),
    c5("문제해결 능력이 뛰어나요"),
    c6("리더십이 좋아요"),
    c7("팔로워십이 좋아요"),
    c8("적극적이에요"),
    c9("맡은 일을 끝까지 해내요"),
    c10("세심하고 꼼꼼해요"),
    ;

    private final String text;
}
