import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "@/libs/reviews";

export const useReviews = (type: string | string[], location?: string) => {
  return useQuery({
    queryKey: ["reviews", type, location],
    queryFn: () => fetchReviews(type, location),
  });
};
