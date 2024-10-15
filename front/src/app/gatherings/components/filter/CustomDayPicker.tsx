import { useState } from "react";
import Image from "next/image";
import { addMonths, subMonths } from "date-fns";
import { DayPicker as CustomDayPicker } from "react-day-picker";

export const DayPicker = (
  props: React.ComponentPropsWithoutRef<typeof CustomDayPicker>,
) => {
  const [month, setMonth] = useState(new Date());

  const handlePreviousClick = () => {
    setMonth(subMonths(month, 1));
  };

  const handleNextClick = () => {
    setMonth(addMonths(month, 1));
  };

  return (
    <div className="w-[250px]">
      <div className="flex items-center justify-between relative w-full h-[34px]">
        <button
          type="button"
          className="navigation-button"
          aria-label="Go to the Previous Month"
          onClick={handlePreviousClick}
        >
          <Image
            src="/images/arrow/left.svg"
            alt="previousButton"
            width={24}
            height={24}
          />
        </button>
        <span className="absolute left-1/2 transform -translate-x-1/2 text-sm text-gray-800">
          {month.getFullYear()}년 {month.getMonth() + 1}월
        </span>
        <button
          type="button"
          className="navigation-button"
          aria-label="Go to the Next Month"
          onClick={handleNextClick}
        >
          <Image
            src="/images/arrow/right.svg"
            alt="nextButton"
            width={24}
            height={24}
          />
        </button>
      </div>
      <CustomDayPicker
        {...props}
        month={month}
        onMonthChange={setMonth}
        classNames={{
          root: "text-sm w-[250px] font-pretendard",
          day: "w-[35.71px] h-[32px] flex items-center justify-center rounded-lg text-gray-800",
          selected:
            "w-[35.71px] h-[32px] bg-gray-900 text-[#03FFA3] rounded-lg flex items-center justify-center",
          today: "text-purple-3",
          week: "flex justify-between gap-0",
          weekday:
            "w-[35.71px] h-[32px] text-center flex items-center justify-center text-gray-800",
          weekdays: "flex justify-between",
          caption: "hidden",
          caption_label: "hidden",
          nav: "hidden",
          nav_button:
            "w-6 h-6 flex items-center justify-center bg-gray-900 text-green-2 rounded-full",
        }}
        modifiersClassNames={{
          outside: "text-gray-400 opacity-50", // 외부 날짜에 회색 텍스트와 반투명 효과 적용
        }}
      />
    </div>
  );
};
