import { QueryClient } from "@tanstack/react-query";
import { getGatheringList } from "@/libs/gatheringsApi";
import {
  IGatherings,
  GatheringType,
  LocationType,
  SortByType,
  SortOrderType,
} from "@/types/gatherings";
import { differenceInDays, differenceInHours, format, isToday } from "date-fns";
import { ko } from "date-fns/locale";

function convertTime(date: string | Date) {
  return new Date(
    new Date(date).toLocaleString("en-US", { timeZone: "Asia/Seoul" }),
  );
}

function getDeadline(registrationTime: Date, now: Date) {
  if (registrationTime < now) return "마감된 모임";

  const hoursDiff = differenceInHours(registrationTime, now);

  if (hoursDiff < 24 && isToday(registrationTime))
    return `오늘 ${registrationTime.getHours()}시 마감`;

  if (hoursDiff < 24 && !isToday(registrationTime))
    return `내일 ${registrationTime.getHours()}시 마감`;

  const daysDiff = differenceInDays(registrationTime, now);

  return `${daysDiff}일 후 마감`;
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

      const transformedData = gatherings.map((gathering: IGatherings) => {
        const currentTime = convertTime(new Date());
        const registrationEndTime = convertTime(gathering.registrationEnd);

        return {
          ...gathering,
          dateTime: format(
            convertTime(gathering.dateTime),
            "yyyy-MM-dd HH:mm:ss",
            { locale: ko },
          ),
          registrationEnd: format(registrationEndTime, "yyyy-MM-dd HH:mm:ss", {
            locale: ko,
          }),
          isClosed: registrationEndTime < currentTime,
          deadlineText: getDeadline(registrationEndTime, currentTime),
        };
      });

      return transformedData;
    },

    getNextPageParam: (lastPage: IGatherings[], allPages: IGatherings[][]) => {
      if (lastPage.length < 10) return null;
      const nextOffset = allPages.flat().length;
      return nextOffset;
    },
  });
}
