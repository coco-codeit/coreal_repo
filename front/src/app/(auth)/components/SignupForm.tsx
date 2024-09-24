"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormData = z.infer<typeof signupSchema>;

// TODO: 백엔드 KEY 이슈
const API_URL = "Bearer ";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: FormData) => {
    clearErrors();

    // TODO: 백엔드 KEY 이슈

    try {
      const response = await axios.post(API_URL, data);
      console.log(response);

      if (response.data.success) {
        reset();
        console.log("회 원 가 입 성 공 ✨", response.data);
      } else {
        if (response.data.error === "403") {
          setError("nickname", {
            type: "manual",
            message: "이미 존재하는 닉네임입니다.",
          });
        } else if (response.data.error === "404") {
          setError("id", {
            type: "manual",
            message: "이미 존재하는 이메일입니다.",
          });
        } else if (response.data.error === "405") {
          setError("passwordConfirm", {
            type: "manual",
            message: "비밀번호가 일치하지 않습니다.",
          });
        }
      }
    } catch (error) {
      console.error("회원가입 서버 오류🚨", error);
    }
  };

  return (
    <form
      className="flex flex-col justify-center"
      aria-label="회원가입 양식"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* 피그마 디자인 작업후 추후 react-icons로 변경예정. images에서 이미지 가져다 사용했습니다. */}
      <div className="relative mx-auto w-20 sm:w-[106px] h-[81px] sm:h-[100px] mt-10 mb-[33px] sm:mb-14">
        <Image src="/images/profile.png" alt="사용자 프로필" fill />
        <div className="relative w-6 sm:w-9 h-6 sm:h-9 left-14 top-14 sm:left-16 sm:top-16">
          <Image src="/images/github.svg" alt="수정 아이콘" fill />
        </div>
      </div>
      <label htmlFor="nickname" className={LABEL_CLASS}>
        닉네임
      </label>
      <input
        type="text"
        id="nickname"
        placeholder="닉네임을 입력해 주세요."
        {...register("nickname")}
        className={`${INPUT_CLASS} ${errors.id && ERROR_CLASS}`}
        autoFocus
        aria-required="true"
      />
      <small
        className={ERROR_TEXT_CLASS}
      >{`${errors.id ? errors.id.message : " "}`}</small>
      <label htmlFor="id" className={LABEL_CLASS}>
        아이디
      </label>
      <input
        type="email"
        id="id"
        placeholder="이메일을 입력해 주세요."
        {...register("id")}
        className={`${INPUT_CLASS} ${errors.id && ERROR_CLASS}`}
        autoFocus
        aria-required="true"
      />
      <small
        className={ERROR_TEXT_CLASS}
      >{`${errors.id ? errors.id.message : " "}`}</small>
      <label htmlFor="password" className={LABEL_CLASS}>
        비밀번호
      </label>
      <div className="relative">
        <input
          type="password"
          id="password"
          placeholder="비밀번호를 입력해 주세요."
          {...register("password")}
          className={`${INPUT_CLASS} ${errors.password && ERROR_CLASS}`}
          aria-required="true"
        />
        {/* TODO: React-icons로 password visibility 수정 */}
      </div>
      <small
        className={ERROR_TEXT_CLASS}
      >{`${errors.password ? errors.password.message : " "}`}</small>
      <label htmlFor="passwordConfirm" className={LABEL_CLASS}>
        비밀번호 확인
      </label>
      <div className="relative">
        <input
          type="password"
          id="passwordConfirm"
          placeholder="비밀번호를 입력해 주세요."
          {...register("passwordConfirm")}
          className={`${INPUT_CLASS} ${errors.passwordConfirm && ERROR_CLASS}`}
          aria-required="true"
        />
        {/* TODO: React-icons로 password visibility 수정 */}
      </div>
      <small
        className={ERROR_TEXT_CLASS}
      >{`${errors.passwordConfirm ? errors.passwordConfirm.message : " "}`}</small>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-gray-8 text-white py-[6px] md:py-[10px] rounded-lg sm:rounded-xl mt-[15px] sm:mt-4 mb-4 sm:mb-6 text-xs sm:text-base"
      >
        {isSubmitting ? " 회원가입 중" : "가입완료"}
      </button>
    </form>
  );
}

const LABEL_CLASS = "text-xs sm:text-base py-2";
const INPUT_CLASS =
  "w-full py-[6px] sm:py-[10px] px-[10px] sm:px-4 bg-gray-2 placeholder-gray-8 rounded-lg sm:rounded-xl mb-2 sm:text text-sm sm:text-base";
const ERROR_CLASS = "border-red-ios-400";
const ERROR_TEXT_CLASS = "text-red-ios-400 text-xs mb-4 sm:mb-6";

const signupSchema = z.object({
  nickname: z.string().min(2, "닉네임은 최소 2자 이상이어야 합니다."),
  id: z.string().min(1, "유효한 이메일 주소를 입력해 주세요."),
  password: z.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다."),
  passwordConfirm: z.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다."),
});
