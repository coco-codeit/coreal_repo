import {
  cancleGatheringJoined,
  getGatheringCreatedByMe,
  getGatheringsJoined,
  getReviews,
  getUserProfile,
} from "@/apis/profile";
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGatherJoined = (option?: {
  completed?: boolean; // 모임 이용 완료 여부로 필터링 (true일 경우 이용 완료한 모임만 조회)
  reviewed?: boolean; // 리뷰 작성 여부로 필터링 (true일 경우 리뷰 작성한 모임만 조회)
  limit?: number; // 조회할 모임 수
  offset?: number; // 조회 시작 위치
  sortBy?: "dateTime" | "registrationEnd" | "joinedAt"; // 정렬 기준
  sortOrder?: "asc" | "desc"; // 정렬 순서
}): UseQueryResult => {
  return useQuery({
    queryKey: ["gatherJoined"],
    queryFn: () => getGatheringsJoined({ ...option }),
  });
};

export const useGatherCreated = (id: number | undefined): UseQueryResult => {
  return useQuery({
    queryKey: ["gatherCreated"],
    queryFn: () => id !== undefined && getGatheringCreatedByMe(id),
  });
};

export const useCancelGatherJoined = () => {
  return useMutation({
    mutationFn: (id: number) => {
      console.log("삭제 완료");
      return cancleGatheringJoined(id);
    },
  });
};

export const useMyReviews = (opt?: {
  gatheringId?: number;
  userId?: number;
  type?: string;
  location?: string;
  date?: string;
  registrationEnd?: string;
  sortBy?: "createdAt" | "score" | "participantCount";
  sortOrder?: "asc" | "desc";
  limit?: number;
  offset?: number;
}) => {
  return useQuery({
    queryKey: ["myReviews"],
    queryFn: () => getReviews(opt),
  });
};

export const useUserProfile = () => {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: () => getUserProfile(),
  });
};
