"use client";

import Gatherings from "@/app/gatherings/list/components/Gatherings";
import { useListQuery } from "@/hooks/queries/gatheringListQuery";

function Home() {
  const { data } = useListQuery();
  console.log(data);
  return (
    <div className="max-w-[343px] md:max-w-[695px] lg:max-w-[996px] mx-auto flex flex-col">
      <Gatherings />
    </div>
  );
}
export default Home;
