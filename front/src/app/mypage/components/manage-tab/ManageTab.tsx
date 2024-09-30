"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import MyReviews from "./MyReviews";
import MyGatherings from "./MyGatherings";
import MyGatheringsIMade from "./MyGatheringsIMade";
export default function ManageTab() {
  return (
    <div>
      <h1>내 모임 관리</h1>
      <TabGroup>
        <TabList>
          <Tab>나의 모임</Tab>
          <Tab>나의 리뷰</Tab>
          <Tab>내가 만든 모임</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <MyGatherings />
          </TabPanel>
          <TabPanel>
            <MyReviews />
          </TabPanel>
          <TabPanel>
            <MyGatheringsIMade />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
