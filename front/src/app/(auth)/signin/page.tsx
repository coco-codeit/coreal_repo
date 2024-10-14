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
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(signinSchema),
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const router = useRouter();

  const errorMessages = {
    INVALID_CREDENTIALS: "아이디와 패스워드를 다시 확인해주세요.",
    VALIDATION_ERROR: "유효한 이메일 주소를 입력하세요.",
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      try {
        const errorData = JSON.parse(result.error);

        if (errorData.code && errorData.code in errorMessages) {
          const errorMessage =
            errorMessages[errorData.code as keyof typeof errorMessages];
          if (errorData.code === "VALIDATION_ERROR") {
            setError("email", { type: "manual", message: errorMessage });
          } else {
            setError("email", { type: "manual", message: errorMessage });
            setError("password", { type: "manual", message: errorMessage });
          }
        } else {
          throw new Error("Unknown error");
        }
      } catch (parseError) {
        const defaultErrorMessage = "로그인에 실패했습니다.";
        setError("email", { type: "manual", message: defaultErrorMessage });
        setError("password", { type: "manual", message: defaultErrorMessage });
        setToastMessage(defaultErrorMessage);
      }
    } else {
      setToastMessage("로그인에 성공했습니다!");
      setTimeout(() => router.push("/"), 2000);
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-[510px] md:min-w-[510px] min-h-[422px] rounded-3xl px-4 sm:px-[54px] py-8 bg-white shadow-md">
      <div className="w-full h-full flex flex-col">
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
            className={`w-full font-semibold py-2.5 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-[16px] ${
              isLoading
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-400 hover:bg-gray-500 text-white"
            }`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "로딩중..." : "로그인"}
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
