import { create } from "zustand";

interface LoadingState {
  gatheringLoading: boolean;
  commentsLoading: boolean;
  setGatheringLoading: (loading: boolean) => void;
  setCommentsLoading: (loading: boolean) => void;
}

export const useDetailLoadingStore = create<LoadingState>((set) => ({
  gatheringLoading: false,
  commentsLoading: false,
  setGatheringLoading: (loading: boolean) => set({ gatheringLoading: loading }),
  setCommentsLoading: (loading: boolean) => set({ commentsLoading: loading }),
}));
