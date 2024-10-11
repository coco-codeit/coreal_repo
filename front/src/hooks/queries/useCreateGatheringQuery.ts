import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGathering } from "@/libs/createGatheringApi";
import { ICreateGathering } from "@/types/gatherings";
import { useGatheringsStore } from "@/stores/useGatheringsStore";

export const useCreateGathering = () => {
  const queryClient = useQueryClient();

  const { tab, location, date, sortBy, sortOrder } = useGatheringsStore(
    (state) => ({
      tab: state.tab, // tab을 상태에서 가져옴
      location: state.location,
      date: state.date,
      sortBy: state.sortBy,
      sortOrder: state.sortOrder,
    }),
  );

  const type = tab;

  return useMutation<ICreateGathering, Error, ICreateGathering>({
    mutationFn: createGathering,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["gatherings", type, location, date, sortBy, sortOrder],
      });
    },
    onError: (error) => {
      console.error("모임 생성 중 에러 발생:", error.message);
    },
  });
};
