import DateTag from "@/app/gatherings/components/DateTag";
import LikeButton from "@/app/gatherings/components/LikeButton";

import React from "react";

interface GatheringInfo {
  dateInfo: string;
  titleInfo: string;
  locationInfo: string;
}

export default function GatheringInfo({
  dateInfo,
  titleInfo,
  locationInfo,
}: GatheringInfo) {
  return (
    <div className="relative mx-[22px] mb-3">
      <div className="absolute right-0">
        <LikeButton />
      </div>
      <div className="flex items-center text-[18x] h-7 font-semibold">
        {titleInfo || ""}
      </div>
      <div className="flex items-center text-[14x] h-5]">
        {locationInfo || ""}
      </div>
      <div className="flex mt-3">
        <DateTag type="day" dateText={dateInfo} textColor="white" />
        <DateTag type="time" dateText={dateInfo} textColor="green" />
      </div>
    </div>
  );
}
