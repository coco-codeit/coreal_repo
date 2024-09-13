"use client";

import React, { ReactNode } from "react";
import { useGatheringTabStore } from "@/store/useGatheringTabStore";

interface TabProps {
  children: ReactNode;
}

const tabs: { id: "applied" | "created"; label: string }[] = [
  { id: "applied", label: "내가 참여 중인 모임" },
  { id: "created", label: "내가 만든 모임" },
];

function Tabs({ children }: TabProps) {
  const { activeTab, setActiveTab } = useGatheringTabStore();

  const renderedChildren = Array.isArray(children)
    ? children
    : [children, null];

  return (
    <div>
      <div className="h-20 flex flex-row justify-around bg-white border border-gray-300 rounded-xl shadow-[0px_45px_100px_rgba(0, 0, 0, 0.3)] mb-10">
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

      <div>
        {activeTab === "applied" ? renderedChildren[0] : renderedChildren[1]}
      </div>
    </div>
  );
}

export { Tabs as GatheringTabs };
