"use client";

import React from "react";

import GatehringSection from "../../components/detail/gathering-section/GatehringSection";
import ActionBtnGroup from "../../components/detail/ActionBtnGroup";
import {
  useGatherDeatilQuery,
  useGatherParticipants,
} from "@/hooks/queries/gatherDetailQuery";

export default function ClientGather({ pageId }: { pageId: number }) {
  const { data: detailData = [], isLoading: isDetailLoading } =
    useGatherDeatilQuery(pageId);
  const { data: participantData = [], isLoading: participantLoading } =
    useGatherParticipants(pageId, detailData?.participantCount);

  return (
    <div>
      <GatehringSection
        pageId={pageId}
        detailData={detailData}
        isDetailLoading={isDetailLoading}
        participantData={participantData}
        participantLoading={participantLoading}
      />
      <ActionBtnGroup pageId={pageId} detailData={detailData} />
    </div>
  );
}
