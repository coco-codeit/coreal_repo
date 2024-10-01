import ConfirmBadge from "@/app/gatherings/components/ConfirmBadge";
import React from "react";

export default function UserAvatar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="">모집정원 16명</div>
        <div className="flex ml-[22px]">
          <div className="h-[29px] w-[29px] rounded-full bg-gray-300 -ml-[10px]"></div>
          <div className="h-[29px] w-[29px] rounded-full bg-gray-300 -ml-[10px]"></div>
          <div className="h-[29px] w-[29px] rounded-full bg-gray-300 -ml-[10px]"></div>
          <div className="h-[29px] w-[29px] rounded-full bg-gray-300 -ml-[10px]"></div>
          <div className="flex items-center justify-center text-[14px] h-[29px] w-[29px] rounded-full bg-gray-500 -ml-[10px]">
            +12
          </div>
        </div>
      </div>
      <ConfirmBadge />
    </div>
  );
}
