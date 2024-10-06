"use client";

import Header from "./Header";
import GatheringsTabs from "./GatheringsTabs";
import Filters from "./Filters";
import Card from "./Card";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useGatheringsStore } from "@/stores/useGatheringsStore";
import { getGatheringList } from "@/apis/gatheringsApi";

function Gatherings() {
  const { offset, setOffset, resetOffset, tab, location, date, sortBy } =
    useGatheringsStore();
  const limit = 10;

  const { data, isLoading, error } = useQuery({
    queryKey: ["gatherings"],
    queryFn: () => getGatheringList(),
  });

  console.log("쿼리 상태:", { data, isLoading, error });

  useEffect(() => {
    resetOffset();
  }, [tab, location, date, sortBy, resetOffset]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const loadMore = () => {
    setOffset(offset + limit);
  };

  return (
    <div className="max-w-[343px] md:max-w-[695px] lg:max-w-[996px] mx-auto flex flex-col">
      <Header />
      <GatheringsTabs />
      <Filters />
      <Card data={data} />
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}

export default Gatherings;
