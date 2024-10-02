// const BASE_URL = process.env.NEXT_PUBLIC_API;
const BASE_URL = process.env.NEXT_PUBLIC_TEST_API;
const TEAM_ID = 1;
const token = "";

const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
});

export const getUserProfile = async () => {
  try {
    return await fetch(`${BASE_URL}/${TEAM_ID}/auths/user`, {
      headers,
    }).then((res) => res.json());
  } catch {
    // throw Error("유저 데이터를 가져오는데 실패했어요.");
  }
};

export const updateUserProfile = async (payload: {
  companyName: string;
  image: string;
}) => {
  console.log("request");
  try {
    return await fetch(`${BASE_URL}/${TEAM_ID}/auths/user`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  } catch {
    // throw Error("유저 데이터를 가져오는데 실패했어요.");
  }
};

export const getGatheringsJoined = async (option?: {
  completed?: boolean; // 모임 이용 완료 여부로 필터링 (true일 경우 이용 완료한 모임만 조회)
  reviewed?: boolean; // 리뷰 작성 여부로 필터링 (true일 경우 리뷰 작성한 모임만 조회)
  limit?: number; // 조회할 모임 수
  offset?: number; // 조회 시작 위치
  sortBy?: "dateTime" | "registrationEnd" | "joinedAt"; // 정렬 기준
  sortOrder?: "asc" | "desc"; // 정렬 순서
}) => {
  const params = new URLSearchParams({ ...option } as Record<string, string>);

  try {
    return await fetch(
      `${BASE_URL}/${TEAM_ID}/gatherings/joined${params.size > 0 ? `?${params}` : ""}`,
      {
        headers,
      },
    ).then((res) => res.json());
  } catch {
    // throw Error("나의 모임 리스트를 가져오는데 실패했어요.");
  }
};

export const getGatherings = async (option?: { createdBy: number }) => {
  const params = new URLSearchParams({ ...option } as Record<string, string>);

  try {
    return await fetch(
      `${BASE_URL}/${TEAM_ID}/gatherings${params.size > 0 ? `?${params}` : ""}`,
      {
        headers,
      },
    ).then((res) => res.json());
  } catch {
    // throw Error("나의 모임 리스트를 가져오는데 실패했어요.");
  }
};

export const submitReview = async (payload: {
  gatheringId: string;
  score: string;
  comment: string;
}) => {
  try {
    return await fetch(`${BASE_URL}/${TEAM_ID}/reviews`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  } catch {
    // throw Error("리뷰 작성에 실패했어요.");
  }
};

export const getReviews = async (option?: {
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
  const params = new URLSearchParams({ ...option } as Record<string, string>);
  try {
    return await fetch(
      `${BASE_URL}/${TEAM_ID}/reviews${params.size > 0 ? `?${params}` : ""}`,
      {
        headers,
      },
    ).then((res) => res.json());
  } catch {
    // throw Error("리뷰 작성에 실패했어요.");
  }
};

export const cancleGathering = async (gatheringId: number) => {
  try {
    return await fetch(
      `${BASE_URL}/${TEAM_ID}/gatherings/${gatheringId}/leave`,
      { headers, method: "DELETE" },
    ).then((res) => res.json());
  } catch {
    // throw Error("모임 참여 취소에 실패했어요.");
  }
};
