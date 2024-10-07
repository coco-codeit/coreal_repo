"use client";

import InfiniteScroll from "@/app/gatherings/list/components/InfiniteScroll";
import Header from "@/app/gatherings/list/components/Header";
import GatheringsTabs from "@/app/gatherings/list/components/GatheringsTabs";
import Filters from "@/app/gatherings/list/components/filter";
import Card from "@/app/gatherings/list/components/card";
import { useFetchGatherings } from "@/hooks/queries/useGatheringsQuery";
import { useGatheringsStore } from "@/stores/useGatheringsStore";
import { IGatherings } from "@/types/gatherings";

function Gatherings() {
  const { tab: type, location, sortBy, sortOrder } = useGatheringsStore();

  const {
    data: gatherings = [],
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
  } = useFetchGatherings({
    type,
    location,
    sortBy,
    sortOrder,
  });

  return (
    <div className="max-w-[343px] md:max-w-[695px] lg:max-w-[996px] mx-auto flex flex-col">
      <Header />
      <GatheringsTabs />
      <Filters />
      <InfiniteScroll
        isFetching={isFetching}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      >
        {isLoading ? (
          <li className="text-center">Loading...</li>
        ) : gatherings.length === 0 ? (
          <div className="text-body-1 text-gray-500 items-center justify-center md:mt-[355px] lg:mt-[335px] mt-[224px] w-full text-center">
            <p>아직 모임이 없어요.</p>
            <p>지금 바로 모임을 만들어보세요.</p>
          </div>
        ) : (
          gatherings.map((item: IGatherings) => (
            <Card key={item.id} data={item} />
          ))
        )}
      </InfiniteScroll>
    </div>
  );
}

export default Gatherings;
