import axiosInstance from "./axiosInstance";

export const getGatheringList = async () => {
  const res = await axiosInstance.get(`/gatherings`);

  return res?.data;
};
