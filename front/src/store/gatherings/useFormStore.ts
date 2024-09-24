import { create } from "zustand";
import { fieldOptions } from "@/types/options";

interface FormState {
  category: "project" | "study";
  title: string;
  connection: "online" | "offline" | "";
  description: string;
  day: string;
  time: string;
  field: string;
  participant: number;
  setCategory: (category: "project" | "study") => void;
  setTitle: (meetingName: string) => void;
  setConnection: (mode: "online" | "offline" | "") => void;
  setDescription: (description: string) => void;
  setDay: (day: string) => void;
  setTime: (time: string) => void;
  setField: (field: string) => void;
  setParticipant: (participant: number) => void;
}

const useFormStore = create<FormState>((set) => ({
  category: "project",
  title: "",
  connection: "",
  description: "",
  day: "",
  time: "",
  field: fieldOptions[0],
  participant: 1,
  setCategory: (category) => set({ category }),
  setTitle: (title) => set({ title }),
  setConnection: (connection) => set({ connection }),
  setDescription: (description) => set({ description }),
  setDay: (day) => set({ day: day }),
  setTime: (time) => set({ time: time }),
  setField: (field) => set({ field: field }),
  setParticipant: (particiapnt) => set({ participant: particiapnt }),
}));

export default useFormStore;
