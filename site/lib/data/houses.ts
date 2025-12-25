export type HouseAvailability = 'available' | 'waitlist' | 'full';

export interface House {
  id: string;
  name: string;
  displayName: string;
  type: 'mens' | 'womens';
  location: 'south' | 'north' | 'pflugerville';
  neighborhood: string;
  capacity: number;
  currentOccupancy: number;
  availability: HouseAvailability;
  amenities: string[];
  highlights: string[];
  images: {
    main: string;
    gallery: string[];
  };
  pricing: {
    weekly: number;
    monthly: number;
    deposit: number;
  };
  bedCount: number;
  hasParking: boolean;
  parkingInfo: string;
}

export const houses: House[] = [
  // RCL One - Men's - North Austin/Domain
  {
    id: 'rcl-one',
    name: 'RCL One',
    displayName: "RCL One (Men's House)",
    type: 'mens',
    location: 'north',
    neighborhood: 'Domain Area',
    capacity: 6,
    currentOccupancy: 5,
    availability: 'available',
    amenities: [
      'Shared Kitchen',
      'Living Room',
      'Backyard',
      'Washer/Dryer',
      'WiFi',
      'Parking',
      'AC/Heat',
    ],
    highlights: [
      'Near Domain shopping & dining',
      'Close to recovery meetings',
      'Quiet residential area',
      'Easy highway access',
    ],
    images: {
      main: '/images/houses/rcl-one.jpg',
      gallery: [],
    },
    pricing: {
      weekly: 175,
      monthly: 700,
      deposit: 350,
    },
    bedCount: 6,
    hasParking: true,
    parkingInfo: 'Street parking available',
  },

  // RCL Two - Men's - North Austin/Domain
  {
    id: 'rcl-two',
    name: 'RCL Two',
    displayName: "RCL Two (Men's House)",
    type: 'mens',
    location: 'north',
    neighborhood: 'Domain Area',
    capacity: 6,
    currentOccupancy: 6,
    availability: 'waitlist',
    amenities: [
      'Shared Kitchen',
      'Living Room',
      'Backyard',
      'Washer/Dryer',
      'WiFi',
      'Parking',
      'AC/Heat',
    ],
    highlights: [
      'Near Domain shopping & dining',
      'Walking distance to RCL One',
      'Strong brotherhood community',
      'Close to employment centers',
    ],
    images: {
      main: '/images/houses/rcl-two.jpg',
      gallery: [],
    },
    pricing: {
      weekly: 175,
      monthly: 700,
      deposit: 350,
    },
    bedCount: 6,
    hasParking: true,
    parkingInfo: 'Driveway parking',
  },

  // RCL Three - Women's - Palmer/McNeil
  {
    id: 'rcl-three',
    name: 'RCL Three',
    displayName: "RCL Three (Women's House)",
    type: 'womens',
    location: 'north',
    neighborhood: 'Palmer & McNeil',
    capacity: 6,
    currentOccupancy: 4,
    availability: 'available',
    amenities: [
      'Shared Kitchen',
      'Living Room',
      'Garden Space',
      'Washer/Dryer',
      'WiFi',
      'Parking',
      'AC/Heat',
      'Outdoor Patio',
    ],
    highlights: [
      'Peaceful residential setting',
      'Beautiful garden space',
      'Supportive sisterhood environment',
      'Near yoga studios & wellness centers',
    ],
    images: {
      main: '/images/houses/rcl-three.jpg',
      gallery: [],
    },
    pricing: {
      weekly: 175,
      monthly: 700,
      deposit: 350,
    },
    bedCount: 6,
    hasParking: true,
    parkingInfo: 'Street parking available',
  },

  // RCL Four - Men's - Pflugerville
  {
    id: 'rcl-four',
    name: 'RCL Four',
    displayName: "RCL Four (Men's House)",
    type: 'mens',
    location: 'pflugerville',
    neighborhood: 'Pflugerville',
    capacity: 8,
    currentOccupancy: 7,
    availability: 'available',
    amenities: [
      'Shared Kitchen',
      'Living Room',
      'Large Backyard',
      'Washer/Dryer',
      'WiFi',
      'Parking',
      'AC/Heat',
      'Fire Pit',
    ],
    highlights: [
      'Spacious two-story home',
      'Large yard for gatherings',
      'Family-friendly neighborhood',
      'More affordable living',
    ],
    images: {
      main: '/images/houses/rcl-four.jpg',
      gallery: [],
    },
    pricing: {
      weekly: 165,
      monthly: 660,
      deposit: 330,
    },
    bedCount: 8,
    hasParking: true,
    parkingInfo: 'Driveway parking',
  },

  // RCL Five - Men's - Palmer/Mopac
  {
    id: 'rcl-five',
    name: 'RCL Five',
    displayName: "RCL Five (Men's House)",
    type: 'mens',
    location: 'north',
    neighborhood: 'Palmer & Mopac',
    capacity: 6,
    currentOccupancy: 5,
    availability: 'available',
    amenities: [
      'Shared Kitchen',
      'Living Room',
      'Backyard',
      'Washer/Dryer',
      'WiFi',
      'Parking',
      'AC/Heat',
    ],
    highlights: [
      'Central North Austin location',
      'Easy Mopac highway access',
      'Near shopping & restaurants',
      'Close to recovery meetings',
    ],
    images: {
      main: '/images/houses/rcl-five.jpg',
      gallery: [],
    },
    pricing: {
      weekly: 175,
      monthly: 700,
      deposit: 350,
    },
    bedCount: 6,
    hasParking: true,
    parkingInfo: 'Street parking available',
  },

  // RCL Six - Men's - South Austin
  {
    id: 'rcl-six',
    name: 'RCL Six',
    displayName: "RCL Six (Men's House)",
    type: 'mens',
    location: 'south',
    neighborhood: 'South Austin',
    capacity: 6,
    currentOccupancy: 4,
    availability: 'available',
    amenities: [
      'Shared Kitchen',
      'Living Room',
      'Backyard',
      'Washer/Dryer',
      'WiFi',
      'Parking',
      'AC/Heat',
    ],
    highlights: [
      'Walkable to SoCo area',
      'Near downtown & Lady Bird Lake',
      'Vibrant neighborhood',
      'Close to bus lines',
    ],
    images: {
      main: '/images/houses/rcl-six.jpg',
      gallery: [],
    },
    pricing: {
      weekly: 175,
      monthly: 700,
      deposit: 350,
    },
    bedCount: 6,
    hasParking: true,
    parkingInfo: 'Street parking available',
  },
];

