import React from "react";

interface IDateTag {
  dateText: string; //서버에서 주는 데이터 "2024-10-19T01:21:47.762Z" 형식
  textColor: "white" | "orange"; // 텍스트 색상, 특정 색상만 허용
  type: "day" | "time"; // 변경포맷의 타입 day = 날짜 , time = 시간
}

export default function DateTag({ dateText, textColor, type }: IDateTag) {
  const dateConverter = (dateText: string, type: string) => {
    const date = new Date(dateText);
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
    if (type === "day") {
      return `${month}월 ${day}일`;
    } else if (type === "time") {
      return `${hour}:${minute}`;
    }
  };

  const convertedDate = dateConverter(dateText, type);

  const colors = { white: "text-white", orange: "text-[#EA580C]" };

  return (
    <div
      className={`flex items-center justify-center h-6 p-2 mr-2 text-[14px] font-medium leading-5 rounded-[4px] bg-[#111827] ${colors[textColor]}`}
    >
      {convertedDate}
    </div>
  );
}
