export type ArtKey =
  | "dome"
  | "turret"
  | "bullet"
  | "ptz"
  | "nvr"
  | "hdd"
  | "switchbox"
  | "dashcam"
  | "action"
  | "detector"
  | "tester"
  | "gadget";

export type Tier = { min: number; unit: number };

export type ProductImage = {
  src: string;
  alt: string;
};

/**
 * The five product categories the business sells across, in the order they are
 * shown to customers. This is the single source of truth for category naming:
 * `categories` below is derived from it, so the filter bar, the category cards,
 * the footer links and the product data can never drift apart.
 */
export const productCategories = [
  {
    name: "Security Cameras",
    image: {
      src: "https://images.pexels.com/photos/13422379/pexels-photo-13422379.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Security camera mounted on the outside of a building",
    },
    blurb:
      "Residential-use security cameras and related products for monitoring and protecting your home.",
  },
  {
    name: "Dash Cameras",
    image: {
      src: "https://images.pexels.com/photos/1970816/pexels-photo-1970816.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Camera mounted inside a car windscreen",
    },
    blurb:
      "Dash cameras and vehicle recording products designed for everyday driving.",
  },
  {
    name: "Sports Action Cameras",
    image: {
      src: "https://images.pexels.com/photos/4336337/pexels-photo-4336337.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Compact action camera on a table in a dark studio",
    },
    blurb:
      "Action and sports cameras for capturing adventures, activities, travel and everyday moments.",
  },
  {
    name: "Metal Detectors / Diamond / Gold Testers",
    image: {
      src: "https://images.pexels.com/photos/12683080/pexels-photo-12683080.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Person sweeping a metal detector across open ground",
    },
    blurb:
      "Specialty detection and testing equipment, including metal detectors, diamond testers and gold testers.",
  },
  {
    name: "Electronics & Gadgets",
    image: {
      src: "https://images.pexels.com/photos/16387546/pexels-photo-16387546/free-photo-of-popular-technology-items.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Assorted consumer electronics laid out together",
    },
    blurb:
      "General electronics, gadgets, accessories and specialty technology products.",
  },
] as const;

export type ProductCategory = (typeof productCategories)[number];
export type Category = ProductCategory["name"];

/** Derived, so the filter bar can never name a category the data does not use. */
export const categories = productCategories.map(
  (category) => category.name,
) as readonly Category[];

/** High-contrast overlay on a product tile. At most one per product. */
export type Badge = "Hot" | "Sale" | "New" | "Wholesale Pack";

/**
 * A catalogue line.
 *
 * Stock bought through closeouts and auctions turns over weekly, so most lines
 * are quoted from the current week's list rather than a published ladder. The
 * pricing fields are therefore optional: a line carrying `tiers` prints its
 * price ladder and a quick-add button, and a line without one asks the buyer to
 * check the current price. Nothing here is invented to fill a gap.
 */
export type Product = {
  sku: string;
  name: string;
  category: Category;
  art: ArtKey;
  blurb: string;
  lead: string;
  badge?: Badge;
  /** The two figures printed on the tile: what a buyer checks first. */
  headline?: [string, string];
  specs?: [string, string][];
  msrp?: number;
  moq?: number;
  casePack?: number;
  stock?: number;
  tiers?: Tier[];
};

/** A line we hold at a published price, narrowed so the ladder can be read. */
export type PricedProduct = Product &
  Required<Pick<Product, "msrp" | "moq" | "casePack" | "stock" | "tiers">>;

export function isPriced(product: Product): product is PricedProduct {
  return Array.isArray(product.tiers) && product.tiers.length > 0;
}

