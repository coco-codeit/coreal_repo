import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGathering } from "@/libs/createGatheringApi";
import { ICreateGathering } from "@/types/gatherings";
import { useGatheringsStore } from "@/stores/useGatheringsStore";
import { useToastStore } from "@/stores/useToastStore";

export const useCreateGathering = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToastStore();

  const { tab, location, date, sortBy, sortOrder } = useGatheringsStore(
    (state) => ({
      tab: state.tab,
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
      showToast("모임이 생성되었습니다!", "success");
      queryClient.invalidateQueries({
        queryKey: ["gatherings", type, location, date, sortBy, sortOrder],
      });
    },
    onError: () => {
      showToast("모임 생성 중 문제가 발생했습니다.", "error");
    },
  });
};
