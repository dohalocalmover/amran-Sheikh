export interface ServiceArea {
  id: string;
  name: string;
  subtitle: string;
  coordinates: [number, number]; // [lat, lng]
  zone: string;
  highlights: string[];
  movingNotes: string;
}

export const QATAR_SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'the-pearl',
    name: 'The Pearl-Qatar',
    subtitle: 'Pearl Island & Waterfront Towers',
    coordinates: [25.3697, 51.5516],
    zone: 'East Doha / Island',
    highlights: ['Porto Arabia', 'Viva Bahriya', 'Qanat Quartier', 'Floresta Gardens'],
    movingNotes: 'High-rise towers typically require a move-in/move-out permit and service lift reservation from the tower management 24-48 hours in advance.',
  },
  {
    id: 'lusail',
    name: 'Lusail City',
    subtitle: 'Smart Modern Metropolis',
    coordinates: [25.4208, 51.4925],
    zone: 'Northern Doha',
    highlights: ['Fox Hills', 'Marina Promenade', 'Lusail Downtown', 'Waterfront'],
    movingNotes: 'Lusail residential towers require building security registration for moving trucks at the underground service loading docks.',
  },
  {
    id: 'west-bay',
    name: 'West Bay & Al Dafna',
    subtitle: 'Diplomatic & Commercial District',
    coordinates: [25.3255, 51.5303],
    zone: 'Commercial & High-Rise',
    highlights: ['Diplomatic Area', 'Al Dafna Towers', 'Onaiza', 'Al Qassar'],
    movingNotes: 'Strict underground clearance heights for commercial and residential high-rises; we dispatch vehicles matching underground dock limits.',
  },
  {
    id: 'doha-central',
    name: 'Doha Central & Al Sadd',
    subtitle: 'Metropolitan Urban Core',
    coordinates: [25.2867, 51.5065],
    zone: 'Central Metropolitan',
    highlights: ['Al Sadd', 'Bin Mahmoud', 'Al Mansoura', 'Al Mirqab'],
    movingNotes: 'High density area with restricted street parking; our team coordinates early morning or afternoon schedules to ensure hassle-free loading.',
  },
  {
    id: 'al-wakrah',
    name: 'Al Wakrah & Al Wukair',
    subtitle: 'Coastal & Villa Communities',
    coordinates: [25.1768, 51.6034],
    zone: 'Southern Qatar',
    highlights: ['Ezdan Oasis', 'Al Wakrah Coastal City', 'Al Wukair Compounds', 'Barwa Village'],
    movingNotes: 'Popular for family villas and spacious compounds with wide driveway access and easy ground-level moving logistics.',
  },
  {
    id: 'al-rayyan',
    name: 'Al Rayyan & Education City',
    subtitle: 'Heritage & Academic Corridor',
    coordinates: [25.2919, 51.4244],
    zone: 'Western Doha',
    highlights: ['Old Al Rayyan', 'Muaither', 'Al Gharrafa', 'Education City'],
    movingNotes: 'Large standalone multi-storey villas; requires heavy carpentry for custom Arabic majlis sets and king bedroom suites.',
  },
  {
    id: 'al-khor',
    name: 'Al Khor & Ras Laffan',
    subtitle: 'Northern Coastal Region',
    coordinates: [25.6839, 51.5058],
    zone: 'Northern Coastal',
    highlights: ['Al Khor City', 'Al Thakhira', 'Simaisma', 'Industrial Corridor'],
    movingNotes: 'Scheduled inter-city relocation across Al Shamal highway with enclosed vibration-cushioned moving trucks.',
  },
  {
    id: 'umm-salal',
    name: 'Umm Salal & Al Kheesa',
    subtitle: 'North Suburban Villa Corridor',
    coordinates: [25.4093, 51.4055],
    zone: 'North Central',
    highlights: ['Umm Salal Mohammed', 'Al Kheesa', 'Umm Salal Ali', 'Izghawa'],
    movingNotes: 'Fast freeway connectivity via Al Shamal Road; ideal for smooth villa and townhome relocations.',
  },
];
