const BASE_URL = process.env.NEXT_PUBLIC_TEST_API as string;

const getMyStudyInfo = async (id: number | string) => {
  const url = `${BASE_URL}/auth/reviews/studyList?id=${id}`;
  // const url = BASE_URL + "/reviews/list/1";
  return await fetch(url).then((response) => {
    if (response.ok) return response.json();
  });
};

export { getMyStudyInfo };
