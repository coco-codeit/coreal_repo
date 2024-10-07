"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSignupMutation } from "../utils/postSignup";
import { FormField } from "../components/FormField";

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
  const onSubmit = async (data: FormData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...submitData } = data;
    const result = await signupMutation.mutateAsync(submitData);
    console.log(result);
  };

  return (
    <div className="border-4 border-gray-400 rounded-lg p-8 w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
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
        <div className="flex items-center justify-between">
          <button
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            type="submit"
          >
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
}
