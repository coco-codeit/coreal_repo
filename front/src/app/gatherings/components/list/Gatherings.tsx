"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useFetchGatherings } from "@/hooks/queries/useGatheringsQuery";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useGatheringsStore } from "@/stores/useGatheringsStore";
import { IGatherings } from "@/types/gatherings";
import Header from "@/app/components/Header";
import Tabs from "@/app/gatherings/components/list/Tabs";
import Filters from "@/app/gatherings/components/filter";
import InfiniteScroll from "@/app/gatherings/components/list/InfiniteScroll";
import Gradient from "@/app/components/Gradient";
import Card from "@/app/gatherings/components/card";

function Gatherings() {
  const {
    tab: type,
    location,
    date,
    sortBy,
    sortOrder,
    resetState,
  } = useGatheringsStore();

  const {
    data: gatherings = [],
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
  } = useFetchGatherings({
    type,
    location,
    date,
    sortBy,
    sortOrder,
  });

  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);
  const controls = useScrollAnimation();

  useEffect(() => {
    if (previousPath.current !== pathname) {
      resetState();
    }
    previousPath.current = pathname;
  }, [pathname, resetState]);

  return (
    <div className="min-w-[375px] max-w-[375px] px-4 md:max-w-[744px] pb-4 md:px-[24.5px] lg:max-w-[996px] lg:min-w-[1200px] lg:px-[102px] min-h-screen mx-auto flex flex-col bg-gray-50">
      <Header type="class" />
      <Tabs />
      <Filters />
      <InfiniteScroll
        isFetching={isFetching}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      >
        {isLoading ? null : gatherings.length === 0 ? (
          <div className="text-sm text-gray-500 pt-[224px] md:pt-[355px] lg:pt-[335px] w-full text-center">
            <p>아직 모임이 없어요.</p>
            <p>지금 바로 모임을 만들어보세요.</p>
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <Gradient position="top" controls={controls} />
            <div className="grid grid-cols-1 gap-6 py-4 md:py-6 w-full">
              {gatherings.map((item: IGatherings) => (
                <Card key={item.id} data={item} />
              ))}
            </div>
            <Gradient position="bottom" controls={controls} />
          </div>
        )}
      </InfiniteScroll>
    </div>
  );
}

export default Gatherings;
