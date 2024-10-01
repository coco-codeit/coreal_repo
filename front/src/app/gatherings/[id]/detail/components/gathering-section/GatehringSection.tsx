import DateTag from "@/app/gatherings/components/DateTag";
import ProgressBar from "@/app/gatherings/components/ProgressBar";
import DeadLineTag from "@/app/gatherings/components/DeadLineTag";
import Image from "next/image";
import React from "react";
import UserAvatar from "./UserAvatar";
import GatheringInfo from "./GatheringInfo";

export default function GatehringSection() {
  return (
    <section className="flex h-[270px] gap-6">
      <div className="relative w-1/2">
        <Image
          className="relative rounded-3xl"
          src="/images/detail/gatherDetail.png"
          alt="Gather Detail Img"
          fill
        />
        <DeadLineTag endTime="2024-07-25T09:06:16.184Z" />
      </div>

      <div className="w-1/2 py-6 rounded-[24px] border-2 border-gray-200">
        <GatheringInfo />
        <div className="flex mx-[22px]">
          <DateTag dateText="8월 7일" textColor="white" />
          <DateTag dateText="17:30" textColor="#EA580C" />
        </div>
        <hr className="border-dashed border-gray-400 mt-[43px]" />
        <div className="p-6">
          <UserAvatar />
          <ProgressBar percent={60} />
          <div className="flex items-center justify-between text-[12px]">
            <div>최소인원 5명</div>
            <div>최대인원 20명</div>
          </div>
        </div>
      </div>
    </section>
  );
}
