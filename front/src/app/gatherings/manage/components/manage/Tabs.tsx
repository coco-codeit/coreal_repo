"use client";

import { AppliedList } from "../applied/List";
import { CreatedList } from "../created/List";
import { useTabStore } from "@/store/gathers/manage/useTabStore";
import { useDropdownStore } from "@/store/gathers/manage/useDropdownStore";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const tabs: { id: "applied" | "created"; label: string }[] = [
  { id: "applied", label: "내가 참여중인 모임" },
  { id: "created", label: "내가 만든 모임" },
];

const dropdownOptions: { id: "all" | "study" | "project"; label: string }[] = [
  { id: "project", label: "프로젝트" },
  { id: "study", label: "스터디" },
  { id: "all", label: "전체" },
];

function Tabs() {
  const { activeTab, setActiveTab } = useTabStore();
  const { activeDropdown, setActiveDropdown } = useDropdownStore();

  const [selectedLabel, setSelectedLabel] = useState("");

  const handleDropdownClick = (option: {
    id: "all" | "study" | "project";
    label: string;
  }) => {
    setActiveDropdown(option.id);
    setSelectedLabel(option.label);
  };

  return (
    <div>
      <div className="lg:text-display-1 md:text-headline text-subhead-3 h-8 flex gap-8 md:gap-0 md:flex-row flex-col justify-between md:mb-10 mb-20 text-gray-15">
        <div className="flex justify-start gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className="relative flex items-center justify-center"
              onClick={() => setActiveTab(tab.id)}
            >
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <div className="absolute bottom-[-5px] left-0 right-0 h-1 bg-purple-4 rounded-2xl"></div>
              )}
            </button>
          ))}
        </div>

        <div className="flex lg:gap-4 gap-2 items-center font-sans justify-end lg:text-display-1 text-body-2 md:text-headline">
          <Menu>
            <p>{selectedLabel}</p>
            <MenuButton className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 bg-gray-3 rounded-full">
              <span>
                <IoIosArrowDown />
              </span>
            </MenuButton>
            <MenuItems
              anchor={{
                to: "bottom end",
                offset: "-40px",
              }}
              className="md:gap-1 gap-2 lg:text-display-1 text-body-2 md:text-headline p-4 lg:px-4 lg:py-2 w-[111px] md:w-[171px] rounded-2xl flex flex-col justify-start bg-white border border-gray-4 shadow-custom"
            >
              {dropdownOptions.map((option) => (
                <MenuItem
                  key={option.id}
                  as="button"
                  onClick={() => handleDropdownClick(option)}
                  className={`text-start ${activeDropdown === option.id ? "font-title" : ""}`}
                >
                  {option.label}
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>
      </div>

      <div>
        {activeTab === "applied" && <AppliedList type={activeDropdown} />}
        {activeTab === "created" && <CreatedList type={activeDropdown} />}
      </div>
    </div>
  );
}

export { Tabs as GatheringTabs };
