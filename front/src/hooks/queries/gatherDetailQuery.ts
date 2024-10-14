import {
  cancelCreateGather,
  getGatherDetail,
  getGatherJoined,
  getGatherParticipants,
  postJoinGather,
  putCancelJoinGather,
} from "@/libs/gatherDetail";
import useAuthStore from "@/stores/useAuthStore";
import { useToastStore } from "@/stores/useToastStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGatherDeatilQuery = (gatherId: string) => {
  return useQuery({
    queryKey: ["gatherDetail", gatherId],
    queryFn: () => getGatherDetail(gatherId),
  });
};

export const useGatherParticipants = (gatherId: string, limit: number) => {
  return useQuery({
    queryKey: ["gatherParticipants", gatherId, limit],
    queryFn: () => getGatherParticipants(gatherId, limit),
    enabled: !!limit,
  });
};

export const useGetJoinedGathers = () => {
  const { isLoggedIn } = useAuthStore();
  return useQuery({
    queryKey: ["joined1Gather"],
    queryFn: () => getGatherJoined(),
    enabled: isLoggedIn,
  });
};

const useGatherMutation = (
  gatherId: string,
  mutationFn: (gatherId: string) => Promise<unknown>,
  toastText: string,
) => {
  const queryClient = useQueryClient();
  const { showToast } = useToastStore();
  return useMutation({
    mutationFn: () => mutationFn(gatherId),
    onSuccess: () => {
      showToast(toastText, "success");
      queryClient.invalidateQueries({
        queryKey: ["gatherDetail", gatherId],
      });
      queryClient.invalidateQueries({
        queryKey: ["gatherParticipants", gatherId],
      });
      queryClient.invalidateQueries({
        queryKey: ["joined1Gather"],
      });
    },
    onError: () => {
      showToast("에러가 발생했습니다", "error");
    },
  });
};

export const useGatherJoin = (gatherId: string) => {
  return useGatherMutation(gatherId, postJoinGather, "모임에 참여하였습니다.");
};
export const useGatherjoinCancel = (gatherId: string) => {
  return useGatherMutation(
    gatherId,
    putCancelJoinGather,
    "모임 참여를 취소하였습니다.",
  );
};

export const useCreateCancel = (gatherId: string) => {
  return useGatherMutation(
    gatherId,
    cancelCreateGather,
    "모임을 삭제하였습니다",
  );
};
