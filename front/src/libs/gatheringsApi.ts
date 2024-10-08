import axiosInstance from "@/libs/axiosInstance";
import {
  IGatherings,
  GatheringType,
  LocationType,
  SortByType,
  SortOrderType,
} from "@/types/gatherings";

interface GetGatheringListParams {
  pageParam: number; // offset
  type?: GatheringType | undefined;
  location?: LocationType | undefined;
  sortBy?: SortByType | undefined;
  sortOrder?: SortOrderType | undefined;
}

export const getGatheringList = async ({
  pageParam,
  // offset 이외의 값 undefined로 설정
  type = undefined,
  location = undefined,
  sortBy = undefined,
  sortOrder = undefined,
}: GetGatheringListParams): Promise<IGatherings[]> => {
  const res = await axiosInstance.get(`/gatherings`, {
    params: {
      limit: 10, // limit 값 10으로 고정
      offset: pageParam,
      type,
      location,
      sortBy,
      sortOrder,
    },
  });

  return res.data;
};
