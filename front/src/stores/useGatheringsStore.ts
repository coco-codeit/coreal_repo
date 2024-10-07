import { create } from "zustand";
import {
  GatheringType,
  LocationType,
  SortByType,
  SortOrderType,
} from "@/types/gatherings";

interface GatheringsState {
  // 탭 필터, 기본값 DALLAEMFIT
  tab: GatheringType;
  setTab: (tab: GatheringType) => void;
  // 위치필터
  location: LocationType | undefined;
  setLocation: (location: LocationType | undefined) => void;
  // 날짜필터
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  // 참여인원순, 마감임박 정렬
  sortBy: SortByType | undefined;
  setSortBy: (sortBy: SortByType | undefined) => void;
  // 오름차순, 내림차순
  sortOrder: SortOrderType | undefined;
  setSortOrder: (sortOrder: SortOrderType | undefined) => void;
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
}));
