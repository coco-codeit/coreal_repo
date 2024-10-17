"use client";

import { useEffect, useRef, useState } from "react";
import Card from "../content/Card";
import { useReviews } from "@/hooks/queries/useReviews";
import { Review } from "@/types/reviews";
import { DallaemfitIcon } from "../icons/DallaemfitIcon";
import { WorkationIcon } from "../icons/WorkationIcon";

const tabs = [
  {
    id: "DALLAEMFIT",
    label: "달램핏",
    hasSubTabs: true,
    imageSrc: "/images/dalaemfit.svg",
    alt: "dalaemfit",
    subTabs: [
      { id: "ALL", label: "전체" },
      { id: "OFFICE_STRETCHING", label: "오피스 스트레칭" },
      { id: "MINDFULNESS", label: "마인드풀니스" },
    ],
  },
  {
    id: "WORKATION",
    label: "워케이션",
    imageSrc: "/images/workation.svg",
    alt: "workation",
    hasSubTabs: true,
    subTabs: [{ id: "ALL", label: "전체" }],
  },
];

interface TabsProps {
  initialReviews: Review[];
}

export default function Tabs({ initialReviews }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const [selectedSubTab, setSelectedSubTab] = useState(
    tabs[0].subTabs ? tabs[0].subTabs[0].id : ""
  );
  const [selectedRegion, setSelectedRegion] = useState<string | undefined>(
    "지역 선택"
  );
  const [selectedSort, setSelectedSort] = useState("createdAt");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const {
    reviews,
    reviewScores,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useReviews(
    {
      type: selectedTab,
      location: selectedRegion === "지역 선택" ? undefined : selectedRegion,
      sortBy: selectedSort,
    },
    initialReviews
  );

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.id === selectedTab);
    if (currentTab?.hasSubTabs) {
      setSelectedSubTab(currentTab?.subTabs ? currentTab.subTabs[0].id : "");
    } else {
      setSelectedSubTab("");
    }
  }, [selectedTab]);

  const handleTabClick = (tabId: string, index: number) => {
    setSelectedTab(tabId);
    const currentTab = tabRefs.current[index];
    if (currentTab) {
      setUnderlineWidth(currentTab.offsetWidth);
      setUnderlineLeft(currentTab.offsetLeft);
    }
  };

  useEffect(() => {
    // 초기 탭 크기와 위치 설정
    const initialTab = tabRefs.current[0];
    if (initialTab) {
      setUnderlineWidth(initialTab.offsetWidth);
      setUnderlineLeft(initialTab.offsetLeft);
    }
  }, []);

  const handleSubTabClick = (subTabId: string) => {
    setSelectedSubTab(subTabId);
  };

  if (isError) return <p>Error loading data</p>;

  const filteredReviews =
    selectedSubTab === "ALL"
      ? reviews
      : reviews.filter((review) => review.Gathering?.type === selectedSubTab);

  return (
    <div>
      <div className="inline-flex gap-3 relative">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            className={`flex items-center gap-1 pb-1 text-lg font-semibold relative transition-colors duration-300 ease-in-out
              ${selectedTab === tab.id ? "text-black" : "text-gray-400"}
            
            relative`}
            onClick={() => handleTabClick(tab.id, index)}
          >
            {tab.label}
            <span>
              {tab.id === "DALLAEMFIT" && (
                <DallaemfitIcon isSelected={selectedTab === "DALLAEMFIT"} />
              )}
              {tab.id === "WORKATION" && (
                <WorkationIcon isSelected={selectedTab === "WORKATION"} />
              )}
            </span>
          </button>
        ))}
        <span
          className="absolute bottom-0 h-[2px] bg-gray-900 rounded-[1px] transition-all duration-300 ease-linear"
          style={{
            width: underlineWidth,
            left: underlineLeft,
          }}
        ></span>
      </div>

      <div className="">
        {tabs.find((tab) => tab.id === selectedTab)?.hasSubTabs && (
          <div className="space-x-2 border-b-2 border-gray-200">
            {tabs
              .find((tab) => tab.id === selectedTab)
              ?.subTabs?.map((subTab) => (
                <button
                  key={subTab.id}
                  onClick={() => handleSubTabClick(subTab.id)}
                  className={`${selectedSubTab === subTab.id ? "selected-subtab bg-black text-white" : "bg-gray-200"} h-10 appearance-none px-4 rounded-xl my-4 text-center text-sm font-medium`}
                >
                  {subTab.label}
                </button>
              ))}
          </div>
        )}
      </div>

      <div>
        <Card
          reviews={filteredReviews || []}
          reviewScores={reviewScores || []}
          tabs={tabs}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedSubTab={selectedSubTab}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetching={isFetching}
        />
      </div>
    </div>
  );
}
