import axiosInstance from "./axiosInstance";

export const getGatherDetail = async (gatherId: string) => {
  const res = await axiosInstance.get(`/gatherings/${gatherId}`);

  return res?.data;
};

export const putCancelGather = async (gatherId: string) => {
  const res = await axiosInstance.put(`/gatherings/${gatherId}/cancel`);

  return res?.data;
};

export const postJoinGather = async (gatherId: string) => {
  const res = await axiosInstance.post(`/gatherings/${gatherId}/join`);

  return res?.data;
};

export const getGatherParticipants = async (gatherId: string) => {
  const res = await axiosInstance.get(`/gatherings/${gatherId}/participants`);

  return res?.data;
};
