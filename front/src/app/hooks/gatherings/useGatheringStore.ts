import { fetchGatherings } from "@/apis/gatherings";
import { GatheringType, Gatherings } from "@/app/types/gatherings";
import { create } from "zustand";

interface GatheringState {
  tab: GatheringType;
  gatherings: Gatherings[];
  setTab: (tab: GatheringType) => void;
  getGatherings: (gatheringType: GatheringType) => Promise<void>;
}

export const useGatheringStore = create<GatheringState>((set) => ({
  tab: "DALLAEMFIT",
  gatherings: [],

  setTab: (gatheringsType: GatheringType) => set({ tab: gatheringsType }),

  getGatherings: async (gatheringType: GatheringType) => {
    try {
      const response = await fetchGatherings(gatheringType);
      set({ gatherings: response });
    } catch (error) {
      console.error("Error fetching gatherings:", error);
    }
  },
}));
