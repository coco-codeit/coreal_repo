import axiosInstance from "./axiosInstance";
import { ReviewArgs } from "@/types/reviews";
import { getGatherDetail } from "./gatherDetail";
import { Review } from "@/types/reviews";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!BASE_URL) {
  throw new Error(
    "API Base URL is not defined. Please check NEXT_PUBLIC_API_URL in your .env file."
  );
}

export const fetchReviews = async ({
  gatherId,
  type,
  location,
  sortBy,
  date,
  limit,
  offset = 0,
}: ReviewArgs) => {
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

  try {
    const res = await axiosInstance.get(
      `${BASE_URL}/reviews?${queryParams.toString()}`
    );
    return await addParticipantCountToReviews(res.data);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};

const addParticipantCountToReviews = async (reviews: Review[]) => {
  const reviewsWithParticipantCount = await Promise.all(
    reviews.map(async (review) => {
      try {
        const gatheringData = await getGatherDetail(
          review.Gathering.id.toString()
        );
        return {
          ...review,
          participantCount: gatheringData.participantCount,
        };
      } catch (error) {
        console.error("Error fetching gathering data:", error);
        return {
          ...review,
          participantCount: 0,
        };
      }
    })
  );

  return reviewsWithParticipantCount;
};
