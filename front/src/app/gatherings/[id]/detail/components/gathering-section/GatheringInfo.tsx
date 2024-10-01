import DateTag from "@/app/gatherings/components/DateTag";
import LikeButton from "@/app/gatherings/components/LikeButton";

import React from "react";

export default function GatheringInfo() {
  return (
    <div className="relative mx-[22px] mb-3">
      <div className="absolute right-0">
        <LikeButton />
      </div>
      <h2>달램핏 오피스 스트레칭</h2>
      <span className="text-[14px]">을지로 3가 서울시 중구 청계천로 100</span>
      <div className="flex mt-3">
        <DateTag
          type="day"
          dateText="2024-10-19T01:21:47.762Z"
          textColor="white"
        />
        <DateTag
          type="time"
          dateText="2024-10-19T01:21:47.762Z"
          textColor="orange"
        />
      </div>
    </div>
  );
}
