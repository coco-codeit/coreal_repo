"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface IDeadLineTag {
  endTime: string;
  type: "lg" | "sm";
}

export default function DeadLineTag({ endTime, type }: IDeadLineTag) {
  const [isSameDate, setIsSameDate] = useState(false);

  // The date to check
  const targetDate = new Date(endTime);
  const targetHours = targetDate.getHours();
  console.log(targetDate);
  useEffect(() => {
    const currentDate = new Date();
    console.log(currentDate);
    const checkSameDate = (date1: Date, date2: Date) => {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    };

    setIsSameDate(checkSameDate(targetDate, currentDate));
  }, []);

  const customRound = {
    lg: "rounded-tr-3xl rounded-bl-lg",
    sm: "rounded-bl-xl",
  };

  return (
    <div
      className={` ${isSameDate ? "flex" : "hidden"} absolute items-center right-[2px] top-[2px] w-[123px] h-8 rounded-bl-lg bg-[#EA580C] text-white ${customRound[type]}`}
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
