import React from "react";

interface tagTypes {
  dateText: string;
  textColor: string;
}

export default function DateTag({ dateText, textColor }: tagTypes) {
  return (
    <div
      className={`flex items-center justify-center w-[58px] h-6 mr-2 text-[14px] font-medium leading-5 rounded-[4px] bg-[#111827]`}
      style={{ color: textColor }}
    >
      {dateText}
    </div>
  );
}
