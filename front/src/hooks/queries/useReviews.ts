import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "@/libs/reviews";
import { fetchReviewScores } from "@/libs/reviewScores";
import { ReviewArgs } from "@/types/reviews";

export const useReviews = (args: ReviewArgs) => {
  const { gatherId, type, location, sortBy } = args;

  const reviewsQuery = useQuery({
    queryKey: ["reviews", gatherId, type, location, sortBy],
    queryFn: () => fetchReviews(args),
    select: (data) => {
      if (sortBy === "score") {
        return data.sort(
          (
            highScoreReview: { score: number },
            lowScoreReview: { score: number }
          ) => lowScoreReview.score - highScoreReview.score
        );
      } else if (sortBy === "participantCount") {
        return data.sort(
          (
            moreParticipantsReview: { participantCount: number },
            fewerParticipantsReview: { participantCount: number }
          ) =>
            fewerParticipantsReview.participantCount -
            moreParticipantsReview.participantCount
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
    queryFn: () => (type ? fetchReviewScores(type) : Promise.resolve([])),
  });

  return {
    reviews: reviewsQuery.data,
    reviewScores: reviewScoresQuery.data,
    isLoading: reviewsQuery.isLoading || reviewScoresQuery.isLoading,
    isError: reviewsQuery.isError || reviewScoresQuery.isError,
  };
};
