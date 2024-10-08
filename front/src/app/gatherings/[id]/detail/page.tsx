"use client";

import React from "react";

import GatehringSection from "./components/gathering-section/GatehringSection";
import CommentsSection from "./components/comments-section/CommentsSection";
import ActionBtnGroup from "./components/comments-section/ActionBtnGroup";
import { useParams } from "next/navigation";

export default function Detail() {
  const { id }: { id: string } = useParams();

  return (
    <div className="h-screen-minus-nav bg-[#F3F4F6]">
      <div className="mx-auto container max-w-[1200px] px-6 md:px-[102px] pt-10 bg-white">
        <GatehringSection pageId={id} />
        <CommentsSection pageId={id} />
      </div>
      <ActionBtnGroup pageId={id} />
    </div>
  );
}
