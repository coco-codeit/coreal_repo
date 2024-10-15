"use client";

import React from "react";

import GatehringSection from "../../components/detail/gathering-section/GatehringSection";
import CommentsSection from "../../components/detail/comments-section/CommentsSection";
import ActionBtnGroup from "../../components/detail/comments-section/ActionBtnGroup";
import { useParams } from "next/navigation";
import {
  useGatherDeatilQuery,
  useGatherParticipants,
} from "@/hooks/queries/gatherDetailQuery";

export default function Detail() {
  const { id }: { id: string } = useParams();
  const { data: detailData = [], isLoading: isDetailLoading } =
    useGatherDeatilQuery(id);
  const { data: participantData = [], isLoading: participantLoading } =
    useGatherParticipants(id, detailData?.participantCount);

  return (
    <div className="h-screen-minus-nav bg-[#F3F4F6]">
      <div className="mx-auto container max-w-[1200px] px-6 md:px-[102px] pt-10 bg-white">
        <GatehringSection
          pageId={id}
          detailData={detailData}
          isDetailLoading={isDetailLoading}
          participantData={participantData}
          participantLoading={participantLoading}
        />
        <CommentsSection pageId={id} />
      </div>
      <ActionBtnGroup pageId={id} detailData={detailData} />
    </div>
  );
}
