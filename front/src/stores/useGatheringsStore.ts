import { create } from "zustand";
import {
  GatheringType,
  LocationType,
  SortByType,
  SortOrderType,
} from "@/types/gatherings";

interface GatheringsState {
  tab: GatheringType;
  setTab: (tab: GatheringType) => void;

  location: LocationType | undefined;
  setLocation: (location: LocationType | undefined) => void;

  date: Date | undefined;
  setDate: (date: Date | undefined) => void;

  sortBy: SortByType | undefined;
  setSortBy: (sortBy: SortByType | undefined) => void;

  sortOrder: SortOrderType | undefined;
  setSortOrder: (sortOrder: SortOrderType | undefined) => void;

  resetState: () => void;
}

export const useGatheringsStore = create<GatheringsState>((set) => ({
  tab: "DALLAEMFIT",
  setTab: (gatheringsType: GatheringType) => set({ tab: gatheringsType }),

  location: undefined,
  setLocation: (location: LocationType | undefined) => set({ location }),

  date: undefined,
  setDate: (date: Date | undefined) => set({ date }),

  sortBy: "dateTime",
  setSortBy: (sortBy: SortByType | undefined) => set({ sortBy }),

  sortOrder: "asc",
  setSortOrder: (sortOrder: SortOrderType | undefined) => set({ sortOrder }),

  resetState: () =>
    set({
      tab: "DALLAEMFIT",
      location: undefined,
      date: undefined,
      sortBy: "dateTime",
      sortOrder: "asc",
    }),
}));
