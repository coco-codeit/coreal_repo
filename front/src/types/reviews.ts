export interface Review {
  teamId: number;
  id: number;
  score: number;
  comment: string;
  createdAt: string;
  Gathering: Gathering;
  User: User;
  type?: string | string[];
}

export interface ReviewArgs {
  type?: string | string[];
  gatherId?: string;
  location?: string;
  sortBy?: string;
  date?: string;
  limit?: number;
  offset?: number;
}

export interface Gathering {
  teamId: number;
  id: number;
  type: string;
  name: string;
  dateTime: string;
  location: string;
  image: string;
}

export interface User {
  teamId: number;
  id: number;
  name: string;
  image: string;
}
