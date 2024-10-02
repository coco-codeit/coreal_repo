import api from "@/apis";

export const getGatheringList = async () => {
  const res = await api.get(`/gatherings`);

  return res?.data;
};
