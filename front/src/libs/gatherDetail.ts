import api from "@/apis";

export const getGatherDetail = async (gatherId: string) => {
  const res = await api.get(`/gatherings/${gatherId}`);

  return res?.data;
};

export const putCancelGather = async (gatherId: string) => {
  const res = await api.put(`gathering/${gatherId}/cancel`);

  return res?.data;
};

export const postJoinGather = async (gatherId: string) => {
  const res = await api.post(`gathering/${gatherId}/join`);

  return res?.data;
};

export const getGatherParticipants = async (gatherId: string) => {
  const res = await api.get(`gathering/${gatherId}/partipants`);

  return res?.data;
};
