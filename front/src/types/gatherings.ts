export type GatheringType =
  | "DALLAEMFIT"
  | "OFFICE_STRETCHING"
  | "MINDFULNESS"
  | "WORKATION";

export interface Gatherings {
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
