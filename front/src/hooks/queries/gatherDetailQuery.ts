import { getGatherDetail } from "@/libs/gatherDetail";
import { useQuery } from "@tanstack/react-query";

export const useGatherDeatilQuery = (gatherId: string) => {
  return useQuery({
    queryKey: ["gatherDetail"],
    queryFn: () => getGatherDetail(gatherId),
  });
};
