"use client";

import { useEffect } from "react";
import Header from "@/app/gatherings/components/Header";
import GatheringTabs from "@/app/gatherings/components/GatheringsTabs";
import Card from "@/app/gatherings/components/Card";
import { useGatheringStore } from "@/app/hooks/gatherings/useGatheringStore";

function Gatherings() {
  const { tab, gatherings, getGatherings } = useGatheringStore();

  useEffect(() => {
    getGatherings(tab);
  }, [getGatherings, tab]);

  return (
    <>
      <Header />
      <GatheringTabs />
      <Card data={gatherings} />
    </>
  );
}

export default Gatherings;
