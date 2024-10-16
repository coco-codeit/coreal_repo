import axiosInstance from "./axiosInstance";
import { ReviewArgs } from "@/types/reviews";
import { getGatherDetail } from "./gatherDetail";
import { Review } from "@/types/reviews";

export const fetchReviews = async ({
  gatherId,
  type,
  location,
  sortBy,
  date,
  limit,
  offset = 0,
  apiBaseUrl,
}: ReviewArgs & { apiBaseUrl?: string }) => {
  if (!apiBaseUrl) {
    throw new Error("API Base URL is not defined.");
  }

  const queryParams = new URLSearchParams();
  if (gatherId) queryParams.append("gatheringId", gatherId);
  if (location) queryParams.append("location", location);
  if (sortBy) queryParams.append("sortBy", sortBy);
  if (date) queryParams.append("date", date);
  if (limit) queryParams.append("limit", limit.toString());
  if (offset) queryParams.append("offset", offset.toString());
  if (type) {
    if (Array.isArray(type)) {
      queryParams.append("type", type.join(","));
    } else {
      queryParams.append("type", type);
    }
  }

  if (!apiBaseUrl) {
    throw new Error("API Base URL is not defined.");
  }

  try {
    const res = await axiosInstance.get(
      `${apiBaseUrl}/reviews?${queryParams.toString()}`
    );
    return await addParticipantCountToReviews(res.data);
  } catch (error) {
    throw error;
  }
};

const addParticipantCountToReviews = async (reviews: Review[]) => {
  const reviewsWithParticipantCount = await Promise.all(
    reviews.map(async (review) => {
      try {
        const gatheringData = await getGatherDetail(review.Gathering.id);
        return {
          ...review,
          participantCount: gatheringData.participantCount,
        };
      } catch (error) {
        return {
          ...review,
          participantCount: 0,
        };
      }
    })
  );

  return reviewsWithParticipantCount;
};
