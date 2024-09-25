"use client";

import { AppliedList } from "../applied/List";
import { CreatedList } from "../created/List";
import { useTabStore } from "@/store/gathers/manage/useTabStore";
import { useDropdownStore } from "@/store/gathers/manage/useDropdownStore";

const tabs: { id: "applied" | "created"; label: string }[] = [
  { id: "applied", label: "내가 참여중인 모임" },
  { id: "created", label: "내가 만든 모임" },
];

const dropdownOptions: { id: "all" | "study" | "project"; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "study", label: "스터디" },
  { id: "project", label: "프로젝트" },
];

function Tabs() {
  const { activeTab, setActiveTab } = useTabStore();
  const { activeDropdown, setActiveDropdown } = useDropdownStore();

  return (
    <div>
      <div className="lg:text-display-1 md:text-headline text-subhead-3 h-8 flex gap-8 md:gap-0 md:flex-row flex-col justify-between md:mb-10 mb-16 text-gray-15">
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

        <div className="flex justify-end md:justify-start font-sans">
          <select
            value={activeDropdown}
            onChange={(e) =>
              setActiveDropdown(e.target.value as "all" | "study" | "project")
            }
          >
            {dropdownOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
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
