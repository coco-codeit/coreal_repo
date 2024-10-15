import axiosInstance from "@/libs/axiosInstance";
import { ICreateGathering } from "@/types/gatherings";

export const createGathering = async (data: ICreateGathering) => {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("location", data.location);
  formData.append("type", data.type);
  formData.append("dateTime", data.dateTime);
  formData.append("capacity", data.capacity.toString());
  formData.append("image", data.image);

  if (data.registrationEnd) {
    formData.append("registrationEnd", data.registrationEnd);
  }

  const res = await axiosInstance.post(`/gatherings`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};
