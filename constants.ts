
import { Step, FloatingElement } from './types';

export const REWARD_STEPS: Step[] = [
  { id: 1, text: 'Click the "Start Review" button' },
  { id: 2, text: 'Enter your email and basic details' },
  { id: 3, text: 'Answer the required questions' },
  { id: 4, text: 'Complete 3-5 partner offers' },
  { id: 5, text: 'Receive your STARBUCKS gift card' },
];

export const BACKGROUND_ELEMENTS: FloatingElement[] = [
  {
    id: 1,
    src: 'https://i.ibb.co/JX1hwPh/decor-1-Caaj0-E8-W.png', // Decor 1
    alt: 'Holiday Decoration 1',
    width: 'w-24',
    mobileWidth: 'w-16',
    position: { top: '12%', left: '5%' },
    animationDelay: '0s',
    animationDuration: '18s',
    animationType: 'float',
  },
  {
    id: 2,
    src: 'https://i.ibb.co/m5rDH8HG/decor-2-Cet-U2-CYt.png', // Decor 2
    alt: 'Holiday Decoration 2',
    width: 'w-28',
    mobileWidth: 'w-10', // Reduced from w-18 to w-10 for mobile
    position: { top: '20%', right: '8%' },
    animationDelay: '1s',
    animationDuration: '20s',
    animationType: 'float-delayed',
  },
  {
    id: 3,
    src: 'https://i.ibb.co/DDXQj3BM/decor-3-Bvv-ZHx-Fy.png', // Decor 3
    alt: 'Holiday Decoration 3',
    width: 'w-20',
    mobileWidth: 'w-14',
    position: { top: '45%', left: '8%' },
    animationDelay: '2s',
    animationDuration: '16s',
    animationType: 'float-slow',
  },
  {
    id: 4,
    src: 'https://i.ibb.co/M5QBwBN0/decor-4-DPs-KH9-Qd.png', // Decor 4
    alt: 'Holiday Decoration 4',
    width: 'w-26',
    mobileWidth: 'w-16',
    position: { top: '55%', right: '5%' },
    animationDelay: '0.5s',
    animationDuration: '19s',
    animationType: 'float',
  },
  {
    id: 5,
    src: 'https://i.ibb.co/Gf32ZDnp/decor-5-Bu5-L8-Uk-G.png', // Decor 5
    alt: 'Holiday Decoration 5',
    width: 'w-22',
    mobileWidth: 'w-14',
    position: { bottom: '15%', left: '12%' },
    animationDelay: '1.5s',
    animationDuration: '17s',
    animationType: 'float-delayed',
  },
  {
    id: 6,
    src: 'https://i.ibb.co/23SK94BD/decor-6-DHDn4-Wgt.png', // Decor 6
    alt: 'Holiday Decoration 6',
    width: 'w-24',
    mobileWidth: 'w-16',
    position: { bottom: '12%', right: '15%' },
    animationDelay: '2.5s',
    animationDuration: '21s',
    animationType: 'float-slow',
  },
];
