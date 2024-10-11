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
}: ReviewArgs) => {
  const queryParams = new URLSearchParams();

  if (gatherId) queryParams.append("gatheringId", gatherId);
  if (location) queryParams.append("location", location);
  if (sortBy) queryParams.append("sortBy", sortBy);
  if (date) queryParams.append("date", date);

  if (Array.isArray(type)) {
    const promises = type.map((singleType) => {
      const queryCopy = new URLSearchParams(queryParams);
      queryCopy.append("type", singleType);
      return axiosInstance.get(`/reviews?${queryCopy.toString()}`);
    });

    const responses = await Promise.all(promises);
    const combinedData = responses.flatMap((res) => res.data);
    return await addParticipantCountToReviews(combinedData);
  }

  if (typeof type === "string") {
    queryParams.append("type", type);
  }

  const res = await axiosInstance.get(`/reviews?${queryParams.toString()}`);
  return await addParticipantCountToReviews(res.data);
};

const addParticipantCountToReviews = async (reviews: Review[]) => {
  const reviewsWithParticipantCount = await Promise.all(
    reviews.map(async (review) => {
      try {
        const gatheringData = await getGatherDetail(
          review.Gathering.id.toString(),
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
    }),
  );

  return reviewsWithParticipantCount;
};
