
export interface Step {
  id: number;
  text: string;
}

export interface FloatingElement {
  id: number;
  src: string;
  alt: string;
  width: string; // Tailwind width class (e.g., w-16)
  mobileWidth: string; // Tailwind width class for mobile
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  animationDelay: string;
  animationDuration: string;
  animationType: 'float' | 'float-delayed' | 'float-slow';
}
