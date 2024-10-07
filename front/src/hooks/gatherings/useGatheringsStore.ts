import { GatheringType } from "@/types/gatherings";
import { create } from "zustand";

interface GatheringsState {
  tab: GatheringType;
  setTab: (tab: GatheringType) => void;
}

export const useGatheringsStore = create<GatheringsState>((set) => ({
  tab: "DALLAEMFIT",
  setTab: (gatheringsType: GatheringType) => set({ tab: gatheringsType }),
}));
