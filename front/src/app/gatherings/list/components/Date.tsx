import React, { useEffect, useState } from "react";
import { format } from "date-fns";

interface DateTagProps {
  dateText: string;
  textColor: "white" | "orange";
  type: "day" | "time";
}

export default function DateTag({ dateText, textColor, type }: DateTagProps) {
  const [formattedDate, setFormattedDate] = useState<string>("Loading");

  useEffect(() => {
    const date = new Date(dateText);

    const formatted =
      type === "day" ? format(date, "MM월 dd일") : format(date, "HH:mm");

    setFormattedDate(formatted);
  }, [dateText, type]);

  const colors = { white: "text-white", orange: "text-[#EA580C]" };

  return (
    <div
      className={`flex items-center justify-center h-6 p-2 mr-2 text-[14px] font-medium leading-5 rounded-[4px] bg-[#111827] ${colors[textColor]}`}
    >
      {formattedDate || dateText}
    </div>
  );
}
