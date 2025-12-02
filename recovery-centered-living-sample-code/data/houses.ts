import { House, HouseType, AvailabilityStatus } from '../types';

export const HOUSES: House[] = [
  {
    id: '1',
    name: 'Hope House',
    location: 'North Austin',
    type: HouseType.WOMEN,
    bedsAvailable: 2,
    status: AvailabilityStatus.AVAILABLE,
    price: 850,
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=1200', // Keeping high-quality placeholder for Women's house until specific photo provided
    features: ['Spacious Backyard', 'Walking Distance to Meetings', 'Structured Living', 'High-Speed Wifi', 'Streaming Services'],
    managerName: 'Sarah J.',
    managerQuote: 'We heal together, one day at a time.',
    description: 'Nestled in a quiet, tree-lined neighborhood in North Austin, Hope House offers a serene sanctuary for women rebuilding their lives. This home emphasizes emotional safety and the power of sisterhood. With a large communal kitchen and a beautiful backyard garden, residents find peace and connection in their daily routines.',
    gallery: [
        '/images/family-hugging-bw.jpg', // Authentic BW Photo
        'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&q=80&w=800', // Living Room
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800', // Bedroom
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800', // Backyard/Patio
    ]
  },
  {
    id: '2',
    name: 'Unity House',
    location: 'South Austin',
    type: HouseType.MEN,
    bedsAvailable: 0,
    status: AvailabilityStatus.WAITLIST,
    price: 750,
    image: '/images/unity-house-exterior.jpg', // The brick house with stars
    features: ['On-site Gym', 'Weekly House BBQ', 'Recovery Coaching', 'Near Bus Lines', 'Job Assistance'],
    managerName: 'Mike R.',
    managerQuote: 'Brotherhood is the foundation of recovery.',
    description: 'Unity House is a cornerstone of the South Austin recovery community. This spacious brick home is built for action and camaraderie. Featuring classic Texas architecture and a large patio for our famous weekly BBQs, Unity House is perfect for men who are ready to get active in their recovery and build lasting friendships.',
    gallery: [
        '/images/unity-house-tree.jpg', // Side view with tree
        '/images/men-group-port-aransas.jpg', // Group Outing
        '/images/men-hugging.jpg', // Interior Community
        'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&q=80&w=800'  // BBQ Area placeholder
    ]
  },
  {
    id: '3',
    name: 'Serenity House',
    location: 'Central Austin',
    type: HouseType.WOMEN,
    bedsAvailable: 1,
    status: AvailabilityStatus.AVAILABLE,
    price: 900,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=1200', // Main Exterior
    features: ['Private Suites', 'Meditation Room', 'Executive Friendly', 'Workspace', 'Premium Finishes'],
    managerName: 'Chloe S.',
    managerQuote: 'Reclaiming dignity is our primary purpose.',
    description: 'Designed for professionals and those seeking a higher level of privacy, Serenity House combines upscale living with a rigorous recovery structure. Located minutes from downtown, this home features dedicated workspaces, a meditation room, and premium finishes throughout, proving that sobriety doesn\'t mean sacrificing comfort.',
    gallery: [
        'https://images.unsplash.com/photo-1616594039964-40891a909399?auto=format&fit=crop&q=80&w=800', // Interior Detail
        'https://images.unsplash.com/photo-1505693416388-b0346efee958?auto=format&fit=crop&q=80&w=800', // Meditation area
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800', // Living Area
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'  // Dining
    ]
  }
];