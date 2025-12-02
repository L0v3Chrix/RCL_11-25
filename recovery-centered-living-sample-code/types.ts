// Enums
export enum HouseType {
  MEN = 'Men',
  WOMEN = 'Women'
}

export enum AvailabilityStatus {
  AVAILABLE = 'Available',
  WAITLIST = 'Waitlist',
  FULL = 'Full'
}

// Interfaces
export interface House {
  id: string;
  name: string;
  location: string;
  type: HouseType;
  bedsAvailable: number;
  status: AvailabilityStatus;
  price: number;
  image: string;
  features: string[];
  managerName: string;
  managerQuote: string;
  description?: string;
  gallery?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  details: string; // e.g., "2 years sober"
  image?: string;
}

export interface IntakeFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  houseType: HouseType | '';
  urgency: string;
  sobrietyDate: string;
  hasInsurance: boolean;
  referralSource: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}