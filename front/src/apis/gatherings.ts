import { GatheringType } from "@/app/types/gatherings";
import axios from "axios";
import api from ".";

const base_url = "https://fe-adv-project-together-dallaem.vercel.app/1";

export const fetchGatherings = async (gatheringType: GatheringType) => {
  try {
    const response = await axios.get(`${base_url}/gatherings`, {
      params: { type: gatheringType },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getList = async () => {
  const res = await api.get("/reviews?gatheringId=1112&limit=10");

  return res;
};
