import { getReviews } from "@/apis/profile";
import { useQuery } from "@tanstack/react-query";

export const useMyReviews = (opt?: {
  gatheringId?: number;
  userId?: number;
  type?: string;
  location?: string;
  date?: string;
  registrationEnd?: string;
  sortBy?: "createdAt" | "score" | "participantCount";
  sortOrder?: "asc" | "desc";
  limit?: number;
  offset?: number;
}) => {
  return useQuery({
    queryKey: ["myReviews"],
    queryFn: () => getReviews(opt),
  });
};
