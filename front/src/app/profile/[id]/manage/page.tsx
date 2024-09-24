"use client";

import Image from "next/image";
import { FormEvent, ReactNode } from "react";
import { LuPencil } from "react-icons/lu";
import Input from "./components/Input";
import HashtagInput from "./components/HashTagInput";
import { Label } from "./components/Label";
import { Section } from "./components/Section";
import useFormValue from "@/hooks/useFormValue";

const DefaultUserImage = "/images/default_user.webp";

export default function ManageProfile() {
  const [nickname, setNickname, isErrorNickname, errMsgNickname] =
    useFormValue<string>("", {
      type: "nickname",
    });
  const [password, setPassword] = useFormValue<string>("", {
    type: "password",
  });
  const [passwordChk, setPasswordChk] = useFormValue<string>("");
  const [techStack, setTechStack] = useFormValue<string[]>([]);
  const [devField, setDevField] = useFormValue<string>("");

  // useEffect(() => {
  //   const isNicknameDuplicate = (nickname: string): boolean => {
  //     return true;
  //   };
  //   if (isNicknameDuplicate(nickname)) {
  //   } else {
  //   }
  // }, [nickname]);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-[510px] mx-auto flex flex-col items-center rounded-lg bg-white py-6 px-10 text-gray-15">
      <h1 className="text-center text-xl md:text-2xl font-bold mb-12">
        유저 프로필 변경
      </h1>
      <div className="relative">
        <Image
          src={DefaultUserImage}
          className="rounded-full"
          width="100"
          height="100"
          alt="프로필 이미지"
        />
        <button className="absolute bottom-0 -right-[5px] w-9 h-9 rounded-full bg-gray-10 flex justify-center items-center">
          <LuPencil color="white" />
        </button>
      </div>
      <form className="w-full" onSubmit={handleOnSubmit}>
        <Section className="border-b">
          <Label htmlFor="nickname">닉네임</Label>
          <Input
            id="nickname"
            type="text"
            value={nickname}
            className="mb-5"
            onChange={setNickname}
            isError={isErrorNickname}
            errorMessage={errMsgNickname}
          />
          <Label htmlFor="pw">비밀번호</Label>
          <Input
            id="pw"
            type="password"
            value={password}
            className="mb-5"
            onChange={setPassword}
          />
          <Label htmlFor="pwchk">비밀번호 확인</Label>
          <Input
            id="pwchk"
            type="password"
            value={passwordChk}
            onChange={setPasswordChk}
          />
        </Section>
        <Section>
          <Label htmlFor="techs">관심 기술</Label>
          <HashtagInput
            id="techs"
            value={techStack}
            className="mb-5"
            onChange={setTechStack}
          />
          <Label htmlFor="filed">개발 분야</Label>
          <Input
            id="field"
            type="text"
            value={devField}
            onChange={setDevField}
          />
        </Section>
        <SubmitBtn>수정 완료</SubmitBtn>
      </form>
    </div>
  );
}

function SubmitBtn({
  children,
  ...props
}: {
  children: ReactNode;
  [key: string]: unknown;
}) {
  return (
    <button
      className={`${props.isValid ? "bg-purple-4 hover:bg-purple-6 active:bg-purple-3 cursor-pointer" : "bg-gray-8 cursor-not-allowed"} w-full py-2 text-center rounded-lg text-white`}
    >
      {children}
    </button>
  );
}
