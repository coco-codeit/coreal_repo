import Image from "next/image";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { useGatheringsStore } from "@/stores/useGatheringsStore";
import "react-day-picker/dist/style.css";

function DateFilter() {
  const { date, setDate } = useGatheringsStore();

  const formatDate = (date: Date | undefined) => {
    return date ? format(date, "yyyy-MM-dd") : null;
  };

  const handleApply = () => {
    const formattedDate = formatDate(date);
    console.log("선택된 날짜:", formattedDate);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        className={`min-w-[110px] h-9 md:h-10 rounded-xl inline-flex items-center justify-between py-2 px-3 border-2 ${
          date ? "bg-gray-900 text-gray-50" : "bg-white text-gray-800"
        }`}
      >
        <span className="text-sm flex items-center">
          {date ? formatDate(date) : "날짜 선택"}
        </span>
        <Image src="/images/down.svg" alt="icon" width={24} height={24} />
      </MenuButton>

      <MenuItems className="z-20 absolute mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="p-4">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <div className="flex justify-between mt-4">
            <button
              className="border-2 border-orange-500 text-orange-500 py-1 px-4 rounded"
              onClick={() => setDate(undefined)}
            >
              초기화
            </button>
            <button
              className="bg-orange-500 text-white py-1 px-4 rounded"
              onClick={handleApply}
            >
              적용
            </button>
          </div>
        </div>
      </MenuItems>
    </Menu>
  );
}

export default DateFilter;
