"use client";

import Header from "@/app/gatherings/list/components/Header";
import GatheringsTabs from "@/app/gatherings/list/components/GatheringsTabs";
import Card from "@/app/gatherings/list/components/Card";
import { useListQuery } from "@/hooks/queries/useGatheringsQuery";

function Gatherings() {
  const { data, isLoading, error } = useListQuery();

  if (isLoading) return <p className="bg-blue-8">Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header />
      <GatheringsTabs />
      <Card data={data} />
    </>
  );
}

export default Gatherings;
