export const fetchReviews = async (teamId: number, type: string) => {
  const response = await fetch(
    `https://fe-adv-project-together-dallaem.vercel.app/${teamId}/reviews?type=${type}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return response.json();
};

// import axiosInstance from "./axiosInstance"; 

// export const fetchReviews = async (type: string) => {
//   try {
//     const res = await axiosInstance.get(`/reviews`, {
//       params: { type }, 
//     });

//     console.log("Axios 응답값 받아와?:", res);

//     return res.data; 
//   } catch (error) {
//     throw new Error("Failed to fetch reviews");
//   }
// };

// import axiosInstance from "./axiosInstance"; 

// export const fetchReviews = async (type: string) => {
//   try {
//     console.log("보내는 type 값:", type);

//     const res = await axiosInstance.get(`/reviews`, {
//       params: { type },
//     });

//     console.log("Axios 응답값 받아와?:", res);

//     return res.data;
//   } catch (error) {
//     console.error("에러 발생:", error);
//     throw new Error("Failed to fetch reviews");
//   }
// };
