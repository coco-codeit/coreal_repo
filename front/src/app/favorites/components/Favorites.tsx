"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useFetchGatherings } from "@/hooks/queries/useGatheringsQuery";
import { useGatheringsStore } from "@/stores/useGatheringsStore";
import useFavoritesStore from "@/stores/useFavoritesStore";
import { IGatherings } from "@/types/gatherings";
import Tabs from "@/app/gatherings/components/list/Tabs";
import Filters from "@/app/gatherings/components/filter";
import InfiniteScroll from "@/app/gatherings/components/list/InfiniteScroll";
import Card from "@/app/gatherings/components/card";

function Favorites() {
  const { favorites, setFavoritesFromStorage } = useFavoritesStore();
  const {
    tab: type,
    location,
    date,
    sortBy,
    sortOrder,
    resetState,
  } = useGatheringsStore();

  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } =
    useFetchGatherings({
      type,
      location,
      date,
      sortBy,
      sortOrder,
    });

  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      setFavoritesFromStorage();
      resetState();
    }
    previousPath.current = pathname;
  }, [pathname, resetState, setFavoritesFromStorage]);

  const favoriteGatherings = data?.filter((gathering: IGatherings) =>
    favorites.has(gathering.id),
  );

  return (
    <>
      <Tabs />
      <Filters />
      <InfiniteScroll
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetching={isFetching}
      >
        {isLoading ? null : favoriteGatherings?.length === 0 &&
          !hasNextPage &&
          !isFetching ? (
          <div className="text-sm text-gray-500 pt-[224px] md:pt-[355px] lg:pt-[335px] w-full text-center">
            <p>아직 찜한 모임이 없어요.</p>
          </div>
        ) : (
          <div className="relative z-0 grid grid-cols-1 gap-6 py-4 md:py-6 w-full">
            {favoriteGatherings?.map((item: IGatherings) => {
              return <Card key={item.id} data={item} showExpiration={true} />;
            })}
          </div>
        )}
      </InfiniteScroll>
    </>
  );
}

export default Favorites;
