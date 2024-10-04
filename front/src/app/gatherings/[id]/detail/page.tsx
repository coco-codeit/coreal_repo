import React from "react";

import GatehringSection from "./components/gathering-section/GatehringSection";
import CommentsSection from "./components/comments-section/CommentsSection";
import ActionBtnGroup from "./components/comments-section/ActionBtnGroup";

export default function detail() {
  return (
    <div className="h-screen-minus-nav bg-[#F3F4F6]">
      <div className="mx-auto container max-w-[1200px] px-6 md:px-[102px] pt-10 bg-white">
        <GatehringSection />
        <CommentsSection />
      </div>
      <ActionBtnGroup />
    </div>
  );
}
