import axiosInstance from "./axiosInstance";

export const fetchReviews = async (type: string) => {
  try {
    const res = await axiosInstance.get(`/reviews?type=${type}`);

    return res.data;
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    throw new Error("Failed to fetch reviews");
  }
};
