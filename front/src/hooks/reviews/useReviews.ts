import { fetchReviews } from "@/libs/reviews";
import { Review, ReviewArgs } from "@/types/reviews";
import { useQuery } from "@tanstack/react-query";

export const useReviews = ({ gatherId, type }: ReviewArgs) => {
  return useQuery<Review[]>({
    queryKey: ["reviews", type],
    queryFn: () => fetchReviews({ gatherId, type }),
  });
};
