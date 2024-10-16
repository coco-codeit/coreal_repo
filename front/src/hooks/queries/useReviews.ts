import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchReviews } from "@/libs/reviews";
import { fetchReviewScores } from "@/libs/reviewScores";
import { Review, ReviewArgs } from "@/types/reviews";

export const useReviews = (args: ReviewArgs, initialData: Review[] = []) => {
  const { gatherId, type, location, sortBy, date, limit = 10 } = args;

  const reviewsQuery = useInfiniteQuery({
    queryKey: ["reviews", gatherId, type, location, sortBy, date],
    queryFn: async ({ pageParam = 0 }) => {
      const typeParam =
        type === "ALL" ? ["OFFICE_STRETCHING", "MINDFULNESS"] : type;

      const allReviews = await fetchReviews({
        ...args,
        type: typeParam,
      });
      if (sortBy === "score") {
        allReviews.sort((a, b) => b.score - a.score);
      } else if (sortBy === "participantCount") {
        allReviews.sort(
          (a, b) => (b.participantCount || 0) - (a.participantCount || 0),
        );
      } else {
        allReviews.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
      }

      const start = pageParam;
      const end = start + limit;
      return allReviews.slice(start, end);
    },
    getNextPageParam: (lastPage: Review[], allPages: Review[][]) => {
      const totalFetchedItems = allPages.flat().length;
      return lastPage.length < limit ? null : totalFetchedItems;
    },
    initialPageParam: 0,
    initialData: { pages: [initialData], pageParams: [0] },
  });

  const reviewScoresQuery = useQuery({
    queryKey: ["reviewScores", type],
    queryFn: () => (type ? fetchReviewScores(type) : Promise.resolve([])),
  });

  return {
    reviews: reviewsQuery.data?.pages.flat() || [],
    reviewScores: reviewScoresQuery.data || [],
    fetchNextPage: reviewsQuery.fetchNextPage,
    hasNextPage: reviewsQuery.hasNextPage,
    isFetching: reviewsQuery.isFetching,
    isLoading: reviewsQuery.isLoading || reviewScoresQuery.isLoading,
    isError: reviewsQuery.isError || reviewScoresQuery.isError,
  };
};