import axiosInstance from "./axiosInstance";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchReviewScores = async (type: string | string[]) => {
  try {
    if (Array.isArray(type)) {
      const promises = type.map((type) =>
        axiosInstance.get(`/reviews/scores`, { params: { type } }),
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
    throw new Error("Failed to fetch review scores");
  }
};
