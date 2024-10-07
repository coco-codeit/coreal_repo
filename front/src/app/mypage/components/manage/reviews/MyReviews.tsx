"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ReviewsWritable from "./ReviewsWritable";
import ReviewsWritten from "./ReviewsWritten";

const tabList = [
  { name: "작성 가능한 리뷰", content: <ReviewsWritable /> },
  { name: "작성한 리뷰", content: <ReviewsWritten /> },
];

export default function MyReviews() {
  return (
    <TabGroup>
      <TabList className="mt-4 flex flex-row gap-2 text-sm">
        {tabList.map(({ name }, index) => (
          <Tab
            key={`${name}-${index}`}
            className="py-2 px-4 rounded-xl bg-gray-200 data-[selected]:bg-gray-900 data-[selected]:text-white hover:bg-gray-100 active:bg-gray-300 outline-none"
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
  );
}
