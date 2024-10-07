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
