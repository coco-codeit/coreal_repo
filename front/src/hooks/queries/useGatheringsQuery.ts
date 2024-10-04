import { useGatheringsStore } from "@/hooks/gatherings/useGatheringsStore";
import { getGatheringList } from "@/libs/gatheringList";
import { useQuery } from "@tanstack/react-query";

export const useListQuery = () => {
  const { tab } = useGatheringsStore();

  return useQuery({
    queryKey: ["gatheringList", tab],
    queryFn: () => getGatheringList(tab),
  });
};
