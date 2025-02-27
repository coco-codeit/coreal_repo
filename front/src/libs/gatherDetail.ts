import { UserRiveiw } from "@/types/gatherings";
import axiosInstance from "./axiosInstance";

export const getGatherDetail = async (gatherId: number) => {
  const res = await axiosInstance.get(`/gatherings/${gatherId}`);

  return res?.data;
};

export const postJoinGather = async (gatherId: number) => {
  const res = await axiosInstance.post(`/gatherings/${gatherId}/join`);

  return res?.data;
};

export const putCancelJoinGather = async (gatherId: number) => {
  const res = await axiosInstance.delete(`/gatherings/${gatherId}/leave`);
  return res?.data;
};

export const cancelCreateGather = async (gatherId: number) => {
  const res = await axiosInstance.put(`/gatherings/${gatherId}/cancel`);

  return res?.data;
};

export const getGatherParticipants = async (
  gatherId: number,
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

export const getUserReviews = async ({ pageId, offset, limit }: UserRiveiw) => {
  const limitQuery = () => {
    return limit !== 0 ? `&limit=${limit}` : "";
  };

  const res = await axiosInstance.get(
    `/reviews?gatheringId=${pageId}${limitQuery()}&offset=${offset}`,
  );
  return res?.data;
};
