import Image from "next/image";
import React from "react";

export default function GatheringInfo() {
  return (
    <div className="relative mx-[22px] mb-3">
      <Image
        className="absolute right-0"
        src="/images/detail/save.png"
        alt="heart icon"
        width={48}
        height={48}
      />
      <h2>달램핏 오피스 스트레칭</h2>
      <span>을지로 3가 서울시 중구 청계천로 100</span>
    </div>
  );
}
