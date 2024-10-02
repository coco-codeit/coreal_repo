export interface GatheringInterface {
  teamId: number;
  id: number;
  type: string;
  name: string;
  dateTime: string;
  location: string;
  image: string;
}
export interface ExtendedGatheringInterface extends GatheringInterface {
  participantCount: number;
  capacity: number;
  createdBy: number;
  canceledAt: string;
  joinedAt: string;
  isCompleted: true;
  isReviewed: true;
}
export interface UserProfileInterface {
  teamId: number;
  id: number;
  email: string;
  name: string;
  companyName: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
