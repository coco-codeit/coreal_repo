import { QueryClient, useInfiniteQuery } from "@tanstack/react-query";
import { getGatheringList } from "@/libs/gatheringsApi";
import {
  IGatherings,
  GatheringType,
  LocationType,
  SortByType,
  SortOrderType,
} from "@/types/gatherings";

export const usePrefetchGatherings = async ({
  queryClient,
  type,
  location,
  sortBy,
  sortOrder,
}: {
  queryClient: QueryClient;
  type?: GatheringType;
  location?: LocationType;
  sortBy?: SortByType;
  sortOrder?: SortOrderType;
}) => {
  await queryClient.prefetchInfiniteQuery({
    initialPageParam: 0,
    queryKey: ["gatherings", type, location, sortBy, sortOrder],
    queryFn: ({ pageParam = 0 }) =>
      getGatheringList({
        pageParam,
        type,
        location,
        sortBy,
        sortOrder,
      }),
    getNextPageParam: (lastPage: IGatherings[], allPages: IGatherings[][]) => {
      if (lastPage.length < 10) return null;
      const nextOffset = allPages.flat().length;
      return nextOffset;
    },
  });
};

export const useFetchGatherings = ({
  type,
  location,
  sortBy,
  sortOrder,
  pageSize = 10,
}: {
  type?: GatheringType;
  location?: LocationType;
  sortBy?: SortByType;
  sortOrder?: SortOrderType;
  pageSize?: number;
}) => {
  return useInfiniteQuery({
    queryKey: ["gatherings", type, location, sortBy, sortOrder],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }: { pageParam: number }) =>
      getGatheringList({
        pageParam,
        type,
        location,
        sortBy,
        sortOrder,
      }),
    getNextPageParam: (lastPage: IGatherings[], allPages: IGatherings[][]) => {
      if (lastPage.length < pageSize) return null;
      const nextOffset = allPages.flat().length;
      return nextOffset;
    },
    select: (data) => data.pages.flat(),
    refetchInterval: 3600000, // 1시간마다 refetch
  });
};
