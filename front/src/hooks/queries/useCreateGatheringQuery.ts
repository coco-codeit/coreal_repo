import { useMutation } from "@tanstack/react-query";
import { createGathering } from "@/libs/createGatheringApi";

//TODO: 에러핸들링 추가

export const useCreateGathering = () => {
  return useMutation({
    mutationFn: createGathering,
    onSuccess: (data) => {
      console.log("모임 생성 성공:", data);
    },
    onError: (error) => {
      console.error("모임 생성 실패:", error);
    },
  });
};
