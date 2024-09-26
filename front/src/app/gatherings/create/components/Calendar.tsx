import { DayPicker, DateRange } from "react-day-picker";
import { ko } from "date-fns/locale";
import { format } from "date-fns";
import "react-day-picker/style.css";
import useFormStore from "@/store/gatherings/useFormStore";

function Calendar() {
  const { type, startDate, endDate, setStartDate, setEndDate } = useFormStore();

  const selectedDate: DateRange = {
    from: startDate ? new Date(startDate) : undefined,
    to: endDate ? new Date(endDate) : undefined,
  };

  const handleSelectedDate = (range: DateRange | undefined) => {
    if (range?.from) setStartDate(format(range.from, "yyyy-MM-dd"));
    if (range?.to) setEndDate(format(range.to, "yyyy-MM-dd"));
  };

  const formatCaption = (date: Date) => {
    return format(date, "yyyy년 MMM", { locale: ko });
  };

  const DateLabel = ({
    label,
    date,
  }: {
    label: string;
    date: Date | undefined;
  }) => (
    <div className="w-1/2 flex justify-center space-x-2">
      <span>{label} :</span>
      <span className={date ? "" : "text-gray-10"}>
        {date ? format(date, "yyyy.MM.dd") : "날짜 선택"}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col gap-2">
      <label>{type === "project" ? "프로젝트" : "스터디"} 기간</label>
      <div className="flex flex-row rounded-2xl bg-gray-5 p-4 text-subhead-2">
        <DateLabel label="시작일" date={selectedDate.from} />
        <DateLabel label="종료일" date={selectedDate.to} />
      </div>
      <div className="flex justify-center py-3 border-2 rounded-3xl border-gray-7">
        <DayPicker
          locale={ko}
          mode="range"
          selected={selectedDate}
          onSelect={handleSelectedDate}
          showOutsideDays
          formatters={{
            formatCaption,
          }}
          modifiersClassNames={{
            today: "text-purple-7",
            caption: "font-title",
          }}
          className="custom-daypicker"
        />
      </div>
    </div>
  );
}

export default Calendar;
