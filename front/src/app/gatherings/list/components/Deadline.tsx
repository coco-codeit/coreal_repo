import Image from "next/image";
import React, { useState, useEffect } from "react";
import { formatDistanceToNow, isToday } from "date-fns";
import { ko } from "date-fns/locale";

interface IDeadLineTag {
  endTime: string;
  type: "lg" | "sm";
}

export default function DeadLineTag({ endTime, type }: IDeadLineTag) {
  const [formattedDeadline, setFormattedDeadline] = useState<string>("Loading");

  useEffect(() => {
    const targetDate = new Date(endTime);
    const now = new Date();
    const formatDeadline = () => {
      if (targetDate < now) {
        return "마감된 모임";
      }
      const distance = formatDistanceToNow(targetDate, {
        locale: ko,
        addSuffix: true,
      });

      if (isToday(targetDate)) {
        return `오늘 ${targetDate.getHours()}시 마감`;
      } else {
        const daysMatch = distance.match(/(\d+)\s*일/);
        if (daysMatch) {
          const days = daysMatch[1];
          return `${days}일 후 마감`;
        }

        return distance.includes("분")
          ? `${distance.replace("분", "분 후")} 마감`
          : distance;
      }
    };

    setFormattedDeadline(formatDeadline());
  }, [endTime]);

  const customRound = {
    lg: "rounded-tr-3xl rounded-bl-lg",
    sm: "rounded-bl-xl",
  };

  return (
    <div
      className={`flex items-center absolute right-0 top-0 pr-3 w-auto h-8 rounded-bl-lg bg-[#EA580C] text-white ${customRound[type]}`}
    >
      <Image
        className="ml-2 mr-1"
        src="/images/detail/clock.svg"
        alt="clock icon"
        width={24}
        height={24}
      />
      <span className="text-[12px]">{formattedDeadline}</span>{" "}
    </div>
  );
}
