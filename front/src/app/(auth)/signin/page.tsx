"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn, signOut } from "next-auth/react";
import Toast from "../components/toast";
import { FormField } from "../components/FormField";

const signinSchema = z.object({
  email: z.string().min(1, "이메일을 입력해주세요."),
  password: z.string().min(8, "비밀번호가 8자 이상이 되도록 해 주세요."),
});

type FormData = z.infer<typeof signinSchema>;

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signinSchema),
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const onSubmit = async (data: FormData) => {
    console.log(data);
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      setToastMessage(
        "로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.",
      );
    } else {
      setToastMessage("로그인에 성공했습니다!");
      // 로그인 성공시 페이지 이동
    }
  };

  return (
    <div className="border-4 border-gray-400 rounded-lg p-8 w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <FormField
          label="아이디"
          name="email"
          type="text"
          register={register}
          error={errors.email?.message}
        />
        <FormField
          label="비밀번호"
          name="password"
          type="password"
          register={register}
          error={errors.password?.message}
        />
        <div className="flex items-center justify-between">
          <button
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            type="submit"
          >
            로그인
          </button>
        </div>
      </form>
      <button
        className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        onClick={() => signOut()}
      >
        로그아웃
      </button>
      {toastMessage && <Toast>{toastMessage}</Toast>}
    </div>
  );
}
