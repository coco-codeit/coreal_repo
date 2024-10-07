import api from "@/apis";
import { GatheringType } from "@/types/gatherings";

export const getGatheringList = async (tab: GatheringType) => {
  const res = await api.get(`/gatherings`, {
    params: { type: tab },
  });

  return res.data;
};
