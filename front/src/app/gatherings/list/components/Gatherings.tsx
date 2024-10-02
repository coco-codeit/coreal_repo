"use client";

import { useEffect, useState } from "react";
import Header from "@/app/gatherings/list/components/Header";
import GatheringTabs from "@/app/gatherings/list/components/GatheringsTabs";
import Card from "@/app/gatherings/list/components/Card";
import { useGatheringStore } from "@/hooks/gatherings/useGatheringStore";
import { fetchGatherings } from "@/apis/gatherings";

// TODO: gatherings api fetch use-query로 변경

function Gatherings() {
  const { tab } = useGatheringStore();
  const [gatherings, setGatherings] = useState([]);

  useEffect(() => {
    const getGatherings = async () => {
      try {
        const data = await fetchGatherings(tab);
        setGatherings(data);
      } catch (error) {
        console.error("Error fetching gatherings:", error);
      }
    };

    getGatherings();
  }, [tab]);

  return (
    <>
      <Header />
      <GatheringTabs />
      <Card data={gatherings} />
    </>
  );
}

export default Gatherings;
