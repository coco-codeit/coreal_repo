import Image from "next/image";
import React from "react";

export default function BrandSection() {
  return (
    <section className="flex flex-col items-center w-full max-w-[343px] sm:max-w-[400px] md:max-w-[500px] mt-10 md:mt-0">
      <div className="text-center mb-6 md:mb-[24px]">
        <h1 className="text-xl md:text-2xl font-semibold mb-2">
          Welcome to 같이 달램!
        </h1>
        <p className="text-sm font-medium">
          바쁜 일상 속 잠깐의 휴식,
          <br />
          이제는 같이 달램과 함께 해보세요
        </p>
      </div>
      <div className="w-full aspect-[290/240] sm:aspect-[400/330] md:aspect-[500/438] relative">
        <Image
          src="/images/auth-logo.png"
          alt="로그인,회원가입 Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
}
