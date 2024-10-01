"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function DeadLineTag({ endTime }: { endTime: string }) {
  const [isSameDate, setIsSameDate] = useState(false);

  // The date to check
  const targetDate = new Date(endTime);
  const targetHours = targetDate.getHours();

  useEffect(() => {
    const currentDate = new Date();

    const checkSameDate = (date1: Date, date2: Date) => {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    };

    setIsSameDate(checkSameDate(targetDate, currentDate));
  }, [targetDate]);

  return (
    <div
      className={`absolute flex items-center right-[2px] top-[2px] w-[123px] h-8 rounded-tr-3xl rounded-bl-lg bg-[#EA580C] text-white hid ${isSameDate ? "flex" : "hidden"}`}
    >
      <Image
        className="ml-2 mr-1"
        src="/images/detail/clock.svg"
        alt="clock icon"
        width={24}
        height={24}
      />
      <span className="text-[12px]">{`오늘 ${targetHours}시 마감`}</span>
    </div>
  );
}
