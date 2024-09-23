"use client";

import DetailHeader from "./_components/DetailHeader";
import DetailProjectCard from "./_components/DetailProjectCard";
import RecruitmentStatus from "./_components/RecruitmentStatus";

export default function page() {
  return (
    <div className="bg-white min-h-screen">
      <DetailHeader />
      <DetailProjectCard
        projectName="이름"
        description="설명"
        onParticipate={() => {
          console.log("test");
        }}
      />
      <span className="text-[28px] font-semibold text-[#484848]">모집현황</span>
      <RecruitmentStatus />
      <span className="text-[28px] font-semibold text-[#484848]">
        스터디 & 네트워킹 키워드
      </span>
    </div>
  );
}