export const productImages: Record<string, ProductImage> = {
  "QF-DM4K-08": {
    src: "https://images.pexels.com/photos/38805568/pexels-photo-38805568.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Close-up of a modern security camera",
  },
  "QF-TR5M-AI": {
    src: "https://images.pexels.com/photos/33104382/pexels-photo-33104382.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Outdoor security camera on a building corner",
  },
  "QF-BL5M-04": {
    src: "https://images.pexels.com/photos/11028886/pexels-photo-11028886.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Security camera watching an entrance",
  },
  "QF-BL4K-VF": {
    src: "https://images.pexels.com/photos/6570858/pexels-photo-6570858.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Security camera overlooking a property",
  },
  "QF-PTZ25X": {
    src: "https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Security camera monitoring an exterior space",
  },
  "QF-NVR16-4T": {
    src: "https://images.pexels.com/photos/30554249/pexels-photo-30554249.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Video recording equipment for a camera system",
  },
  "QF-HDD8T-SV": {
    src: "https://images.pexels.com/photos/33988254/pexels-photo-33988254.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Storage hardware for a video recording setup",
  },
  "QF-PSW8-120": {
    src: "https://images.pexels.com/photos/28117882/pexels-photo-28117882.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Networking hardware for a camera installation",
  },
  "QF-DASH-HD": {
    src: "https://images.pexels.com/photos/13836509/pexels-photo-13836509.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Dash camera recording a highway at night",
  },
  "QF-DASH-DUAL": {
    src: "https://images.pexels.com/photos/2446717/pexels-photo-2446717.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Camera mounted at the front of a vehicle",
  },
  "QF-DASH-FR": {
    src: "https://images.pexels.com/photos/2446716/pexels-photo-2446716.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Driver using a dashboard camera while driving",
  },
  "QF-DASH-MINI": {
    src: "https://images.pexels.com/photos/9318443/pexels-photo-9318443.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Compact camera fitted inside a car interior",
  },
  "QF-ACT-4K": {
    src: "https://images.pexels.com/photos/13227317/pexels-photo-13227317.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Hand holding a compact 4K action camera",
  },
  "QF-ACT-WP": {
    src: "https://images.pexels.com/photos/14541103/pexels-photo-14541103.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Action camera on wet ground after rain",
  },
  "QF-ACT-SPT": {
    src: "https://images.pexels.com/photos/10530990/pexels-photo-10530990.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Compact action camera on a wooden table",
  },
  "QF-ACT-ADV": {
    src: "https://images.pexels.com/photos/794619/pexels-photo-794619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Action camera resting among green leaves",
  },
  "QF-MD-PORT": {
    src: "https://images.pexels.com/photos/38731813/pexels-photo-38731813/free-photo-of-beachcomber-using-metal-detector-on-seashore.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Person searching a beach with a metal detector",
  },
  "QF-MD-ENTRY": {
    src: "https://images.pexels.com/photos/12683080/pexels-photo-12683080.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Person sweeping a metal detector across a field",
  },
  "QF-MD-GROUND": {
    src: "https://images.pexels.com/photos/6728037/pexels-photo-6728037.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Metal detector and digging tool used outdoors",
  },
  "QF-TST-DIA": {
    src: "https://images.pexels.com/photos/6263113/pexels-photo-6263113.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Diamond ring examined with a magnifier",
  },
  "QF-TST-GOLD": {
    src: "https://images.pexels.com/photos/5912127/pexels-photo-5912127.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Jeweller examining a piece with a magnifier",
  },
  "QF-TST-COMBO": {
    src: "https://images.pexels.com/photos/32700204/pexels-photo-32700204/free-photo-of-close-up-of-hand-holding-red-gem-with-tweezers.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Gemstone held in tweezers for inspection",
  },
  "QF-EG-POWER": {
    src: "https://images.pexels.com/photos/4072683/pexels-photo-4072683.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Portable power bank with charging cables",
  },
  "QF-EG-BUDS": {
    src: "https://images.pexels.com/photos/9130517/pexels-photo-9130517.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Wireless earbud charging case with a cable",
  },
  "QF-EG-HUB": {
    src: "https://images.pexels.com/photos/3921718/pexels-photo-3921718.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Charging adapters and plugs arranged together",
  },
  "QF-EG-GIMBAL": {
    src: "https://images.pexels.com/photos/5208776/pexels-photo-5208776.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Phone gimbal with power bank and cables",
  },
  "QF-EG-DESK": {
    src: "https://images.pexels.com/photos/5948341/pexels-photo-5948341.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Assorted black tech accessories on a surface",
  },
};

