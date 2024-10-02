import api from ".";

export const getList = async () => {
  const res = await api.get("/reviews?gatheringId=1112&limit=10");

  return res;
};