// Helper functions
export function getAvailableHouses(): House[] {
  return houses.filter((h) => h.availability === 'available');
}

export function getHousesByType(type: 'mens' | 'womens'): House[] {
  return houses.filter((h) => h.type === type);
}

export function getTotalAvailableBeds(): number {
  return houses.reduce((total, house) => {
    if (house.availability === 'available') {
      return total + (house.capacity - house.currentOccupancy);
    }
    return total;
  }, 0);
}

export function getAvailabilityBadgeColor(availability: HouseAvailability): string {
  switch (availability) {
    case 'available':
      return 'bg-[#22c55e] text-white';
    case 'waitlist':
      return 'bg-[#E67B4A] text-white';
    case 'full':
      return 'bg-stone-400 text-white';
  }
}

export function getAvailabilityLabel(house: House): string {
  const bedsAvailable = house.capacity - house.currentOccupancy;

  switch (house.availability) {
    case 'available':
      return `${bedsAvailable} Bed${bedsAvailable === 1 ? '' : 's'} Open`;
    case 'waitlist':
      return 'Waitlist Open';
    case 'full':
      return 'Currently Full';
  }
}

export function getHouseById(id: string): House | undefined {
  return houses.find((h) => h.id === id);
}

export function getAllHouseIds(): string[] {
  return houses.map((h) => h.id);
}
