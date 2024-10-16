import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchReviews } from "@/libs/reviews";
import { fetchReviewScores } from "@/libs/reviewScores";
import { Review, ReviewArgs } from "@/types/reviews";

export const useReviews = (args: ReviewArgs, initialData: Review[] = []) => {
  const { gatherId, type, location, sortBy, date, limit = 10 } = args;

  const reviewsQuery = useInfiniteQuery({
    queryKey: ["reviews", gatherId, type, location, sortBy, date],
    queryFn: async ({ pageParam = 0 }) => {
      const allReviews = await fetchReviews({
        ...args,
        type,
      });

      if (sortBy === "score") {
        allReviews.sort((a, b) => b.score - a.score);
      } else if (sortBy === "participantCount") {
        allReviews.sort(
          (a, b) => (b.participantCount || 0) - (a.participantCount || 0)
        );
      } else {
        allReviews.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
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

  const officeStretchingReviews =
    reviewsQuery.data?.pages
      .flat()
      .filter((review) => review.type === "OFFICE_STRETCHING") || [];

  const mindfulnessReviews =
    reviewsQuery.data?.pages
      .flat()
      .filter((review) => review.type === "MINDFULNESS") || [];

  const reviewScoresQuery = useQuery({
    queryKey: ["reviewScores", type],
    queryFn: () => (type ? fetchReviewScores(type) : Promise.resolve([])),
  });

  return {
    reviews: reviewsQuery.data?.pages.flat() || [],
    officeStretchingReviews,
    mindfulnessReviews,
    reviewScores: reviewScoresQuery.data || [],
    fetchNextPage: reviewsQuery.fetchNextPage,
    hasNextPage: reviewsQuery.hasNextPage,
    isFetching: reviewsQuery.isFetching,
    isLoading: reviewsQuery.isLoading || reviewScoresQuery.isLoading,
    isError: reviewsQuery.isError || reviewScoresQuery.isError,
  };
};