/** A spread across all five categories, so the shop gallery is not all cameras. */
export const productImageGallery: ProductImage[] = [
  {
    src: "https://images.pexels.com/photos/13227317/pexels-photo-13227317.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Hand holding a compact 4K action camera",
  },
  {
    src: "https://images.pexels.com/photos/13836509/pexels-photo-13836509.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Dash camera recording a highway at night",
  },
  {
    src: "https://images.pexels.com/photos/38731813/pexels-photo-38731813/free-photo-of-beachcomber-using-metal-detector-on-seashore.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Person searching a beach with a metal detector",
  },
  {
    src: "https://images.pexels.com/photos/6263113/pexels-photo-6263113.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Diamond ring examined with a magnifier",
  },
  {
    src: "https://images.pexels.com/photos/4072683/pexels-photo-4072683.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Portable power bank with charging cables",
  },
  {
    src: "https://images.pexels.com/photos/38805568/pexels-photo-38805568.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Close-up of a modern security camera",
  },
  {
    src: "https://images.pexels.com/photos/14541103/pexels-photo-14541103.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Action camera on wet ground after rain",
  },
  {
    src: "https://images.pexels.com/photos/2446716/pexels-photo-2446716.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Driver using a dashboard camera while driving",
  },
  {
    src: "https://images.pexels.com/photos/12683080/pexels-photo-12683080.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Person sweeping a metal detector across a field",
  },
  {
    src: "https://images.pexels.com/photos/9130517/pexels-photo-9130517.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Wireless earbud charging case with a cable",
  },
  {
    src: "https://images.pexels.com/photos/6570858/pexels-photo-6570858.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Security camera overlooking a property",
  },
  {
    src: "https://images.pexels.com/photos/5948341/pexels-photo-5948341.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Assorted black tech accessories on a surface",
  },
];

