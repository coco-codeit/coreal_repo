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
          (currentReview: { score: number }, nextReview: { score: number }) =>
            nextReview.score - currentReview.score
        );
      } else if (sortBy === "participantCount") {
        return data.sort(
          (
            currentReview: { participantCount: number },
            nextReview: { participantCount: number }
          ) => nextReview.participantCount - currentReview.participantCount
        );
      } else {
        return data.sort(
          (
            currentReview: { createdAt: string | number | Date },
            nextReview: { createdAt: string | number | Date }
          ) =>
            new Date(nextReview.createdAt).getTime() -
            new Date(currentReview.createdAt).getTime()
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
