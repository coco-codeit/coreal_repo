import DateTag from "@/app/gatherings/components/DateTag";
import LikeButton from "@/app/gatherings/components/LikeButton";

import React from "react";

interface GatheringInfo {
  dateInfo: string;
  titleInfo: string;
}

export default function GatheringInfo({ dateInfo, titleInfo }: GatheringInfo) {
  return (
    <div className="relative mx-[22px] mb-3">
      <div className="absolute right-0">
        <LikeButton />
      </div>
      <div className="flex items-center text-[18x] h-[30px] font-semibold">
        {titleInfo || ""}
      </div>
      <div className="flex mt-3">
        <DateTag type="day" dateText={dateInfo} textColor="white" />
        <DateTag type="time" dateText={dateInfo} textColor="orange" />
      </div>
    </div>
  );
}
