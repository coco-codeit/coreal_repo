"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ReviewsWritable from "./ReviewsWritable";
import ReviewsWritten from "./ReviewsWritten";

export default function MyReviews() {
  return (
    <TabGroup>
      <TabList>
        <Tab>작성 가능한 리뷰</Tab>
        <Tab>작성한 리뷰</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ReviewsWritable />
        </TabPanel>
        <TabPanel>
          <ReviewsWritten />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
