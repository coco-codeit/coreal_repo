import { GatheringType } from "@/types/gatherings";
import { create } from "zustand";

interface GatheringState {
  tab: GatheringType;
  setTab: (tab: GatheringType) => void;
}

export const useGatheringStore = create<GatheringState>((set) => ({
  tab: "DALLAEMFIT",
  setTab: (gatheringsType: GatheringType) => set({ tab: gatheringsType }),
}));
