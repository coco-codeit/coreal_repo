import {
  cancelCreateGather,
  getGatherDetail,
  getGatherJoined,
  getGatherParticipants,
  postJoinGather,
  putCancelJoinGather,
} from "@/libs/gatherDetail";
import useAuthStore from "@/stores/useAuthStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGatherDeatilQuery = (gatherId: string) => {
  return useQuery({
    queryKey: ["gatherDetail", gatherId],
    queryFn: () => getGatherDetail(gatherId),
  });
};

export const useGatherParticipants = (gatherId: string) => {
  return useQuery({
    queryKey: ["gatherParticipants", gatherId],
    queryFn: () => getGatherParticipants(gatherId),
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
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => mutationFn(gatherId),
    onSuccess: () => {
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
  });
};

export const useGatherJoin = (gatherId: string) => {
  return useGatherMutation(gatherId, postJoinGather);
};
export const useGatherjoinCancel = (gatherId: string) => {
  return useGatherMutation(gatherId, putCancelJoinGather);
};

export const useCreateCancel = (gatherId: string) => {
  return useGatherMutation(gatherId, cancelCreateGather);
};
