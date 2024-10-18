import axiosInstance from "./axiosInstance";

export const fetchReviewScores = async (
  type: string | string[],
  apiBaseUrl: string
) => {
  if (!apiBaseUrl) {
    throw new Error("API Base URL is not defined.");
  }

  try {
    if (Array.isArray(type)) {
      const promises = type.map((type) =>
        axiosInstance.get(`${apiBaseUrl}/reviews/scores`, { params: { type } })
      );
      const responses = await Promise.all(promises);
      return responses.flatMap((res) => res.data);
    } else {
      const res = await axiosInstance.get(`${apiBaseUrl}/reviews/scores`, {
        params: { type },
      });
      return res.data;
    }
  } catch (error) {
    throw new Error("Error fetching review scores: " + error);
  }
};
