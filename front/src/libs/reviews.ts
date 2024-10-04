import axiosInstance from "./axiosInstance"; 

export const fetchReviews = async (type: string | string[]) => {
  try {
    if (Array.isArray(type)) {
      const promises = type.map((type) => axiosInstance.get(`/reviews`, { params: { type: type } }));
      const responses = await Promise.all(promises);
      const combinedData = responses.flatMap((res) => res.data);

      return combinedData;
    } else {
      const res = await axiosInstance.get(`/reviews?type=${type}`);

      return res.data;
    }
  } catch (error) {
    throw new Error("Failed to fetch reviews");
  }
};
