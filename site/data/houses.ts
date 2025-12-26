/**
 * Houses Data
 * Edit this file to add, remove, or update house listings
 */

export type HouseGender = 'men' | 'women';

export interface House {
  slug: string;
  name: string;
  gender: HouseGender;
  neighborhoodLabel: string;
  bedsLabel: string;
  parkingLabel: string;
  heroImage: string;
  galleryImages: string[];
  highlights: string[];
  amenities: string[];
  pricing: {
    weekly: number;
    monthly: number;
    deposit: number;
  };
  generalAreaText: string;
  available: boolean;
  bedsAvailable: number;
}

export const houses: House[] = [
  {
    slug: 'rcl-one',
    name: "RCL One",
    gender: 'men',
    neighborhoodLabel: 'Austin Area',
    bedsLabel: 'High Accountability Home',
    parkingLabel: 'Street parking',
    heroImage: '/images/houses/rcl-one-main.jpg',
    galleryImages: [
      '/images/houses/rcl-one-main.jpg',
    ],
    highlights: [
      'High Accountability Home',
      'Clean Recovery Environment',
      'Peer-Led Community',
      'Spiritual Environment',
    ],
    amenities: [
      'Beds',
      'Clean Living',
      'Community',
    ],
    pricing: {
      weekly: 250,
      monthly: 900,
      deposit: 200,
    },
    generalAreaText: 'Austin Area',
    available: true,
    bedsAvailable: 1,
  },
  {
    slug: 'rcl-two',
    name: "RCL Two",
    gender: 'men',
    neighborhoodLabel: 'Austin Area',
    bedsLabel: 'High Accountability Home',
    parkingLabel: 'Driveway parking',
    heroImage: '/images/houses/rcl-two-main.jpg',
    galleryImages: [
      '/images/houses/rcl-two-main.jpg',
    ],
    highlights: [
      'High Accountability Home',
      'Clean Recovery Environment',
      'Peer-Led Community',
      'Spiritual Environment',
    ],
    amenities: [
      'Beds',
      'Clean Living',
      'Community',
    ],
    pricing: {
      weekly: 250,
      monthly: 900,
      deposit: 200,
    },
    generalAreaText: 'Austin Area',
    available: true,
    bedsAvailable: 1,
  },
  {
    slug: 'rcl-three',
    name: "RCL Three",
    gender: 'women',
    neighborhoodLabel: 'Austin Area',
    bedsLabel: 'High Accountability Home',
    parkingLabel: 'Street parking',
    heroImage: '/images/houses/rcl-three-main.jpg',
    galleryImages: [
      '/images/houses/rcl-three-main.jpg',
      '/images/houses/living-room.jpg',
    ],
    highlights: [
      'High Accountability Home',
      'Clean Recovery Environment',
      'Peer-Led Community',
      'Spiritual Environment',
    ],
    amenities: [
      'Beds',
      'Clean Living',
      'Community',
    ],
    pricing: {
      weekly: 250,
      monthly: 900,
      deposit: 200,
    },
    generalAreaText: 'Austin Area',
    available: true,
    bedsAvailable: 1,
  },
  {
    slug: 'rcl-four',
    name: "RCL Four",
    gender: 'men',
    neighborhoodLabel: 'Austin Area',
    bedsLabel: 'High Accountability Home',
    parkingLabel: 'Driveway parking',
    heroImage: '/images/houses/rcl-four-main.jpg',
    galleryImages: [],
    highlights: [
      'High Accountability Home',
      'Clean Recovery Environment',
      'Peer-Led Community',
      'Spiritual Environment',
    ],
    amenities: [
      'Beds',
      'Clean Living',
      'Community',
    ],
    pricing: {
      weekly: 250,
      monthly: 900,
      deposit: 200,
    },
    generalAreaText: 'Austin Area',
    available: true,
    bedsAvailable: 1,
  },
  {
    slug: 'rcl-five',
    name: "RCL Five",
    gender: 'men',
    neighborhoodLabel: 'Austin Area',
    bedsLabel: 'High Accountability Home',
    parkingLabel: 'Street parking',
    heroImage: '/images/houses/rcl-five.jpg',
    galleryImages: [],
    highlights: [
      'High Accountability Home',
      'Clean Recovery Environment',
      'Peer-Led Community',
      'Spiritual Environment',
    ],
    amenities: [
      'Beds',
      'Clean Living',
      'Community',
    ],
    pricing: {
      weekly: 250,
      monthly: 900,
      deposit: 200,
    },
    generalAreaText: 'Austin Area',
    available: true,
    bedsAvailable: 1,
  },
  {
    slug: 'rcl-six',
    name: "RCL Six",
    gender: 'men',
    neighborhoodLabel: 'Austin Area',
    bedsLabel: 'High Accountability Home',
    parkingLabel: 'Street parking',
    heroImage: '/images/houses/rcl-six-main.jpg',
    galleryImages: [
      '/images/houses/rcl-six-main.jpg',
    ],
    highlights: [
      'High Accountability Home',
      'Clean Recovery Environment',
      'Peer-Led Community',
      'Spiritual Environment',
    ],
    amenities: [
      'Beds',
      'Clean Living',
      'Community',
    ],
    pricing: {
      weekly: 250,
      monthly: 900,
      deposit: 200,
    },
    generalAreaText: 'Austin Area',
    available: true,
    bedsAvailable: 1,
  },
];

// Helper functions
export function getHouseBySlug(slug: string): House | undefined {
  return houses.find((h) => h.slug === slug);
}

export function getHousesByGender(gender: HouseGender): House[] {
  return houses.filter((h) => h.gender === gender);
}

export function getAllSlugs(): string[] {
  return houses.map((h) => h.slug);
}

export function getMensHouses(): House[] {
  return getHousesByGender('men');
}

export function getWomensHouses(): House[] {
  return getHousesByGender('women');
}

export function getTotalAvailableBeds(): number {
  return houses.reduce((total, house) => total + house.bedsAvailable, 0);
}
