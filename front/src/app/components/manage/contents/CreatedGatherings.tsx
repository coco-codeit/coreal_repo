"use client";

import React from "react";

interface GatheringData {
  title?: string; // 모임 제목
  description?: string; // 모임 설명
  skills?: string[]; // 기술 스택
  imageUrl?: string; // 이미지 URL
  participants?: { name: string }[]; // 참여자 리스트
  onEdit?: () => void; // 수정 버튼
  onManage?: () => void; // 관리 버튼
  onApprove?: (participantName: string) => void; // 승인 버튼
  onReject?: (participantName: string) => void; // 거절 버튼
}

function CreatedGatherings({
  title = "모임 제목",
  description = "모임에 대한 설명글",
  skills = ["React", "TypeScript"],
  imageUrl,
  participants = [{ name: "참여자 이름" }],
  onEdit,
  onManage,
  onApprove,
  onReject,
}: GatheringData) {
  return (
    <div className="p-6 rounded-lg bg-white border border-[#DDDCE3]">
      <div className="flex gap-4 mb-6">
        {/* 이미지 */}
        <div className="bg-slate-600 w-[320px] h-[172px] rounded-lg overflow-hidden">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Gathering Image"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="flex-1">
          <p className="mb-2 font-medium">{title}</p>

          <div className="flex gap-2 mb-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="py-1 px-4 rounded-full bg-[#FFEDD5] text-[#EA580C]"
              >
                {skill}
              </span>
            ))}
          </div>

          <p>{description}</p>

          <div className="flex flex-row gap-3 mt-4">
            <button
              className="w-[120px] p-2 flex justify-center items-center rounded-xl border border-[#EA580C] bg-white text-[#EA580C]"
              onClick={onEdit}
            >
              수정하기
            </button>
            <button
              className="w-[120px] p-2 flex justify-center items-center rounded-xl border border-[#EA580C] bg-white text-[#EA580C]"
              onClick={onManage}
            >
              관리하기
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-4">
        {participants.map((participant, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4 relative">
              <div className="relative">
                <div className="bg-gray-300 w-[40px] h-[40px] rounded-full flex items-center justify-center"></div>
                <div className="absolute border-2 w-32 mt-4"></div>
              </div>
              <div>
                <p className="text-sm font-semibold">{participant.name}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                className="w-[120px] p-2 flex justify-center items-center rounded-xl border border-[#EA580C] bg-white text-[#EA580C]"
                onClick={() => onApprove && onApprove(participant.name)}
              >
                승인하기
              </button>
              <button
                className="w-[120px] p-2 flex justify-center items-center rounded-xl border border-[#EA580C] bg-white text-[#EA580C]"
                onClick={() => onReject && onReject(participant.name)}
              >
                거절하기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreatedGatherings;
