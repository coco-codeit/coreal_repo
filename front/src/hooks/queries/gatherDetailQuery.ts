import {
  getGatherDetail,
  getGatherParticipants,
  postJoinGather,
  putCancelGather,
} from "@/libs/gatherDetail";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGatherDeatilQuery = (gatherId: string) => {
  return useQuery({
    queryKey: ["gatherDetail"],
    queryFn: () => getGatherDetail(gatherId),
  });
};

export const useGatherParticipants = (gatherId: string) => {
  return useQuery({
    queryKey: ["gatherParticipants"],
    queryFn: () => getGatherParticipants(gatherId),
  });
};

//공통으로 사용가능한지 검토
const useGatherMutation = (
  gatherId: string,
  mutationFn: (gatherId: string) => Promise<unknown>,
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => mutationFn(gatherId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["gatherDetail"] }),
  });
};

export const useGatherJoinMutation = (gatherId: string) => {
  return useGatherMutation(gatherId, postJoinGather);
};

export const useGatherCancelMutation = (gatherId: string) => {
  return useGatherMutation(gatherId, putCancelGather);
};

// export const useGatherJoinMutaiton = (gatherId: string) => {
//   const queryClient = useQueryClient();
//   useMutation({
//     mutationFn: () => postJoinGather(gatherId),
//     onSuccess: () =>
//       queryClient.invalidateQueries({ queryKey: ["gatherDetail"] }),
//   });
// };

// export const useGatherCancelMutation = (gatherId: string) => {
//   const queryClient = useQueryClient();
//   useMutation({
//     mutationFn: () => putCancelGather(gatherId),
//     onSuccess: () =>
//       queryClient.invalidateQueries({ queryKey: ["gatherDetail"] }),
//   });
// };
