const BASE_URL = process.env.NEXT_PUBLIC_TEST_API as string;

export const getUserProfile = async (id: number | string) => {
  try {
    const url = `${BASE_URL}/user/${id}/profile`;
    return await fetch(url)
      .then((res) => res.json())
      .then((data) => data.data);
  } catch {
    throw Error("apis/profile.ts => getGatherings api 요청 실패");
  }
};

export const getGatherings = async (select: string) => {
  try {
    const url = `${BASE_URL}/user/gathering?type=${select}`;
    return await fetch(url)
      .then((res) => res.json())
      .then((data) => data.data);
  } catch {
    throw Error("apis/profile.ts => getGatherings api 요청 실패");
  }
};

export const getReviewsById = async (id: number | string) => {
  const mockData = [
    {
      id: "유저1",
      nickname: "유저1",
      imgUrl: "",
      comment_by_opp: {
        // 상대가 작성한 나에 대한 리뷰
        created: "2020-12-20 15:34:20",
        updated: "2020-12-20 15:34:20",
        comments: [
          "약속을 잘 지켜요",
          "피드백이 빨라요",
          "커뮤니케이션이 잘 돼요",
          "시간 약속을 잘 지켜요",
          "아이디어가 좋아요",
        ],
      },
      comment_by_me: {
        // 내가 작성한 상대에 대한 리뷰
        created: "2020-12-20 15:34:20",
        updated: "2020-12-20 15:34:20",
        comments: [
          "커뮤니케이션이 잘 돼요",
          "시간 약속을 잘 지켜요",
          "아이디어가 좋아요",
        ],
      },
    },
    {
      id: "유저2",
      nickname: "유저2",
      imgUrl: "", // 프로필 이미지
      comment_by_opp: null, // 상대가 아직 나에게 리뷰를 작성하지 않은 경우
      comment_by_me: null, // 내가 아직 상대에게 리뷰를 작성하지 않은 경우
    },
  ];
  try {
    // const url = `${BASE_URL}/gathering/${id}/review`;
    console.log(id);
    return [...mockData];
    // const data = await fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => data.data);
  } catch {
    throw Error("apis/profile.ts => getReviewsById api 요청 실패");
  }
};
