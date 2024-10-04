import { fetchReviews } from "@/libs/reviews";
import { Review } from "@/types/reviews";
import { useQuery } from "@tanstack/react-query";

export const useReviews = (teamId: number, type: string) => {
  return useQuery<Review[]>({
    queryKey: ["reviews", teamId, type],
    queryFn: () => fetchReviews(teamId, type),
  });
};



// import { fetchReviews } from "@/libs/reviews";  
// import { Review } from "@/types/reviews";
// import { useQuery } from "@tanstack/react-query";

// export const useReviews = (type: string) => {
//   return useQuery<Review[]>({
//     queryKey: ["reviews", type], 
//     queryFn: () => fetchReviews(type),
//   });
// };
