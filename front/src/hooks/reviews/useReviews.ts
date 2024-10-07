import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "@/libs/reviews";
import { fetchReviewScores } from "@/libs/reviewScores";

export const useReviews = (
  type: string | string[],
  location?: string,
  sortBy?: string
) => {
  const reviewsQuery = useQuery({
    queryKey: ["reviews", type, location, sortBy],
    queryFn: () => fetchReviews(type, location, sortBy),
    select: (data) => {
      if (sortBy === "score") {
        return data.sort(
          (highScoreReview: { score: number }, lowScoreReview: { score: number }) =>
            lowScoreReview.score - highScoreReview.score
        );
      } else if (sortBy === "participantCount") {
        return data.sort(
          (
            moreParticipantsReview: { participantCount: number },
            fewerParticipantsReview: { participantCount: number }
          ) => fewerParticipantsReview.participantCount - moreParticipantsReview.participantCount
        );
      } else {
        return data.sort(
          (
            newerReview: { createdAt: string | number | Date },
            olderReview: { createdAt: string | number | Date }
          ) =>
            new Date(olderReview.createdAt).getTime() -
            new Date(newerReview.createdAt).getTime()
        );
      }
    },
  });
  const reviewScoresQuery = useQuery({
    queryKey: ["reviewScores", type],
    queryFn: () => fetchReviewScores(type),
  });

  return {
    reviews: reviewsQuery.data,
    reviewScores: reviewScoresQuery.data,
    isLoading: reviewsQuery.isLoading || reviewScoresQuery.isLoading,
    isError: reviewsQuery.isError || reviewScoresQuery.isError,
  };
};
