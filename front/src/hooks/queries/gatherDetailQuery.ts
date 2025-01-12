import {
  cancelCreateGather,
  getGatherDetail,
  getGatherJoined,
  getGatherParticipants,
  getUserReviews,
  postJoinGather,
  putCancelJoinGather,
} from "@/libs/gatherDetail";
import useAuthStore from "@/stores/useAuthStore";
import { useToastStore } from "@/stores/useToastStore";
import { UserRiveiw } from "@/types/gatherings";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export const useGatherDeatilQuery = (gatherId: number) => {
  return useQuery({
    queryKey: ["gatherDetail", gatherId],
    queryFn: () => getGatherDetail(gatherId),
  });
};

export const useGatherParticipants = (gatherId: number, limit: number) => {
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
  gatherId: number,
  mutationFn: (gatherId: number) => Promise<unknown>,
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

export const useGatherJoin = (gatherId: number) => {
  return useGatherMutation(gatherId, postJoinGather, "모임에 참여하였습니다.");
};
export const useGatherjoinCancel = (gatherId: number) => {
  return useGatherMutation(
    gatherId,
    putCancelJoinGather,
    "모임 참여를 취소하였습니다.",
  );
};

export const useCreateCancel = (gatherId: number) => {
  return useGatherMutation(
    gatherId,
    cancelCreateGather,
    "모임을 삭제하였습니다",
  );
};

export const useGatherReview = ({ pageId, offset, limit }: UserRiveiw) => {
  return useQuery({
    queryKey: ["gatherReview", pageId, offset, limit],
    queryFn: () => getUserReviews({ pageId, offset, limit }),
  });
};

export const prefetchGatherReview = async (
  queryClient: QueryClient,
  { pageId, offset, limit }: UserRiveiw,
) => {
  await queryClient.prefetchQuery({
    queryKey: ["gatherReview", pageId, offset, limit],
    queryFn: () => getUserReviews({ pageId, offset, limit }),
  });
};
