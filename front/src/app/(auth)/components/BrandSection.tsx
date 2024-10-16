import Image from "next/image";
import React from "react";

export default function BrandSection() {
  return (
    <section className="flex flex-col items-center w-full max-w-[343px] sm:max-w-[400px] md:max-w-[500px] mt-10 md:mt-0">
      <div className="w-full aspect-[290/240] sm:aspect-[400/330] md:aspect-[500/438] relative">
        <Image
          src="/images/auth_logo.svg"
          alt="로그인,회원가입 Logo"
          style={{ objectFit: "contain" }}
          fill
        />
      </div>
    </section>
  );
}
