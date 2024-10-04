import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "@/libs/reviews";

export const useReviews = (type: string | string[]) => {
  return useQuery({
    queryKey: ["reviews", type],
    queryFn: () => fetchReviews(type),
  });
};

