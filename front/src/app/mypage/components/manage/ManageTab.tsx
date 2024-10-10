"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import MyReviews from "./reviews/MyReviews";
import JoinedGatherings from "./joined/JoinedGatherings";
import CreatedGatherings from "./created/CreatedGatherings";

const tabList = [
  {
    name: "Joined Gatherings",
    label: "나의 모임",
    render: () => {
      return <JoinedGatherings />;
    },
  },
  {
    name: "My Reviews",
    label: "나의 리뷰",
    render: () => {
      return <MyReviews />;
    },
  },
  {
    name: "Created Gatherings",
    label: "내가 만든 모임",
    render: () => {
      return <CreatedGatherings />;
    },
  },
];

export default function ManageTab({ className }: { className?: string }) {
  return (
    <div
      className={`border-t-2 border-gray-900 bg-white px-3 md:px-5 py-4 ${className}`}
    >
      <TabGroup>
        <TabList className="flex flex-row gap-3 font-semibold text-[#9CA3AF]">
          {tabList.map(({ label }, index) => (
            <Tab
              key={`${label}-${index}`}
              className="py-1 border-b-2 border-transparent data-[selected]:border-gray-900 data-[selected]:text-gray-900 hover:text-gray-900 outline-none"
            >
              {label}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabList.map((tab, index) => (
            <TabPanel key={`${tab.name}-${index}`}>{tab.render()}</TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
