import DateTag from "@/app/gatherings/components/DateTag";
import LikeButton from "@/app/gatherings/components/LikeButton";
import { useGatherTitle } from "@/hooks/rendering/useGatherTItle";

import React from "react";

interface GatheringInfo {
  dateInfo: string;
  locationInfo: string;
  typeInfo: string;
}

export default function GatheringInfo({
  dateInfo,
  locationInfo,
  typeInfo,
}: GatheringInfo) {
  const title = useGatherTitle({ location: locationInfo, type: typeInfo });

  return (
    <div className="relative mx-[22px] mb-3">
      <div className="absolute right-0">
        <LikeButton />
      </div>
      <h2></h2>
      <span className="text-[14px]">{title}</span>
      <div className="flex mt-3">
        <DateTag type="day" dateText={dateInfo} textColor="white" />
        <DateTag type="time" dateText={dateInfo} textColor="orange" />
      </div>
    </div>
  );
}
