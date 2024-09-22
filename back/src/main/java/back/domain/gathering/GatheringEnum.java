package back.domain.gathering;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum GatheringEnum {
    STUDY("study"),
    PROJECT("project");

    private final String text;

}
