export interface UserProfileInterface {
  id: number;
  username: string;
  nickname: string;
  profileImage: string;
  temperature: number;
  techStacks: string[];
  evaluations: string[];
  gatheringStudy: string[];
  gatheringProject: string[];
  owner: boolean;
}

export interface UserGatheringInterface {
  id: number;
  gatheringImg: string;
  gatheringName: string;
  description: string;
  techStacks: string[];
}

export interface GatheringItemInterface {
  type?: string; // api에 타입이 존재하지 않음 => 말해야함
  id: number;
  gatheringName: string;
  gatheringOwner: string;
  startDate: string;
  endDate: string;
  month: string;
  time: string;
  stacks: string[];
  image: string;
  progress: string;
  totalCapacity: number;
  currentCapacity: number;
}
