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
  iconSrc?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconPosition?: "left" | "right";
  hideTextOnMobile?: boolean;
  anchorPosition?: "bottom start" | "bottom end";
}

export default function SortControls({
  options,
  selectedOption,
  onOptionSelect,
  showCalendar = false,
  selectedDate,
  onSelectDate = () => {},
  onApply = () => {},
  iconSrc = "/images/arrow-down.svg",
  iconWidth = 14,
  iconHeight = 8,
  iconPosition = "right",
  hideTextOnMobile = false,
  anchorPosition = "bottom start",
}: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className={`relative border-2 border-gray-100 text-gray-800 inline-flex items-center rounded-xl justify-between py-2 px-3 text-sm/6 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-900 data-[open]:text-gray-50 data-[focus]:outline-1 data-[focus]:outline-white 
        ${iconPosition === "left" ? "" : "min-w-[110px]"}
      `}
      >
        {iconPosition === "left" && (
          <span
            className="flex items-center justify-center md:mr-1"
            style={{ width: iconWidth, height: iconHeight }}
          >
            <Image
              src={iconSrc}
              alt="icon"
              width={iconWidth}
              height={iconHeight}
            />
          </span>
        )}
        <span className={`${hideTextOnMobile ? "lg:block hidden" : ""}`}>
          {selectedOption || "날짜 선택"}
        </span>

        {iconPosition === "right" && (
          <span
            className="flex items-center justify-center"
            style={{ width: iconWidth, height: iconHeight }}
          >
            <Image
              src={iconSrc}
              alt="icon"
              width={iconWidth}
              height={iconHeight}
            />
          </span>
        )}
      </Menu.Button>

      <Menu.Items
        anchor={{
          to: anchorPosition,
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
                  active ? "bg-purple-1" : ""
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
                className="w-[118px] rounded-xl border border-gray-900 text-gray-900"
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
                    className="w-[118px] rounded-xl bg-gray-900 text-green-2"
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
