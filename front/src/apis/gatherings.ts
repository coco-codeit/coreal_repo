import { GatheringType } from "@/types/gatherings";
import axios from "axios";

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
