
export enum CardType {
  LOW_BAR_MIRACLE = 'LOW_BAR_MIRACLE',
  HIGH_STRENGTH = 'HIGH_STRENGTH',
  AIRING_GRIEVANCE = 'AIRING_GRIEVANCE',
  FEATS_OF_STRENGTH = 'FEATS_OF_STRENGTH',
  HUMAN_FUND = 'HUMAN_FUND'
}

export interface User {
  id: string;
  name: string;
  role: string;
  avatar: string;
  lastGrievance?: string;
}

export interface Post {
  id: string;
  from: User;
  to: User[];
  type: CardType;
  message: string;
  timestamp: string;
  likes: number;
  comments: number;
  meatloafCoins: number;
}
