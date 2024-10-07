import { ReviewArgs } from "@/types/reviews";
import axiosInstance from "./axiosInstance";

// export const fetchReviews = async ({ gatherId, type }: ReviewArgs) => {
//   try {
//     const res = await axiosInstance.get(
//       `/reviews?gatheringId=${gatherId}&type=${type}`
//     );

//     return res.data;
//   } catch (error) {
//     console.error("Failed to fetch reviews:", error);
//     throw new Error("Failed to fetch reviews");
//   }
// };

export const fetchReviews = async ({ gatherId, type }: ReviewArgs) => {
  const queryParams = new URLSearchParams();

  if (gatherId) queryParams.append("gatheringId", gatherId);
  if (type) queryParams.append("type", type);

  const res = await axiosInstance.get(`/reviews?${queryParams.toString()}`);

  return res.data;
};
