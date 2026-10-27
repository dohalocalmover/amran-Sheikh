export interface ServiceItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'packing' | 'specialized';
  description: string;
  badge?: string;
  features: string[];
  iconName: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'home-moving',
    title: 'Home Moving',
    category: 'residential',
    description: 'Comprehensive relocation for houses and compounds across Doha with protective wrapping, careful handling, and dedicated supervisor.',
    badge: 'Popular',
    features: ['Room-by-room packing & labelling', 'Protective blanket covers', 'Punctual arrival with covered trucks'],
    iconName: 'Home',
  },
  {
    id: 'villa-moving',
    title: 'Villa Moving',
    category: 'residential',
    description: 'Specialized moving for multi-storey villas, standalone compounds, and large household items with multi-crew deployment.',
    badge: 'Specialized',
    features: ['Multi-vehicle deployment', 'Bulky & delicate item protection', 'Complete floor-by-floor room placement'],
    iconName: 'Building2',
  },
  {
    id: 'apartment-relocation',
    title: 'Apartment Relocation',
    category: 'residential',
    description: 'Seamless moves for high-rise residential towers in The Pearl, West Bay, and Lusail with elevator and permit coordination.',
    features: ['Tower service-lift management', 'Floor & door frame protection', 'Efficient packing for compact spaces'],
    iconName: 'Building',
  },
  {
    id: 'office-moving',
    title: 'Office Moving',
    category: 'commercial',
    description: 'Efficient commercial relocation designed to minimize business downtime, handling workstations, servers, files, and executive suites.',
    badge: 'Corporate',
    features: ['Weekend & evening moving slots', 'IT & electronics protective packaging', 'Numbered box tagging for departments'],
    iconName: 'Briefcase',
  },
  {
    id: 'furniture-packing',
    title: 'Furniture Packing',
    category: 'packing',
    description: 'Multi-layer wrapping using high-grade bubble wrap, heavy-duty stretch film, corrugated rolls, and corner protectors.',
    features: ['Commercial-grade packing supplies', 'Mattress & sofa dust-proof covers', 'Fragile glassware & art packing'],
    iconName: 'PackageCheck',
  },
  {
    id: 'furniture-dismantling',
    title: 'Furniture Dismantling & Reassembly',
    category: 'packing',
    description: 'Skilled carpenters for disassembling and rebuilding wardrobes, king beds, IKEA units, dining tables, and office desks.',
    badge: 'Carpentry',
    features: ['IKEA & European brand expertise', 'All hardware & screws bagged & labeled', 'Leveling & stability check upon reassembly'],
    iconName: 'Wrench',
  },
  {
    id: 'loading-unloading',
    title: 'Loading and Unloading',
    category: 'specialized',
    description: 'Strong, trained physical moving crew utilizing dollies, ramps, and straps to ensure zero damage during loading and transit.',
    features: ['Trained manual handling team', 'Hydraulic tail-lift trucks available', 'Staircase & narrow passage specialists'],
    iconName: 'Truck',
  },
  {
    id: 'furniture-transportation',
    title: 'Furniture Transportation',
    category: 'specialized',
    description: 'Safe transit in enclosed, weather-proof, clean moving trucks shielded from Qatar dust, heat, and road vibrations.',
    features: ['Fleet of enclosed moving trucks', 'Interior securing tie-down straps', 'Door-to-door delivery across Qatar'],
    iconName: 'Compass',
  },
  {
    id: 'storage-services',
    title: 'Storage Services',
    category: 'specialized',
    description: 'Flexible short-term and transit storage solutions while you renovate, travel, or await handover of your new Qatar home.',
    features: ['Clean & well-managed holding space', 'Short-term and weekly options', 'Inventory documentation on intake'],
    iconName: 'Warehouse',
  },
  {
    id: 'same-day-moving',
    title: 'Same-Day Moving',
    category: 'specialized',
    description: 'Rapid-response emergency moving across Doha, subject to daily crew and vehicle availability.',
    badge: 'Express',
    features: ['Direct WhatsApp priority dispatch', 'Swift packing & transit', 'Subject to daily slot availability'],
    iconName: 'Zap',
  },
  {
    id: 'packing-unpacking',
    title: 'Packing and Unpacking',
    category: 'packing',
    description: 'Complete hands-off relocation service. We pack your belongings into boxes, move them, and unpack them onto shelves and closets.',
    features: ['All boxes & materials supplied', 'Kitchenware & fragile china wrapping', 'Unpacking and debris removal'],
    iconName: 'Boxes',
  },
  {
    id: 'handyman-services',
    title: 'Handyman Services',
    category: 'specialized',
    description: 'On-demand technical assistance for curtain rod installation, wall mounting TVs, chandeliers, mirrors, and home fixtures.',
    features: ['Drilling & wall-mount installation', 'Curtain rails and bracket fixing', 'Basic fixture reconnection'],
    iconName: 'Hammer',
  },
];
