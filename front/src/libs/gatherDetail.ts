import axiosInstance from "./axiosInstance";

export const getGatherDetail = async (gatherId: string) => {
  const res = await axiosInstance.get(`/gatherings/${gatherId}`);

  return res?.data;
};

export const postJoinGather = async (gatherId: string) => {
  const res = await axiosInstance.post(`/gatherings/${gatherId}/join`);

  return res?.data;
};

export const putCancelJoinGather = async (gatherId: string) => {
  const res = await axiosInstance.delete(`/gatherings/${gatherId}/leave`);
  console.log(res);
  return res?.data;
};

export const cancelCreateGather = async (gatherId: string) => {
  const res = await axiosInstance.put(`/gatherings/${gatherId}/cancel`);

  return res?.data;
};

export const getGatherParticipants = async (
  gatherId: string,
  limit: number,
) => {
  const res = await axiosInstance.get(
    `/gatherings/${gatherId}/participants?limit=${limit}`,
  );

  return res?.data;
};

export const getGatherJoined = async () => {
  const res = await axiosInstance.get(
    `/gatherings/joined?sortBy=dateTime&sortOrder=asc`,
  );

  return res?.data;
};

export const getUserReviews = async (pageId: string, offset: number) => {
  const res = await axiosInstance.get(
    `/reviews?gatheringId=${pageId}&limit=4&offset=${offset}`,
  );

  return res?.data;
};
