import { create } from "zustand";
import { fieldOptions } from "@/types/options";

interface FormState {
  type: "project" | "study";
  title: string;
  connection: "online" | "offline" | "";
  description: string;
  day: string;
  time: string;
  field: string | undefined;
  participant: number;
  startDate: string;
  endDate: string;
  setType: (type: "project" | "study") => void;
  setTitle: (meetingName: string) => void;
  setConnection: (mode: "online" | "offline" | "") => void;
  setDescription: (description: string) => void;
  setDay: (day: string) => void;
  setTime: (time: string) => void;
  setField: (field: string) => void;
  setParticipant: (participant: number) => void;
  setStartDate: (startDate: string) => void;
  setEndDate: (endDate: string) => void;
}

const useFormStore = create<FormState>((set) => ({
  type: "project",
  title: "",
  connection: "",
  description: "",
  day: "",
  time: "",
  field: fieldOptions[0],
  participant: 1,
  startDate: "",
  endDate: "",
  setType: (type) => set({ type }),
  setTitle: (title) => set({ title }),
  setConnection: (connection) => set({ connection }),
  setDescription: (description) => set({ description }),
  setDay: (day) => set({ day: day }),
  setTime: (time) => set({ time: time }),
  setField: (field) => set({ field: field }),
  setParticipant: (particiapnt) => set({ participant: particiapnt }),
  setStartDate: (startDate) => set({ startDate: startDate }),
  setEndDate: (endDate) => set({ endDate: endDate }),
}));

export default useFormStore;
