import { getGatheringList } from "@/libs/gatheringList";
import { useQuery } from "@tanstack/react-query";

export const useListQuery = () => {
  return useQuery({
    queryKey: ["list"],
    queryFn: () => getGatheringList(),
  });
};
