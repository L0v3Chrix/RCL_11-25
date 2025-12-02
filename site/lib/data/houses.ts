export type HouseAvailability = 'available' | 'waitlist' | 'full';

export interface House {
  id: string;
  name: string;
  type: 'mens' | 'womens';
  location: 'south' | 'north';
  address: string;
  neighborhood: string;
  capacity: number;
  currentOccupancy: number;
  availability: HouseAvailability;
  amenities: string[];
  highlights: string[];
  houseManager: {
    name: string;
    yearsInRecovery: number;
    bio: string;
  };
  images: {
    main: string;
    gallery: string[];
  };
  pricing: {
    weekly: number;
    monthly: number;
    deposit: number;
  };
  features: {
    icon: string;
    label: string;
  }[];
}

export const houses: House[] = [
  // Men's Houses - South Austin
  {
    id: 'mens-south-1',
    name: 'The Oak House',
    type: 'mens',
    location: 'south',
    address: 'South Austin',
    neighborhood: 'Travis Heights',
    capacity: 8,
    currentOccupancy: 6,
    availability: 'available',
    amenities: [
      'Shared Kitchen',
      'Living Room',
      'Backyard',
      'Washer/Dryer',
      'WiFi',
      'Parking',
      'Storage',
      'AC/Heat',
    ],
    highlights: [
      'Walking distance to downtown',
      'Near recovery meeting locations',
      'Quiet residential street',
      'Close to parks and hiking trails',
    ],
    houseManager: {
      name: 'Marcus',
      yearsInRecovery: 7,
      bio: 'Marcus has been in recovery for 7 years and brings a grounded, supportive presence to the house. He works in construction and is passionate about fitness and outdoor activities.',
    },
    images: {
      main: '/images/houses/oak-house-main.jpg',
      gallery: [
        '/images/houses/oak-house-1.jpg',
        '/images/houses/oak-house-2.jpg',
        '/images/houses/oak-house-3.jpg',
      ],
    },
    pricing: {
      weekly: 175,
      monthly: 700,
      deposit: 350,
    },
    features: [
      { icon: '🛏️', label: '8 Beds' },
      { icon: '🚗', label: 'Parking' },
      { icon: '🌳', label: 'Backyard' },
      { icon: '📍', label: 'Downtown Close' },
    ],
  },
  {
    id: 'mens-south-2',
    name: 'The Cypress House',
    type: 'mens',
    location: 'south',
    address: 'South Austin',
    neighborhood: 'Bouldin Creek',
    capacity: 6,
    currentOccupancy: 5,
    availability: 'available',
    amenities: [
      'Shared Kitchen',
      'Living Room',
      'Front Porch',
      'Washer/Dryer',
      'WiFi',
      'Parking',
      'AC/Heat',
      'Office Space',
    ],
    highlights: [
      'Walkable neighborhood',
      'Near coffee shops and grocery',
      'Bike-friendly area',
      'Close to Lady Bird Lake',
    ],
    houseManager: {
      name: 'David',
      yearsInRecovery: 5,
      bio: 'David is 5 years sober and works in the tech industry. He values structure, accountability, and creating a supportive brotherhood in the house.',
    },
    images: {
      main: '/images/houses/cypress-house-main.jpg',
      gallery: [
        '/images/houses/cypress-house-1.jpg',
        '/images/houses/cypress-house-2.jpg',
        '/images/houses/cypress-house-3.jpg',
      ],
    },
    pricing: {
      weekly: 175,
      monthly: 700,
      deposit: 350,
    },
    features: [
      { icon: '🛏️', label: '6 Beds' },
      { icon: '🚗', label: 'Parking' },
      { icon: '🏡', label: 'Front Porch' },
      { icon: '💼', label: 'Work Space' },
    ],
  },
  {
    id: 'mens-south-3',
    name: 'The Pecan House',
    type: 'mens',
    location: 'south',
    address: 'South Austin',
    neighborhood: 'South Congress',
    capacity: 7,
    currentOccupancy: 7,
    availability: 'waitlist',
    amenities: [
      'Shared Kitchen',
      'Living Room',
      'Large Backyard',
      'Washer/Dryer',
      'WiFi',
      'Parking',
      'AC/Heat',
      'Outdoor Seating',
    ],
    highlights: [
      'Near SoCo shops and restaurants',
      'Large outdoor gathering space',
      'Close to bus lines',
      'Active house community',
    ],
    houseManager: {
      name: 'James',
      yearsInRecovery: 9,
      bio: 'James has been in recovery for 9 years and is a certified peer support specialist. He brings compassion and experience to helping others navigate early recovery.',
    },
    images: {
      main: '/images/houses/pecan-house-main.jpg',
      gallery: [
        '/images/houses/pecan-house-1.jpg',
        '/images/houses/pecan-house-2.jpg',
        '/images/houses/pecan-house-3.jpg',
      ],
    },
    pricing: {
      weekly: 175,
      monthly: 700,
      deposit: 350,
    },
    features: [
      { icon: '🛏️', label: '7 Beds' },
      { icon: '🚗', label: 'Parking' },
      { icon: '🌳', label: 'Large Yard' },
      { icon: '🚌', label: 'Transit Access' },
    ],
  },

  // Women's Houses - North Austin
  {
    id: 'womens-north-1',
    name: 'The Willow House',
    type: 'womens',
    location: 'north',
    address: 'North Austin',
    neighborhood: 'Hyde Park',
    capacity: 6,
    currentOccupancy: 4,
    availability: 'available',
    amenities: [
      'Shared Kitchen',
      'Living Room',
      'Front Porch',
      'Washer/Dryer',
      'WiFi',
      'Parking',
      'AC/Heat',
      'Garden Space',
    ],
    highlights: [
      'Historic neighborhood charm',
      'Walking distance to UT campus',
      'Near yoga studios and wellness centers',
      'Quiet, tree-lined street',
    ],
    houseManager: {
      name: 'Sarah',
      yearsInRecovery: 6,
      bio: 'Sarah is 6 years sober and works as a yoga instructor. She creates a nurturing, grounded environment and emphasizes holistic recovery practices.',
    },
    images: {
      main: '/images/houses/willow-house-main.jpg',
      gallery: [
        '/images/houses/willow-house-1.jpg',
        '/images/houses/willow-house-2.jpg',
        '/images/houses/willow-house-3.jpg',
      ],
    },
    pricing: {
      weekly: 175,
      monthly: 700,
      deposit: 350,
    },
    features: [
      { icon: '🛏️', label: '6 Beds' },
      { icon: '🚗', label: 'Parking' },
      { icon: '🌸', label: 'Garden' },
      { icon: '🧘', label: 'Wellness Focus' },
    ],
  },
  {
    id: 'womens-north-2',
    name: 'The Magnolia House',
    type: 'womens',
    location: 'north',
    address: 'North Austin',
    neighborhood: 'Crestview',
    capacity: 7,
    currentOccupancy: 6,
    availability: 'available',
    amenities: [
      'Shared Kitchen',
      'Living Room',
      'Backyard',
      'Washer/Dryer',
      'WiFi',
      'Parking',
      'AC/Heat',
      'Study Room',
    ],
    highlights: [
      'Near grocery stores and shopping',
      'Close to parks and recreation',
      'Family-friendly neighborhood',
      'Easy highway access',
    ],
    houseManager: {
      name: 'Jennifer',
      yearsInRecovery: 8,
      bio: 'Jennifer has 8 years of recovery and is a licensed therapist. She brings professional insight and deep empathy to supporting women in early recovery.',
    },
    images: {
      main: '/images/houses/magnolia-house-main.jpg',
      gallery: [
        '/images/houses/magnolia-house-1.jpg',
        '/images/houses/magnolia-house-2.jpg',
        '/images/houses/magnolia-house-3.jpg',
      ],
    },
    pricing: {
      weekly: 175,
      monthly: 700,
      deposit: 350,
    },
    features: [
      { icon: '🛏️', label: '7 Beds' },
      { icon: '🚗', label: 'Parking' },
      { icon: '📚', label: 'Study Room' },
      { icon: '🛒', label: 'Shopping Close' },
    ],
  },
  {
    id: 'womens-north-3',
    name: 'The Rosewood House',
    type: 'womens',
    location: 'north',
    address: 'North Austin',
    neighborhood: 'North Loop',
    capacity: 8,
    currentOccupancy: 7,
    availability: 'available',
    amenities: [
      'Shared Kitchen',
      'Living Room',
      'Covered Patio',
      'Washer/Dryer',
      'WiFi',
      'Parking',
      'AC/Heat',
      'Outdoor Firepit',
    ],
    highlights: [
      'Vibrant artistic neighborhood',
      'Near vintage shops and cafes',
      'Close to recovery meetings',
      'Strong community vibe',
    ],
    houseManager: {
      name: 'Amanda',
      yearsInRecovery: 10,
      bio: 'Amanda has a decade of recovery and is passionate about creative expression in healing. She fosters a warm, inclusive atmosphere where all recovery paths are honored.',
    },
    images: {
      main: '/images/houses/rosewood-house-main.jpg',
      gallery: [
        '/images/houses/rosewood-house-1.jpg',
        '/images/houses/rosewood-house-2.jpg',
        '/images/houses/rosewood-house-3.jpg',
      ],
    },
    pricing: {
      weekly: 175,
      monthly: 700,
      deposit: 350,
    },
    features: [
      { icon: '🛏️', label: '8 Beds' },
      { icon: '🚗', label: 'Parking' },
      { icon: '🔥', label: 'Firepit' },
      { icon: '🎨', label: 'Artistic Area' },
    ],
  },
];

// Helper functions
export function getAvailableHouses(): House[] {
  return houses.filter((h) => h.availability === 'available');
}

export function getHousesByType(type: 'mens' | 'womens'): House[] {
  return houses.filter((h) => h.type === type);
}

export function getHousesByLocation(location: 'south' | 'north'): House[] {
  return houses.filter((h) => h.location === location);
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
      return 'bg-brand-success text-white';
    case 'waitlist':
      return 'bg-yellow-500 text-white';
    case 'full':
      return 'bg-stone-400 text-white';
  }
}

export function getAvailabilityLabel(house: House): string {
  const bedsAvailable = house.capacity - house.currentOccupancy;

  switch (house.availability) {
    case 'available':
      return `${bedsAvailable} Bed${bedsAvailable === 1 ? '' : 's'} Available`;
    case 'waitlist':
      return 'Waitlist Open';
    case 'full':
      return 'Currently Full';
  }
}
