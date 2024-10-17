import { QueryClient } from "@tanstack/react-query";
import { getGatheringList } from "@/libs/gatheringsApi";
import {
  IGatherings,
  GatheringType,
  LocationType,
  SortByType,
  SortOrderType,
} from "@/types/gatherings";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

function convertTime(date: string | Date) {
  return new Date(
    new Date(date).toLocaleString("en-US", {
      timeZone: "Asia/Seoul",
    }),
  );
}

export async function prefetchGatherings({
  queryClient,
  type,
  location,
  date,
  sortBy,
  sortOrder,
}: {
  queryClient: QueryClient;
  type?: GatheringType;
  location?: LocationType;
  date?: Date;
  sortBy?: SortByType;
  sortOrder?: SortOrderType;
}) {
  await queryClient.prefetchInfiniteQuery<IGatherings[]>({
    initialPageParam: 0,
    queryKey: ["gatherings", type, location, date, sortBy, sortOrder],
    queryFn: async ({ pageParam = 0 }) => {
      const gatherings = await getGatheringList({
        pageParam: pageParam as number,
        type,
        location,
        date,
        sortBy,
        sortOrder,
      });
      const transformedData = gatherings.map((gathering: IGatherings) => ({
        ...gathering,
        dateTime: format(
          convertTime(gathering.dateTime),
          "yyyy-MM-dd HH:mm:ss",
          { locale: ko },
        ),
        registrationEnd: format(
          convertTime(gathering.registrationEnd),
          "yyyy-MM-dd HH:mm:ss",
          { locale: ko },
        ),
      }));

      return transformedData;
    },
    getNextPageParam: (lastPage: IGatherings[], allPages: IGatherings[][]) => {
      if (lastPage.length < 10) return null;
      const nextOffset = allPages.flat().length;
      return nextOffset;
    },
  });
}
