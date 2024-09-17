"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import open from "../../public/images/visibility_on.svg";
import close from "../../public/images/visibility_off.svg";
import Image from "next/image";
import { useState } from "react";

type FormData = z.infer<typeof schema>;

// TODO: 백엔드 KEY 이슈
const API_URL = "Bearer ";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data: FormData) => {
    clearErrors();

    // TODO: 백엔드 보류 이슈

    try {
      const response = await axios.post(API_URL, data);
      console.log(response);

      if (response.data.success) {
        reset();
        console.log("로 그 인 성 공 🎉", response.data);
        // TODO: 첫 로그인 시 마이페이지로 리다이렉트
      } else {
        if (response.data.error === "401") {
          setError("id", {
            type: "manual",
            message: "존재하지 않는 아이디입니다.",
          });
        } else if (response.data.error === "402") {
          setError("password", {
            type: "manual",
            message: "비밀번호가 아이디와 일치하지 않습니다.",
          });
        }
      }
    } catch (error) {
      console.error("서버 오류🚨", error);
    }
  };

  return (
    <form
      className="flex flex-col"
      aria-label="로그인 양식"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="id" className={LABEL_CLASS}>
        아이디
      </label>
      <input
        type="email"
        id="id"
        placeholder="이메일을 입력해 주세요."
        {...register("id")}
        className={`${INPUT_CLASS} ${errors.id && ERROR_CLASS}`}
        required
        autoFocus
        aria-required="true"
      />
      <p
        className={ERROR_TEXT_CLASS}
      >{`${errors.id ? errors.id.message : " "}`}</p>
      <label htmlFor="password" className={LABEL_CLASS}>
        비밀번호
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="비밀번호를 입력해 주세요."
          {...register("password")}
          className={`${INPUT_CLASS} ${errors.password && ERROR_CLASS}`}
          required
          aria-required="true"
        />
        <Image
          src={showPassword ? open : close}
          alt={showPassword ? "비밀번호 숨기기" : "비밀번호 보이기"}
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer w-4 h-4 sm:w-6 sm:h-6 "
        />
      </div>
      <p
        className={ERROR_TEXT_CLASS}
      >{`${errors.password ? errors.password.message : " "}`}</p>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-gray-8 text-white py-[6px] md:py-[10px] rounded-lg sm:rounded-xl mt-[15px] sm:mt-4 mb-4 sm:mb-6 text-xs sm:text-base"
      >
        {isSubmitting ? "Login..." : "로그인"}
      </button>
    </form>
  );
}

const LABEL_CLASS = "text-xs sm:text-base py-2";
const INPUT_CLASS =
  "w-full py-[6px] sm:py-[10px] px-[10px] sm:px-4 bg-gray-2 placeholder-gray-8 rounded-lg sm:rounded-xl mb-2 sm:text text-sm sm:text-base";
const ERROR_CLASS = "border-red-ios-400";
const ERROR_TEXT_CLASS = "text-red-ios-400 text-xs mb-4 sm:mb-6";

const schema = z.object({
  id: z.string().email({ message: "유효한 이메일 주소를 입력해 주세요." }),
  password: z
    .string()
    .min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." }),
});
