import { create } from "zustand";

interface CreateGatheringStore {
  location: string;
  type: string;
  dateTime: string;
  image: File | null;
  registrationEnd?: string;
  setLocation: (location: string) => void;
  setType: (type: string) => void;
  setDateTime: (dateTime: string) => void;
  setImage: (image: File) => void;
  setRegistrationEnd: (registrationEnd: string) => void;
  resetModal: () => void;
}

export const useCreateGatheringStore = create<CreateGatheringStore>((set) => ({
  location: "",
  type: "",
  dateTime: "",
  image: null,
  registrationEnd: "",
  setLocation: (location) => set({ location }),
  setType: (type) => set({ type }),
  setDateTime: (dateTime) => set({ dateTime }),
  setImage: (image) => set({ image }),
  setRegistrationEnd: (registrationEnd) => set({ registrationEnd }),
  resetModal: () =>
    set({
      location: "",
      type: "",
      dateTime: "",
      image: null,
      registrationEnd: "",
    }),
}));
