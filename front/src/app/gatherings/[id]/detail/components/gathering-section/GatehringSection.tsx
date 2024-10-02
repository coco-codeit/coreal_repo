"use client";
import React from "react";
import Image from "next/image";
import UserAvatar from "./UserAvatar";
import ProgressBar from "@/app/gatherings/components/ProgressBar";
import DeadLineTag from "@/app/gatherings/components/DeadLineTag";
import GatheringInfo from "./GatheringInfo";

export default function GatehringSection() {
  return (
    <section className="flex items-center justify-center md:flex-row flex-col gap-6">
      <div className="relative w-full md:w-1/2 h-[270px]">
        <Image
          className="relative rounded-3xl"
          src="/images/detail/gatherDetail.png"
          alt="Gather Detail Img"
          fill
        />
        <DeadLineTag endTime="2024-10-01T09:06:16.184Z" type="lg" />
      </div>

      <div className="w-full md:w-1/2 h-[270px] py-6 rounded-[24px] border-2 border-gray-200">
        <GatheringInfo />

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
