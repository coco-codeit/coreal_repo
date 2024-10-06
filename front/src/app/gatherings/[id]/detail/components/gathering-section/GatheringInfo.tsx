import DateTag from "@/app/gatherings/components/DateTag";
import LikeButton from "@/app/gatherings/components/LikeButton";

import React from "react";

interface IgatheringInfo {
  dateInfo: string;
  locationInfo: string;
}

export default function GatheringInfo({
  dateInfo,
  locationInfo,
}: IgatheringInfo) {
  return (
    <div className="relative mx-[22px] mb-3">
      <div className="absolute right-0">
        <LikeButton />
      </div>
      <h2>달램핏 오피스 스트레칭</h2>
      <span className="text-[14px]">{locationInfo}</span>
      <div className="flex mt-3">
        <DateTag type="day" dateText={dateInfo} textColor="white" />
        <DateTag type="time" dateText={dateInfo} textColor="orange" />
      </div>
    </div>
  );
}
