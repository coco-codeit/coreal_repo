import axiosInstance from "./axiosInstance";
import { ReviewArgs } from "@/types/reviews";

export const fetchReviews = async ({
  gatherId,
  type,
  location,
  sortBy,
}: ReviewArgs) => {
  const queryParams = new URLSearchParams();

  if (gatherId) queryParams.append("gatheringId", gatherId);
  if (location) queryParams.append("location", location);
  if (sortBy) queryParams.append("sortBy", sortBy);

  if (Array.isArray(type)) {
    const promises = type.map((singleType) => {
      const queryCopy = new URLSearchParams(queryParams);
      queryCopy.append("type", singleType);
      return axiosInstance.get(`/reviews?${queryCopy.toString()}`);
    });

    const responses = await Promise.all(promises);
    const combinedData = responses.flatMap((res) => res.data);
    return combinedData;
  }

  if (typeof type === "string") {
    queryParams.append("type", type);
  }

  const res = await axiosInstance.get(`/reviews?${queryParams.toString()}`);
  return res.data;
};
