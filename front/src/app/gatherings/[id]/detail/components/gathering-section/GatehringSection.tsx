"use client";

import React from "react";
import Image from "next/image";
import UserAvatar from "./UserAvatar";
import ProgressBar from "@/app/gatherings/components/ProgressBar";
import DeadLineTag from "@/app/gatherings/components/DeadLineTag";
import GatheringInfo from "./GatheringInfo";
import { useParams } from "next/navigation";
import { useGatherDeatilQuery } from "@/hooks/queries/gatherDetailQuery";

export default function GatehringSection() {
  const { id }: { id: string } = useParams();
  const { data, isLoading } = useGatherDeatilQuery(id);

  console.log(data);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-[270px]">
          로딩스피너 추가
        </div>
      ) : (
        <section className="flex items-center justify-center md:flex-row flex-col gap-6">
          <div className="relative w-full md:w-1/2 h-[270px]">
            <Image
              className="relative rounded-3xl"
              src={data?.image}
              alt="Gather Detail Img"
              fill
            />
            <DeadLineTag endTime={data?.registrationEnd} type="lg" />
          </div>

          <div className="w-full md:w-1/2 h-[270px] py-6 rounded-[24px] border-2 border-gray-200">
            <GatheringInfo
              dateInfo={data?.dateTime}
              locationInfo={data?.location}
            />

            <hr className="border-dashed border-gray-400 mt-[43px]" />
            <div className="p-6">
              <UserAvatar />
              <ProgressBar percent={60} />
              <div className="flex items-center justify-between text-[12px]">
                <div>최소인원 5명</div>
                <div>최대인원 {data?.capacity}명</div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
