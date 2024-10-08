import axiosInstance from "./axiosInstance";

interface ReviewArgs {
  gatherId?: string;
  type?: string | string[];
  location?: string;
  sortBy?: string;
}

export const fetchReviews = async ({
  gatherId,
  type,
  location,
  sortBy,
}: ReviewArgs) => {
  const queryParams = new URLSearchParams();

  if (gatherId) queryParams.append("gatheringId", gatherId);
  if (location) queryParams.append("location", location);
  if (sortBy) queryParams.append("sortBy", sortBy);

  if (type) {
    if (Array.isArray(type)) {
      if (Array.isArray(type)) {
        const promises = type.map((singleType) =>
          axiosInstance.get(`/reviews`, {
            params: { ...Object.fromEntries(queryParams), type: singleType },
          })
        );

        const responses = await Promise.all(promises);
        const combinedData = responses.flatMap((res) => res.data);
        return combinedData;
      }
    } else {
      queryParams.append("type", type);
    }
  }

  const res = await axiosInstance.get(`/reviews?${queryParams.toString()}`);
  return res.data;
};
