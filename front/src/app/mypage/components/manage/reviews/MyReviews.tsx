"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ReviewsWritable from "./ReviewsWritable";
import ReviewsWritten from "./ReviewsWritten";

const tabList = [
  {
    name: "Reviews Writable",
    label: "작성 가능한 리뷰",
    render: () => {
      return <ReviewsWritable />;
    },
  },
  {
    name: "Reviews Written",
    label: "작성한 리뷰",
    render: () => {
      return <ReviewsWritten />;
    },
  },
];

export default function MyReviews() {
  return (
    <TabGroup>
      <TabList className="mt-4 flex flex-row gap-2 text-sm">
        {tabList.map(({ label }, index) => (
          <Tab
            key={`${label}-${index}`}
            className="py-2 px-4 rounded-xl bg-gray-200 data-[selected]:bg-gray-900 data-[selected]:text-white hover:bg-gray-100 active:bg-gray-300 outline-none"
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
  );
}
