/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSignupMutation } from "../utils/postSignup";
import { FormField } from "../components/FormField";
import { useRouter } from "next/navigation";
import Toast from "../components/toast";

const signupSchema = z
  .object({
    name: z.string().min(1, "이름을 입력해주세요."),
    email: z.string().min(1, "이메일을 입력해주세요."),
    companyName: z.string().min(1, "회사명을 입력해 주세요."),
    password: z.string().min(8, "비밀번호가 8자 이상이 되도록 해 주세요."),
    confirmPassword: z.string().min(1, "비밀번호 확인은 필수입니다."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof signupSchema>;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
  });

  const signupMutation = useSignupMutation();
  const router = useRouter();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...submitData } = data;
    try {
      setIsLoading(true);
      const result = await signupMutation.mutateAsync(submitData);

      setToastMessage("회원가입에 성공했습니다!");
      // 회원가입 성공 시 로그인 페이지로 이동
      setTimeout(() => router.push("/signin"), 2000);
    } catch (error) {
      setIsLoading(false);
      setToastMessage("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="w-full max-w-[510px] md:min-w-[510px] min-h-[710px] rounded-3xl px-4 sm:px-[54px] py-8 bg-white shadow-md mt-[-60px]">
      <div className="w-full h-full flex flex-col">
        <span className="text-2xl font-semibold text-left text-gray-800 mb-[32px]">
          회원가입
        </span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mb-4 flex-grow overflow-y-auto"
        >
          <FormField
            label="이름"
            name="name"
            type="text"
            register={register}
            error={errors.name?.message}
          />
          <FormField
            label="아이디"
            name="email"
            type="text"
            register={register}
            error={errors.email?.message}
          />
          <FormField
            label="회사명"
            name="companyName"
            type="text"
            register={register}
            error={errors.companyName?.message}
          />
          <FormField
            label="비밀번호"
            name="password"
            type="password"
            register={register}
            error={errors.password?.message}
          />
          <FormField
            label="비밀번호 확인"
            name="confirmPassword"
            type="password"
            register={register}
            error={errors.confirmPassword?.message}
          />
          <button
            className={`w-full font-semibold py-2.5 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-[16px] ${
              isLoading
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-400 hover:bg-gray-500 text-white"
            }`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "로딩중..." : "회원가입"}
          </button>
        </form>
        <p className="text-[15px] font-medium text-gray-800 text-center">
          이미 계정이 있으신가요?{" "}
          <button
            className="text-orange-600 underline"
            onClick={() => {
              router.push("/signin");
            }}
          >
            로그인
          </button>
        </p>
      </div>
      {toastMessage && <Toast>{toastMessage}</Toast>}
    </div>
  );
}
