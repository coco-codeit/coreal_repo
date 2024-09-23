import { create } from "zustand";

interface DropdownState {
  activeDropdown: "all" | "study" | "project";
  setActiveDropdown: (value: "all" | "study" | "project") => void;
}

export const useDropdownStore = create<DropdownState>((set) => ({
  activeDropdown: "all",
  setActiveDropdown: (value) => set({ activeDropdown: value }),
}));