export const products: Product[] = [
  {
    sku: "QF-DM4K-08",
    name: "4K Dome Camera, Vandal Housing",
    category: "Security Cameras",
    art: "dome",
    blurb:
      "The unit that moves fastest for us. Metal housing, a true 8MP sensor, and a starlight mode that still reads plates after dark.",
    specs: [
      ["Sensor", "8MP, 3840 x 2160"],
      ["Lens", "2.8mm fixed, 108 degrees"],
      ["Night range", "30m smart IR"],
      ["Low light", "Starlight, 0.005 lux colour"],
      ["Power", "PoE 802.3af or 12V DC"],
      ["Rating", "IP67, IK10 vandal"],
      ["Compression", "H.265+, ONVIF Profile S"],
    ],
    headline: ["8MP", "30m IR"],
    msrp: 129,
    moq: 12,
    casePack: 12,
    stock: 4280,
    lead: "Ships same day",
    badge: "Hot",
    tiers: [
      { min: 12, unit: 58.4 },
      { min: 48, unit: 52.9 },
      { min: 144, unit: 47.5 },
      { min: 480, unit: 42.8 },
      { min: 1440, unit: 38.4 },
    ],
  },
  {
    sku: "QF-TR5M-AI",
    name: "5MP Turret Camera, AI Detection",
    category: "Security Cameras",
    art: "turret",
    blurb:
      "On-board human and vehicle classification, so the recorder stops filling with footage of moths and rain. The line that cuts false alarm callbacks.",
    specs: [
      ["Sensor", "5MP, 2592 x 1944"],
      ["Analytics", "Human and vehicle, on camera"],
      ["Lens", "2.8mm fixed, 102 degrees"],
      ["Night range", "30m IR, no glare bowl"],
      ["Audio", "Built-in microphone"],
      ["Power", "PoE 802.3af"],
      ["Rating", "IP67"],
    ],
    headline: ["5MP", "AI on board"],
    msrp: 109,
    moq: 12,
    casePack: 12,
    stock: 3640,
    lead: "Ships same day",
    tiers: [
      { min: 12, unit: 49.5 },
      { min: 48, unit: 44.8 },
      { min: 144, unit: 40.2 },
      { min: 480, unit: 36.1 },
      { min: 1440, unit: 32.4 },
    ],
  },
  {
    sku: "QF-BL5M-04",
    name: "5MP Bullet Camera, Colour Night",
    category: "Security Cameras",
    art: "bullet",
    blurb:
      "Full-colour capture down to 0.005 lux, with a warm spotlight that only wakes on motion. Popular for forecourts and yards.",
    specs: [
      ["Sensor", "5MP, 2592 x 1944"],
      ["Lens", "3.6mm fixed, 92 degrees"],
      ["Night range", "40m IR plus spotlight"],
      ["Low light", "0.005 lux full colour"],
      ["Audio", "Built-in microphone"],
      ["Power", "PoE 802.3af"],
      ["Rating", "IP67"],
    ],
    headline: ["5MP", "40m IR"],
    msrp: 99,
    moq: 12,
    casePack: 12,
    stock: 3115,
    lead: "Ships same day",
    tiers: [
      { min: 12, unit: 44.9 },
      { min: 48, unit: 40.6 },
      { min: 144, unit: 36.2 },
      { min: 480, unit: 32.4 },
      { min: 1440, unit: 28.9 },
    ],
  },
  {
    sku: "QF-BL4K-VF",
    name: "4K Varifocal Bullet, 60m IR",
    category: "Security Cameras",
    art: "bullet",
    blurb:
      "The long-throw unit for perimeters and yards. Sixty metres of IR and a varifocal lens that lets one camera cover a fence line.",
    specs: [
      ["Sensor", "8MP, 3840 x 2160"],
      ["Lens", "2.8 to 12mm motorised"],
      ["Night range", "60m dual-array IR"],
      ["Analytics", "Line cross and intrusion"],
      ["Housing", "Die-cast aluminium, sun shroud"],
      ["Power", "PoE 802.3af"],
      ["Rating", "IP67, minus 40C rated"],
    ],
    headline: ["8MP", "60m IR"],
    msrp: 229,
    moq: 8,
    casePack: 8,
    stock: 1760,
    lead: "Ships same day",
    tiers: [
      { min: 8, unit: 103 },
      { min: 32, unit: 93.5 },
      { min: 96, unit: 84 },
      { min: 320, unit: 75.5 },
      { min: 960, unit: 67.5 },
    ],
  },
  {
    sku: "QF-PTZ25X",
    name: "PTZ Speed Dome, 25x Optical Zoom",
    category: "Security Cameras",
    art: "ptz",
    blurb:
      "Auto-tracking pan, tilt and zoom for sites that need one camera to cover a whole lot. Our highest-margin line.",
    specs: [
      ["Sensor", "4MP, 2560 x 1440"],
      ["Zoom", "25x optical, 4.8 to 120mm"],
      ["Night range", "150m laser IR"],
      ["Tracking", "Auto-track on human and vehicle"],
      ["Preset tours", "300 positions, 8 tours"],
      ["Power", "Hi-PoE or 24V AC"],
      ["Rating", "IP66, 6000V surge"],
    ],
    headline: ["25x zoom", "150m IR"],
    msrp: 749,
    moq: 4,
    casePack: 4,
    stock: 620,
    lead: "Ships same day",
    tiers: [
      { min: 4, unit: 338 },
      { min: 16, unit: 312 },
      { min: 48, unit: 286 },
      { min: 120, unit: 262 },
      { min: 400, unit: 239 },
    ],
  },
  {
    sku: "QF-NVR16-4T",
    name: "16-Channel NVR, 4TB Fitted",
    category: "Security Cameras",
    art: "nvr",
    blurb:
      "Arrives with the drive already installed and formatted, so your installer is not sourcing storage on the day of the job.",
    specs: [
      ["Channels", "16 IP, up to 12MP each"],
      ["Storage", "4TB surveillance drive fitted"],
      ["Throughput", "160 Mbps in, 80 out"],
      ["Bays", "2 x 3.5in, 16TB maximum"],
      ["Outputs", "HDMI 4K and VGA"],
      ["Network", "Gigabit, ONVIF Profile S and G"],
      ["Analytics", "Face and plate search on playback"],
    ],
    headline: ["16 ch", "4TB fitted"],
    msrp: 559,
    moq: 4,
    casePack: 4,
    stock: 890,
    lead: "Ships same day",
    tiers: [
      { min: 4, unit: 252 },
      { min: 16, unit: 233 },
      { min: 48, unit: 214 },
      { min: 120, unit: 196 },
      { min: 400, unit: 178 },
    ],
  },
  {
    sku: "QF-HDD8T-SV",
    name: "8TB Surveillance Drive, 24/7 Rated",
    category: "Security Cameras",
    art: "hdd",
    blurb:
      "Written for continuous video, not desktop bursts. The attach sale on every recorder, and the line that keeps warranty claims off your desk.",
    specs: [
      ["Capacity", "8TB, 3.5 inch SATA"],
      ["Workload", "180TB per year, 24/7 duty"],
      ["Cache", "256MB"],
      ["Streams", "Rated to 64 camera streams"],
      ["MTBF", "1.8 million hours"],
      ["Warranty", "3 years"],
    ],
    headline: ["8TB", "24/7 rated"],
    msrp: 219,
    moq: 10,
    casePack: 10,
    stock: 2450,
    lead: "Ships same day",
    badge: "Wholesale Pack",
    tiers: [
      { min: 10, unit: 99 },
      { min: 40, unit: 90 },
      { min: 120, unit: 81 },
      { min: 400, unit: 73 },
      { min: 1200, unit: 65.5 },
    ],
  },

  {
    sku: "QF-PSW8-120",
    name: "8-Port PoE Switch, 120W Budget",
    category: "Security Cameras",
    art: "switchbox",
    blurb:
      "Goes out with the 16-channel NVR more often than not. Fanless, so it can sit in a hallway cabinet without complaints.",
    specs: [
      ["Ports", "8 PoE plus 2 gigabit uplink"],
      ["PoE budget", "120W total, 30W per port"],
      ["Standard", "802.3af and 802.3at"],
      ["Extend mode", "250m at 10Mbps"],
      ["Cooling", "Fanless"],
      ["Mount", "Desk or rack ear"],
    ],
    headline: ["8 port", "120W"],
    msrp: 189,
    moq: 8,
    casePack: 8,
    stock: 1740,
    lead: "Ships same day",
    tiers: [
      { min: 8, unit: 85 },
      { min: 32, unit: 77.5 },
      { min: 96, unit: 70 },
      { min: 320, unit: 63 },
      { min: 960, unit: 56.5 },
    ],
  },
  {
    sku: "QF-DASH-HD",
    name: "HD Dash Cam",
    category: "Dash Cameras",
    art: "dashcam",
    blurb:
      "Windscreen-mounted vehicle camera that records the road ahead while you drive, with loop recording so it keeps going without swapping cards.",
    lead: "Ask for this week’s stock",
    badge: "New",
  },
  {
    sku: "QF-DASH-DUAL",
    name: "Dual Dash Camera",
    category: "Dash Cameras",
    art: "dashcam",
    blurb:
      "Two-channel dash camera that records the road and the cabin at the same time. A common choice for rideshare and delivery drivers.",
    lead: "Ask for this week’s stock",
  },
  {
    sku: "QF-DASH-FR",
    name: "Front & Rear Dash Camera",
    category: "Dash Cameras",
    art: "dashcam",
    blurb:
      "Front and rear camera pair for drivers who want the road covered at both ends of the vehicle, including while parked.",
    lead: "Ask for this week’s stock",
  },
  {
    sku: "QF-DASH-MINI",
    name: "Compact Vehicle Dash Cam",
    category: "Dash Cameras",
    art: "dashcam",
    blurb:
      "Small dash camera that sits discreetly behind the mirror. Straightforward to fit and easy to move between vehicles.",
    lead: "Ask for this week’s stock",
  },
  {
    sku: "QF-ACT-4K",
    name: "4K Action Camera",
    category: "Sports Action Cameras",
    art: "action",
    blurb:
      "Pocket-sized action camera that records in 4K, for cycling, travel and anything else worth filming hands-free.",
    lead: "Ask for this week’s stock",
    badge: "Hot",
  },
  {
    sku: "QF-ACT-WP",
    name: "Waterproof Action Camera",
    category: "Sports Action Cameras",
    art: "action",
    blurb:
      "Action camera built to keep filming in and around water, for swimming, watersports and wet-weather use.",
    lead: "Ask for this week’s stock",
  },
  {
    sku: "QF-ACT-SPT",
    name: "Sports Action Camera",
    category: "Sports Action Cameras",
    art: "action",
    blurb:
      "Everyday sports camera for filming activities and events hands-free, with mounting options for helmets, bars and chest straps.",
    lead: "Ask for this week’s stock",
  },
  {
    sku: "QF-ACT-ADV",
    name: "Adventure Action Camera",
    category: "Sports Action Cameras",
    art: "action",
    blurb:
      "Rugged action camera aimed at hiking, climbing and off-road trips, where a phone camera is awkward to hold and easy to drop.",
    lead: "Ask for this week’s stock",
  },
  {
    sku: "QF-MD-PORT",
    name: "Portable Metal Detector",
    category: "Metal Detectors / Diamond / Gold Testers",
    art: "detector",
    blurb:
      "Lightweight metal detector that breaks down for transport, suited to beaches, parks and travel.",
    lead: "Ask for this week’s stock",
  },
  {
    sku: "QF-MD-ENTRY",
    name: "Entry-Level Metal Detector",
    category: "Metal Detectors / Diamond / Gold Testers",
    art: "detector",
    blurb:
      "Straightforward metal detector for beginners and hobbyists, with simple controls and no setup to learn first.",
    lead: "Ask for this week’s stock",
    badge: "New",
  },
  {
    sku: "QF-MD-GROUND",
    name: "Ground Detection Metal Detector",
    category: "Metal Detectors / Diamond / Gold Testers",
    art: "detector",
    blurb:
      "Metal detector intended for ground searching over open land, for hobbyists working larger sites.",
    lead: "Ask for this week’s stock",
  },
  {
    sku: "QF-TST-DIA",
    name: "Diamond Tester",
    category: "Metal Detectors / Diamond / Gold Testers",
    art: "tester",
    blurb:
      "Compact specialty testing equipment designed for diamond identification and testing.",
    lead: "Ask for this week’s stock",
  },
  {
    sku: "QF-TST-GOLD",
    name: "Gold Tester",
    category: "Metal Detectors / Diamond / Gold Testers",
    art: "tester",
    blurb:
      "Handheld testing device used to check gold items, for resellers, pawn desks and private buyers.",
    lead: "Ask for this week’s stock",
  },
  {
    sku: "QF-TST-COMBO",
    name: "Gold & Diamond Testing Device",
    category: "Metal Detectors / Diamond / Gold Testers",
    art: "tester",
    blurb:
      "Combined testing unit covering both gold and diamond checks in a single handheld device.",
    lead: "Ask for this week’s stock",
    badge: "Hot",
  },
  {
    sku: "QF-EG-POWER",
    name: "Portable Power Bank",
    category: "Electronics & Gadgets",
    art: "gadget",
    blurb:
      "Rechargeable battery pack for topping up phones and small devices away from a socket.",
    lead: "Ask for this week’s stock",
  },
  {
    sku: "QF-EG-BUDS",
    name: "Wireless Earbuds",
    category: "Electronics & Gadgets",
    art: "gadget",
    blurb:
      "Compact wireless earbuds with a charging case, for calls, music and everyday use.",
    lead: "Ask for this week’s stock",
    badge: "New",
  },
  {
    sku: "QF-EG-HUB",
    name: "Multi-Port Charging Station",
    category: "Electronics & Gadgets",
    art: "gadget",
    blurb:
      "Mains charger with several ports, so a household can charge phones, tablets and accessories from one socket.",
    lead: "Ask for this week’s stock",
  },
  {
    sku: "QF-EG-GIMBAL",
    name: "Smartphone Gimbal Stabiliser",
    category: "Electronics & Gadgets",
    art: "gadget",
    blurb:
      "Handheld stabiliser that smooths out phone video while walking or filming on the move.",
    lead: "Ask for this week’s stock",
  },
  {
    sku: "QF-EG-DESK",
    name: "Desk Tech Accessory Set",
    category: "Electronics & Gadgets",
    art: "gadget",
    blurb:
      "An assortment of everyday desk and travel accessories, the kind of mixed lot our closeout buying turns up most weeks.",
    lead: "Ask for this week’s stock",
  },
];

