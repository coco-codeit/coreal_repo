"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import Toast from "../components/toast";
import { FormField } from "../components/FormField";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

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
      setTimeout(() => router.push("/"), 2000);
    }
  };

  return (
    <div className="w-[343px] sm:w-[608px] md:w-[510px] md:min-w-[510px] md:h-[422px] rounded-3xl px-[16px] py-[32px] sm:px-[54px] sm:py-[32px] bg-white shadow-md">
      <div className="w-full max-w-[311px] h-[358px] sm:max-w-[500px] sm:h-[358px] md:max-w-[402px] flex flex-col">
        <span className="text-2xl font-semibold text-left text-gray-800 mb-[32px]">
          로그인
        </span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mb-4 flex-grow"
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
          <button
            className="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2.5 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-[16px] "
            type="submit"
          >
            로그인
          </button>
        </form>
        <p className="text-[15px] font-medium text-gray-800 text-center">
          같이 달램이 처음이신가요?{" "}
          <button
            className="text-orange-600 underline"
            onClick={() => {
              router.push("/signup");
            }}
          >
            회원가입
          </button>
        </p>
      </div>
      {toastMessage && <Toast>{toastMessage}</Toast>}
    </div>
  );
}
