
import React from 'react';
import { CardType, User, Post } from './types';

export const CURRENT_USER: User = {
  id: 'u1',
  name: 'Artie Director',
  role: 'Vibe Architect',
  avatar: 'https://picsum.photos/seed/artie/100/100',
};

export const USERS: User[] = [
  { id: 'u2', name: 'Copywriter Cody', role: 'Punctuation Specialist', avatar: 'https://picsum.photos/seed/cody/100/100', lastGrievance: 'Jun 25, 2024' },
  { id: 'u3', name: 'Project Manager Pam', role: 'Cat Herder', avatar: 'https://picsum.photos/seed/pam/100/100', lastGrievance: 'Never' },
  { id: 'u4', name: 'CEO Frank', role: 'Head of Pole', avatar: 'https://picsum.photos/seed/frank/100/100', lastGrievance: 'May 28, 2024' },
  { id: 'u5', name: 'Intern Ian', role: 'Coffee Fetcher', avatar: 'https://picsum.photos/seed/ian/100/100', lastGrievance: 'Nov 1, 2024' },
  { id: 'u6', name: 'Laura', role: 'Lead Designer', avatar: 'https://picsum.photos/seed/laura/100/100' },
  { id: 'u7', name: 'Olivia', role: 'Operations', avatar: 'https://picsum.photos/seed/olivia/100/100' },
  { id: 'u8', name: 'Dave', role: 'Dev', avatar: 'https://picsum.photos/seed/dave/100/100' },
  { id: 'u9', name: 'Dan', role: 'Creative Director', avatar: 'https://picsum.photos/seed/dan/100/100' },
];

export const INITIAL_POSTS: Post[] = [
  {
    id: 'p4',
    from: { id: 'u6', name: 'Laura', role: 'Lead Designer', avatar: 'https://picsum.photos/seed/laura/100/100' },
    to: [{ id: 'u3', name: 'Project Manager Pam', role: 'Cat Herder', avatar: 'https://picsum.photos/seed/pam/100/100' }],
    type: CardType.AIRING_GRIEVANCE,
    message: "I got a lot of problems with you people! Expecting the design team to start on a campaign without a brief is like starting Festivus dinner without meatloaf. It's empty, confusing, and frankly, offensive.",
    timestamp: 'Just now',
    likes: 45,
    comments: 12,
    meatloafCoins: 0
  },
  {
    id: 'p1',
    from: { id: 'u5', name: 'Intern Ian', role: 'Coffee Fetcher', avatar: 'https://picsum.photos/seed/ian/100/100' },
    to: [{ id: 'u9', name: 'Dan', role: 'Creative Director', avatar: 'https://picsum.photos/seed/dan/100/100' }],
    type: CardType.LOW_BAR_MIRACLE,
    message: 'A Festivus Miracle! Dan submitted his timesheet before the Friday 5 PM deadline. I no longer have to fear the weekly passive-aggressive Teams from Finance.',
    timestamp: '2 minutes ago',
    likes: 14,
    comments: 2,
    meatloafCoins: 5
  },
  {
    id: 'p2',
    from: { id: 'u2', name: 'Copywriter Cody', role: 'Punctuation Specialist', avatar: 'https://picsum.photos/seed/cody/100/100' },
    to: [{ id: 'u3', name: 'Project Manager Pam', role: 'Cat Herder', avatar: 'https://picsum.photos/seed/pam/100/100' }],
    type: CardType.AIRING_GRIEVANCE,
    message: "I find tinsel distracting, but not as distracting as your request to 'make this copy more disruptive yet traditional' while keeping it under 20 characters.",
    timestamp: '15 minutes ago',
    likes: 8,
    comments: 5,
    meatloafCoins: 0
  },
  {
    id: 'p3',
    from: { id: 'u1', name: 'Artie Director', role: 'Vibe Architect', avatar: 'https://picsum.photos/seed/artie/100/100' },
    to: [{ id: 'strat', name: 'Strategy Team', role: 'Department', avatar: 'https://picsum.photos/seed/strategy/100/100' }],
    type: CardType.HIGH_STRENGTH,
    message: "My grievance is with the 40-page deck you sent for a single social media banner. I've seen aluminum poles with more personality and less fluff.",
    timestamp: '1 hour ago',
    likes: 22,
    comments: 3,
    meatloafCoins: 10
  }
];

export const POPULAR_POSTS: Post[] = [
  {
    id: 'pop1',
    from: { id: 'u6', name: 'Laura', role: 'Lead Designer', avatar: 'https://picsum.photos/seed/laura/100/100' },
    to: [{ id: 'team', name: 'The Entire Account Team', role: 'Department', avatar: 'https://picsum.photos/seed/accounts/100/100' }],
    type: CardType.AIRING_GRIEVANCE,
    message: 'I got a lot of problems with you people! If I see one more file named Final_Final_v3_REAL_FINAL_PRINT.psd I am going to scream. Learn to use version control or I will challenge you to the Feats of Strength right here in the open plan office.',
    timestamp: '3h ago',
    likes: 24,
    comments: 12,
    meatloafCoins: 50
  },
  {
    id: 'pop2',
    from: { id: 'u2', name: 'Copywriter Cody', role: 'Punctuation Specialist', avatar: 'https://picsum.photos/seed/cody/100/100' },
    to: [{ id: 'cs', name: 'Client Services', role: 'Department', avatar: 'https://picsum.photos/seed/clientservices/100/100' }],
    type: CardType.AIRING_GRIEVANCE,
    message: "Stop telling the client we can 'Make it pop.' Pop is not a design direction. Pop is a sound a balloon makes before it dies. You are setting us up for failure and I find your lack of pushback distracting.",
    timestamp: '5h ago',
    likes: 18,
    comments: 9,
    meatloafCoins: 25
  },
  {
    id: 'pop3',
    from: { id: 'u7', name: 'Olivia', role: 'Operations', avatar: 'https://picsum.photos/seed/olivia/100/100' },
    to: [{ id: 'u9', name: 'Dan', role: 'Creative Director', avatar: 'https://picsum.photos/seed/dan/100/100' }],
    type: CardType.LOW_BAR_MIRACLE,
    message: "It is literally a Festivus Miracle that you remembered to log your hours this week. Do not think this excuses the fact that you billed 4 hours to 'Ideation' while you were actually napping in the wellness room.",
    timestamp: '8h ago',
    likes: 33,
    comments: 4,
    meatloafCoins: 10
  },
  {
    id: 'pop4',
    from: { id: 'u8', name: 'Dave', role: 'Dev', avatar: 'https://picsum.photos/seed/dave/100/100' },
    to: [{ id: 'u3', name: 'Pam', role: 'Project Manager', avatar: 'https://picsum.photos/seed/pam/100/100' }],
    type: CardType.HIGH_STRENGTH,
    message: "You promised the client the website would have a 'high strength-to-weight ratio' and load in under 1 second. Then you asked me to add a 40MB video to the hero banner. My grievance is with your understanding of physics.",
    timestamp: '1d ago',
    likes: 15,
    comments: 6,
    meatloafCoins: 15
  }
];

export const Icons = {
  Pole: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="11" y="2" width="2" height="20" rx="1" fill="currentColor" />
    </svg>
  ),
  Grievance: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Miracle: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
    </svg>
  )
};
