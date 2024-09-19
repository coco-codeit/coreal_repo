"use client";

import React, { useState } from "react";
import { useGatheringTabStore } from "@/store/useGatheringTabStore";
import { AppliedList } from "../applied/List";
import { CreatedList } from "../created/List";

const tabs: { id: "applied" | "created"; label: string }[] = [
  { id: "applied", label: "내가 참여 중인 모임" },
  { id: "created", label: "내가 만든 모임" },
];

const dropdownOptions: { id: "all" | "study" | "project"; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "study", label: "스터디" },
  { id: "project", label: "프로젝트" },
];

function Tabs() {
  const { activeTab, setActiveTab } = useGatheringTabStore();
  const [activeDropdown, setActiveDropdown] = useState<
    "all" | "study" | "project"
  >("all");

  return (
    <div>
      <div className="h-20 flex flex-row justify-around bg-white border border-gray-300 rounded-xl shadow-[0px_45px_100px_rgba(0, 0, 0, 0.3)]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`w-full py-2 h-full flex items-center justify-center ${
              activeTab === tab.id
                ? "border-b-4 border-purple-500 font-semibold"
                : "border-b-4 border-transparent"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex justify-start my-4">
        <select
          value={activeDropdown}
          onChange={(e) =>
            setActiveDropdown(e.target.value as "all" | "study" | "project")
          }
          className="p-2 border border-gray-300 rounded-md"
        >
          {dropdownOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        {activeTab === "applied" && <AppliedList type={activeDropdown} />}
        {activeTab === "created" && <CreatedList type={activeDropdown} />}
      </div>
    </div>
  );
}

export { Tabs as GatheringTabs };
