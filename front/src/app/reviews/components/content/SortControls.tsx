import React from "react";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

interface DropdownOption {
  id: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  selectedOption: string;
  onOptionSelect: (option: DropdownOption) => void;
}

export default function SortControls({
  options,
  selectedOption,
  onOptionSelect,
}: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="min-w-[110px] relative border-2 border-[#F3F4F6] text-[#1F2937] inline-flex items-center rounded-xl justify-between py-2 px-3 text-sm/6 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-[#111827] data-[open]:text-[#F9FAFB]  data-[focus]:outline-1 data-[focus]:outline-white">
        {selectedOption}
        <span className="w-6 h-6 flex items-center justify-center">
          <Image
            src="/images/arrow-down.svg"
            alt="arrow down"
            width={14}
            height={8}
          />
        </span>
      </MenuButton>
      <MenuItems
        anchor={{
          to: "bottom start",
          gap: "8px",
        }}
        className="absolute p-1 rounded-2xl flex flex-col items-start justify-start bg-white border border-gray-4 shadow-custom z-50"
      >
        {options.map((option) => (
          <MenuItem
            key={option.id}
            as="button"
            onClick={() => onOptionSelect(option)}
            className="h-[38px] data-[focus]:bg-[#FFEDD5] rounded-xl px-4 py-2 w-full text-start "
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
