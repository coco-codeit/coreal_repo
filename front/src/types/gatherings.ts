export type GatheringType =
  | "DALLAEMFIT"
  | "OFFICE_STRETCHING"
  | "MINDFULNESS"
  | "WORKATION";
export type LocationType = "건대입구" | "을지로3가" | "신림" | "홍대입구";
export type SortByType = "dateTime" | "registrationEnd" | "participantCount";
export type SortOrderType = "asc" | "desc";

export interface IGatherings {
  teamId: string;
  id: number;
  type: GatheringType;
  name: string;
  dateTime: string;
  registrationEnd: string;
  location: string;
  participantCount: number;
  capacity: number;
  image: string;
  createdBy: number;
  canceledAt: string | null;
}

export interface GatheringsUser {
  id: number;
  email: string;
  name: string;
  companyName: string;
  image: string;
}
export interface GatheringsParticipants {
  teamId: string;
  userId: number;
  gatheringId: number;
  joinAt: Date;
  User: GatheringsUser;
}

export interface ICreateGathering {
  name: string;
  location: string;
  type: string;
  dateTime: string;
  capacity: number;
  image: File;
  registrationEnd?: string;
}

export const createType = [
  { id: 1, tab: "달램핏", name: "오피스 스트레칭" },
  { id: 2, tab: "달램핏", name: "마인드풀니스" },
  { id: 3, tab: "워케이션", name: "워케이션" },
];

export const timeSlots = {
  morning: ["09:00", "10:00", "11:00"],
  afternoon: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
};

export const locations = ["건대입구", "을지로3가", "신림", "홍대입구"];

export interface UserRiveiw {
  pageId: number;
  offset: number;
  limit: number;
}
