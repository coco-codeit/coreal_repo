import api from ".";

export const getGatheringList = async () => {
  const res = await api.get(`/gatherings`);
  return res.data;
};

/*
import api from "@/apis";
import { LocationType } from "@/stores/useGatheringsStore";
import { GatheringType } from "@/types/gatherings";

export const getGatheringList = async (
  tab: GatheringType,
  location: LocationType | undefined,
  date: Date | undefined,
  sortBy: string | undefined,
  sortOrder: string | undefined
) => {
  const res = await api.get(`/gatherings`, {
    params: {
      type: tab,
      location: location || undefined,
      date: date || undefined,
      sortBy: sortBy || undefined,
      sortOrder: sortOrder || undefined,
    },
  });
  console.log(res.data);

  return res.data;
};

*/
