import Image from "next/image";
import { Menu } from "@headlessui/react";
import Calendar from "@/app/components/Calendar";

interface DropdownOption {
  id: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  selectedOption?: string;
  onOptionSelect: (option: DropdownOption) => void;
  showCalendar?: boolean;
  selectedDate?: Date;
  onSelectDate?: (date: Date | undefined) => void;
  onApply?: () => void;
}

export default function SortControls({
  options,
  selectedOption,
  onOptionSelect,
  showCalendar = false,
  selectedDate,
  onSelectDate = () => {},
  onApply = () => {},
}: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="min-w-[110px] relative border-2 border-[#F3F4F6] text-[#1F2937] inline-flex items-center rounded-xl justify-between py-2 px-3 text-sm/6 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-[#111827] data-[open]:text-[#F9FAFB]  data-[focus]:outline-1 data-[focus]:outline-white">
        {selectedOption || "날짜 선택"}
        <span className="w-6 h-6 flex items-center justify-center">
          <Image
            src="/images/arrow-down.svg"
            alt="arrow down"
            width={14}
            height={8}
          />
        </span>
      </Menu.Button>

      <Menu.Items
        anchor={{
          to: "bottom start",
          gap: "8px",
        }}
        className="absolute p-1 rounded-2xl flex flex-col items-start justify-start bg-white border border-gray-4 shadow-custom z-50"
      >
        {options.map((option) => (
          <Menu.Item key={option.id}>
            {({ active }) => (
              <button
                onClick={() => onOptionSelect(option)}
                className={`${
                  active ? "bg-[#FFEDD5]" : ""
                } h-[38px] rounded-xl px-4 py-2 w-full text-start`}
              >
                {option.label}
              </button>
            )}
          </Menu.Item>
        ))}

        {showCalendar && (
          <div className="w-full px-[39px] py-5 flex flex-col gap-3">
            {onSelectDate && (
              <Calendar
                selectedDate={selectedDate}
                onSelectDate={onSelectDate}
              />
            )}
            <div className="flex justify-center gap-3 h-10 text-sm font-semibold ">
              <button
                onClick={() => onSelectDate && onSelectDate(undefined)}
                className="w-[118px] rounded-xl border border-[#EA580C] text-[#EA580C]"
              >
                초기화
              </button>
              <Menu.Item>
                {({ close }) => (
                  <button
                    onClick={() => {
                      onApply();
                      close();
                    }}
                    className="w-[118px] rounded-xl bg-[#EA580C] text-white"
                  >
                    적용
                  </button>
                )}
              </Menu.Item>
            </div>
          </div>
        )}
      </Menu.Items>
    </Menu>
  );
}
