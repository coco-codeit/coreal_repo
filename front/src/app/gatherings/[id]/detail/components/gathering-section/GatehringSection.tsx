"use client";

import React from "react";
import Image from "next/image";
import UserAvatar from "./UserAvatar";
import ProgressBar from "@/app/gatherings/components/ProgressBar";
import DeadLineTag from "@/app/gatherings/components/DeadLineTag";
import GatheringInfo from "./GatheringInfo";

import {
  useGatherDeatilQuery,
  useGatherParticipants,
} from "@/hooks/queries/gatherDetailQuery";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function GatehringSection({ pageId }: { pageId: string }) {
  const { data: detailData, isLoading: isDetailLoading } =
    useGatherDeatilQuery(pageId);
  const { data: participantData, isLoading: participantLoading } =
    useGatherParticipants(pageId);

  const isDataLoading = isDetailLoading || participantLoading;

  return (
    <>
      {isDataLoading ? (
        <div className="flex justify-center items-center w-full min-h-[270px]">
          <LoadingSpinner />
        </div>
      ) : (
        <section className="flex items-center justify-center md:flex-row flex-col gap-6">
          <div className="relative w-full md:w-1/2 h-[270px]">
            <Image
              className="relative rounded-3xl"
              src={detailData?.image}
              alt="Gather Detail Img"
              fill
            />
            <DeadLineTag endTime={detailData?.registrationEnd} type="lg" />
          </div>

          <div className="w-full md:w-1/2 h-[270px] py-6 rounded-[24px] border-2 border-gray-200">
            <GatheringInfo
              dateInfo={detailData?.dateTime}
              locationInfo={detailData?.location}
            />

            <hr className="border-dashed border-gray-400 mt-[43px]" />
            <div className="p-6">
              <UserAvatar participantData={participantData} />
              <ProgressBar
                percent={(participantData?.length / detailData?.capacity) * 100}
              />
              <div className="flex items-center justify-between text-[12px]">
                <div>최소인원 5명</div>
                <div>최대인원 {detailData?.capacity}명</div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
