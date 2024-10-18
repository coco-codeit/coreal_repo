import axiosInstance from "@/libs/axiosInstance";
import { UserProfileInterface } from "@/types/common";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface GetGatheringsJoinedProps {
  completed?: boolean; // 모임 이용 완료 여부로 필터링 (true일 경우 이용 완료한 모임만 조회)
  reviewed?: boolean; // 리뷰 작성 여부로 필터링 (true일 경우 리뷰 작성한 모임만 조회)
  limit?: number; // 조회할 모임 수
  offset?: number; // 조회 시작 위치
  sortBy?: "dateTime" | "registrationEnd" | "joinedAt"; // 정렬 기준
  sortOrder?: "asc" | "desc"; // 정렬 순서
}

export interface GatheringsJoinedReturn {
  teamId: number;
  id: number;
  type: string;
  name: string;
  dateTime: string;
  registrationEnd: string;
  location: string;
  participantCount: number;
  capacity: number;
  image: string;
  createdBy: number;
  canceledAt: string;
  joinedAt: string;
  isCompleted: true;
  isReviewed: true;
}

interface GetReviewsProps {
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
}
export const getUserProfile = async (): Promise<UserProfileInterface> => {
  return await axiosInstance
    .get(`${BASE_URL}/auths/user`)
    .then((res) => res.data);
};

export const updateUserProfile = async (payload: {
  companyName: string;
  image: File | string;
}) =>
  await await axiosInstance
    .put(`${BASE_URL}/auths/user`, payload, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => console.log(err));

export const getGatheringsJoined = async (
  option?: GetGatheringsJoinedProps,
): Promise<GatheringsJoinedReturn[]> => {
  const params = new URLSearchParams({ ...option } as Record<string, string>);
  return await axiosInstance
    .get(`${BASE_URL}/gatherings/joined${params.size > 0 ? `?${params}` : ""}`)
    .then((res) => res.data);
};

export const cancleGatheringJoined = async (gatheringId: number) =>
  await axiosInstance
    .delete(`${BASE_URL}/gatherings/${gatheringId}/leave`)
    .then((res) => res.data);

export const getGatheringCreatedByMe = async (id: number) => {
  return await axiosInstance
    .get(`${BASE_URL}/gatherings?createdBy=${id}`)
    .then((res) => res.data);
};

export const submitReview = async (payload: {
  gatheringId: string;
  score: number;
  comment: string;
}) =>
  await axiosInstance
    .post(`${BASE_URL}/reviews`, {
      ...payload,
    })
    .then((res) => res.data);

export const getReviews = async (option?: GetReviewsProps) => {
  const params = new URLSearchParams({ ...option } as Record<string, string>);
  return await axiosInstance
    .get(`${BASE_URL}/reviews${params.size > 0 ? `?${params}` : ""}`)
    .then((res) => res.data);
};
