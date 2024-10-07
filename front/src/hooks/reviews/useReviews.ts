import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "@/libs/reviews";

export const useReviews = (
  type: string | string[],
  location?: string,
  sortBy?: string
) => {
  return useQuery({
    queryKey: ["reviews", type, location, sortBy],
    queryFn: () => fetchReviews(type, location, sortBy),
    select: (data) => {
      if (sortBy === "score") {
        return data.sort(
          (a: { score: number }, b: { score: number }) => b.score - a.score
        );
      } else if (sortBy === "participantCount") {
        return data.sort(
          (a: { participantCount: number }, b: { participantCount: number }) =>
            b.participantCount - a.participantCount
        );
      } else {
        return data.sort(
          (
            a: { createdAt: string | number | Date },
            b: { createdAt: string | number | Date }
          ) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
    },
  });
};
