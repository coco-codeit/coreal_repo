"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import MyReviews from "./reviews/MyReviews";
import JoinedGatherings from "./joined/JoinedGatherings";
import CreatedGatherings from "./created/CreatedGatherings";

const tabList = [
  { name: "나의 모임", content: <JoinedGatherings /> },
  { name: "나의 리뷰", content: <MyReviews /> },
  { name: "내가 만든 모임", content: <CreatedGatherings /> },
];

export default function ManageTab({ className }: { className?: string }) {
  return (
    <div
      className={`border-t-2 border-gray-900 bg-white px-3 md:px-5 py-4 ${className}`}
    >
      <TabGroup>
        <TabList className="flex flex-row gap-3 font-semibold text-[#9CA3AF]">
          {tabList.map(({ name }, index) => (
            <Tab
              key={`${name}-${index}`}
              className="py-1 border-b-2 border-transparent data-[selected]:border-gray-900 data-[selected]:text-gray-900 hover:text-gray-900 outline-none"
            >
              {name}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabList.map(({ content }, index) => (
            <TabPanel key={`${content}-${index}`}>{content}</TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
