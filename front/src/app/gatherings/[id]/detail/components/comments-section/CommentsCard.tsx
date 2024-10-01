import Image from "next/image";
import React from "react";

export default function CommentsCard() {
  return (
    <>
      <div className="text-[14px] mt-[10px]">
        따듯하게 느껴지는 공간이에요 평소에 달램 이용해보고 싶었는데 이렇게 같이
        달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요.
      </div>
      <div className="flex items-center text-[12px] mt-2">
        <Image
          src="/images/profile.svg"
          width={24}
          height={24}
          alt="profile img"
        />
        <span className="pl-2">닉네임</span>
        <span className="w-1 px-[1px] ml-2 mr-3">|</span>
        <span>2024.05.22</span>
      </div>
      <div className="relative w-full h-[2px] my-4">
        <Image
          src="/images/dashed.svg"
          alt="dashed Img"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </>
  );
}
