"use client";

import React, { useState } from "react";
import Image from "next/image";
import Card from "../content/Card";

const tabs = [
  {
    id: "dalaemfit",
    label: "달램핏",
    imageSrc: "/images/dalaemfit.svg",
    alt: "dalaemfit",
  },
  {
    id: "workation",
    label: "워케이션",
    imageSrc: "/images/workation.svg",
    alt: "workation",
  },
];

const subTabOptions = ["전체", "오피스 스트레칭", "마인드풀니스"];

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const [selectedSubTab, setSelectedSubTab] = useState("전체");

  const handleSubTabChange = (subTab: string) => {
    setSelectedSubTab(subTab);
  };

  const handleTabClick = (option: string) => {
    setSelectedSubTab(option);
    handleSubTabChange(option);
  };

  return (
    <div>
      {/* 모임 종류 필터링: DALLAEMFIT, WORKATION */}
      <div className="flex gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center gap-1 pb-1 ${
              selectedTab === tab.id ? "border-[#111827]" : "border-transparent"
            } relative`}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.label}
            <span>
              <Image src={tab.imageSrc} alt={tab.alt} width={32} height={32} />
            </span>
            {selectedTab === tab.id && (
              <span className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-[#111827] rounded-[1px]"></span>
            )}
          </button>
        ))}
      </div>

      {/* 모임 종류 필터링: OFFICE_STRETCHING, MINDFULNESS */}
      <div className="">
        {tabs.map(
          (tab) =>
            selectedTab === tab.id && (
              <div key={tab.id}>
                <div className="space-x-2 border-b-2 border-[#E5E7EB]">
                  {subTabOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleTabClick(option)}
                      className={`${
                        selectedSubTab === option
                          ? "bg-black text-white"
                          : "bg-[#E5E7EB]"
                      } h-10 appearance-none px-4 py-[10px] rounded-xl my-4 text-center`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ),
        )}
      </div>

      <div>
        {/* <Card selectedTab={selectedSubTab} /> */}
        <Card />
      </div>
    </div>
  );
}