export const tierNames = [
  "Trade",
  "Stockist",
  "Dealer",
  "Distributor",
  "Container",
] as const;

export function tierIndexFor(product: PricedProduct, qty: number): number {
  let index = 0;
  product.tiers.forEach((tier, i) => {
    if (qty >= tier.min) index = i;
  });
  return index;
}

export function unitPriceFor(product: PricedProduct, qty: number): Tier {
  return product.tiers[tierIndexFor(product, qty)];
}

export function money(value: number, decimals = 2) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function bySku(sku: string): Product {
  return products.find((p) => p.sku === sku) ?? products[0];
}

/**
 * A published-price line by SKU. Throws at build time rather than silently
 * falling back, so a costed kit can never quote the wrong product.
 */
export function pricedBySku(sku: string): PricedProduct {
  const product = products.find((p) => p.sku === sku);
  if (!product || !isPriced(product)) {
    throw new Error("No published price for SKU " + sku);
  }
  return product;
}

export function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function stockByCategory() {
  return categories.map((category) => ({
    category,
    units: products
      .filter((p) => p.category === category)
      .reduce((sum, p) => sum + (p.stock ?? 0), 0),
  }));
}

/** Lines listed per category, which every product has — unlike a unit count. */
export function countByCategory() {
  return productCategories.map((category) => ({
    category: category.name,
    count: products.filter((p) => p.category === category.name).length,
  }));
}

/**
 * Storage a channel eats per day, so the retention table on the home page and
 * the recorder copy stay in agreement. Figures are H.265+ at 15fps, continuous.
 */
export const retention = [
  { res: "4MP", gbPerDay: 12, label: "2688 x 1520" },
  { res: "5MP", gbPerDay: 15, label: "2592 x 1944" },
  { res: "8MP / 4K", gbPerDay: 24, label: "3840 x 2160" },
  { res: "12MP fisheye", gbPerDay: 32, label: "4000 x 3000" },
] as const;

/** Days of footage a given drive holds, for a channel count at a resolution. */
export function daysOfFootage(
  terabytes: number,
  channels: number,
  gbPerDay: number,
) {
  return Math.floor((terabytes * 1000) / (channels * gbPerDay));
}
