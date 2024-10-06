import { useQuery } from "@tanstack/react-query";
import { getGatheringList } from "@/apis/gatheringsApi";

export const useGatheringsQuery = () => {
  return useQuery({
    queryKey: ["gatherings"],
    queryFn: () => getGatheringList(),
  });
};
