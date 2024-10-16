"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import { differenceInHours, differenceInDays, isToday } from "date-fns";

interface IDeadLineTag {
  endTime: string;
  type: "lg" | "sm";
}

export default function DeadLineTag({ endTime, type }: IDeadLineTag) {
  const targetDate = useMemo(() => new Date(endTime), [endTime]);

  const formatDeadline = () => {
    const now = new Date();
    if (targetDate < now) {
      return "마감된 모임";
    }
    const hoursDiff = differenceInHours(targetDate, now);
    if (hoursDiff < 24 && isToday(targetDate)) {
      return `오늘 ${targetDate.getHours()}시 마감`;
    }

    if (hoursDiff < 24 && !isToday(targetDate)) {
      return `내일 ${targetDate.getHours()}시 마감`;
    }

    const daysDiff = differenceInDays(targetDate, now);
    return `${daysDiff}일 후 마감`;
  };

  const formattedDeadline = formatDeadline();

  const customRound = {
    lg: "rounded-tr-3xl rounded-bl-lg pr-5",
    sm: "rounded-bl-xl pr-3",
  };

  return (
    <div
      className={`flex items-center absolute right-0 top-0 h-8 rounded-bl-lg bg-gray-900 text-white ${customRound[type]}`}
    >
      <Image
        className="ml-2 mr-1"
        src="/images/detail/clock.svg"
        alt="clock icon"
        width={24}
        height={24}
      />
      <span className="text-[12px]" suppressHydrationWarning>
        {formattedDeadline}
      </span>
    </div>
  );
}
