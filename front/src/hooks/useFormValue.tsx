import { SetStateAction, useEffect, useState } from "react";

interface OptionInterface {
  rules: { rule: RegExp; msg: string }[];
}

interface RulesetInterface {
  [option: string]: OptionInterface;
}

interface UseFormValueOption {
  type?: string;
  ruleset?: RulesetInterface;
}

const defaultruleset: RulesetInterface = {
  nickname: {
    rules: [
      {
        rule: /^[a-zA-Z가-힣]{2,9}$/,
        msg: "닉네임은 2자 이상 10자 미만이어야 합니다.",
      },
    ],
  },
  password: {
    rules: [
      {
        rule: /^(?=.*[a-zA-Z])$/,
        msg: "비밀번호는 최소 1개 이상의 영문자를 포함해야 합니다.",
      },
      { rule: /^(?=.*\d)$/, msg: "비밀번호는 숫자가 포함되어야 합니다." },
      {
        rule: /^(?=.*[!@#$%^&*(),.?":{}|<>])$/,
        msg: "비밀번호는 최소 하나 이상의 특수문자를 포함해야 합니다.",
      },
      {
        rule: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,20}$/,
        msg: "비밀번호는 영문과 숫자, 특수문자를 조합하여 8자 이상 20자 이하여야 합니다.",
      },
    ],
  },
};
/**
 * Input을 위한 상태 훅으로,
 * 유효성 검사와 에러 메시지를 제공합니다.
 * @function useFormValue
 * @template T
 * @param {T} initialValue - 초기값으로 설정할 값.
 * @param {UseFormValueOption} [option] - 유효성 검사 옵션.
 * @param {string} [option.type] - 유효성 검사를 위한 타입 (예: "nickname", "password").
 * @param {Object} [option.ruleset] - 유효성 검사 규칙을 포함하는 객체.
 * @param {Array<{ rule: RegExp, msg: string }>} option.ruleset[type].rules - 해당 타입의 규칙 목록.
 * @returns {[T, React.Dispatch<SetStateAction<T>>, boolean, string]}
 */

export default function useFormValue<T>(
  initialValue: T,
  option?: UseFormValueOption,
): [T, React.Dispatch<SetStateAction<T>>, boolean, string] {
  const [mount, setMount] = useState<boolean>(false);
  const [value, setValue] = useState<T>(initialValue);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const ruleset =
    option && option.ruleset
      ? { ...defaultruleset, ...option.ruleset }
      : defaultruleset;

  useEffect(() => {
    setMount(true);
  }, []);

  useEffect(() => {
    if (mount && option?.type && ruleset.hasOwnProperty(option.type)) {
      setIsError(false);
      setErrorMessage("");
      for (const { rule, msg } of ruleset[option.type].rules) {
        if (!rule.test(`${value}`)) {
          setIsError(true);
          setErrorMessage(msg);
          break;
        }
      }
    }
  }, [mount, value, ruleset, option?.type]);

  return [value, setValue, isError, errorMessage];
}
