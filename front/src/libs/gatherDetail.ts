import api from "@/apis";

export const getGatherDetail = async (gatherId: string) => {
  const res = await api.get(`/gatherings/${gatherId}`);

  return res?.data;
};
