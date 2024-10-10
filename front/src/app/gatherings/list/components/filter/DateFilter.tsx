import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { format } from "date-fns";
import { useGatheringsStore } from "@/stores/useGatheringsStore";
import { DownIcon } from "@/app/gatherings/list/components/Icons";
import Button from "@/app/gatherings/components/Button";
import Calendar from "./Calendar";
import { useRef } from "react";

function DateFilter() {
  const { date, setDate } = useGatheringsStore();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const formattedDate = date ? format(date, "yy/MM/dd") : "날짜 선택";

  const handleApply = () => {
    setDate(date);
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        ref={buttonRef}
        className={`min-w-[110px] h-9 md:h-10 rounded-xl inline-flex items-center justify-between py-2 px-3 border-2 ${
          date
            ? "bg-gray-900 text-gray-50 border-none"
            : "bg-white text-gray-800 border-gray-100"
        }`}
      >
        <span className="text-sm flex items-center">{formattedDate}</span>
        <DownIcon inverse={!!date} />
      </MenuButton>

      <MenuItems className="z-50 absolute mt-2 max-w-[336px] min-h-[326px] px-[43px] py-[24px] rounded-xl shadow-xl bg-white border-gray-200 border focus:outline-none left-1/2 transform -translate-x-1/2 md:left-0 md:transform-none">
        <Calendar selectedDate={date} onSelectDate={setDate} />
        <div className="grid w-full justify-center grid-cols-2 gap-4 mt-4 text-center">
          <Button
            style="outlined"
            size="large"
            className="w-[118px] h-[40px] flex justify-center items-center"
            onClick={() => setDate(undefined)}
          >
            초기화
          </Button>
          <Button
            style="solid"
            size="small"
            className="flex justify-center items-center"
            onClick={handleApply}
            disabled={!date}
          >
            적용
          </Button>
        </div>
      </MenuItems>
    </Menu>
  );
}

export default DateFilter;
