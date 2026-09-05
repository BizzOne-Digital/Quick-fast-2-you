export type ArtKey =
  | "dome"
  | "turret"
  | "bullet"
  | "ptz"
  | "fisheye"
  | "lpr"
  | "nvr"
  | "hdd"
  | "switchbox"
  | "injector"
  | "ups"
  | "doorbell"
  | "floodlight"
  | "intercom"
  | "cable"
  | "mount";

export type Tier = { min: number; unit: number };

export const categories = [
  "Dome Cameras",
  "Bullet Cameras",
  "PTZ & Panoramic",
  "Recorders & Storage",
  "Entry & Lighting",
  "Cabling & Power",
] as const;

export type Category = (typeof categories)[number];

/** High-contrast overlay on a product tile. At most one per product. */
export type Badge = "Hot" | "Sale" | "New" | "Wholesale Pack";

export type Product = {
  sku: string;
  name: string;
  category: Category;
  art: ArtKey;
  blurb: string;
  specs: [string, string][];
  /** The two figures printed on the tile: what an installer checks first. */
  headline: [string, string];
  msrp: number;
  moq: number;
  casePack: number;
  stock: number;
  tiers: Tier[];
  lead: string;
  badge?: Badge;
};

export type ProductImage = {
  src: string;
  alt: string;
};

export const productImages: Record<string, ProductImage> = {
  "QF-DM4K-08": {
    src: "https://img.magnific.com/free-psd/highdefinition-dome-security-camera-advanced-surveillance-technology_191095-79300.jpg?semt=ais_hybrid&w=740&q=80",
    alt: "High-definition dome security camera",
  },
  "QF-TR5M-AI": {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHgM5CbH9Gur5APTPdOsVPP4krq2-Ob0Lz0vooainMxQ9w_JMAPCkVmE&s=10",
    alt: "White turret security camera",
  },
  "QF-DM8M-MOT": {
    src: "https://img.magnific.com/free-vector/white-video-surveillance-security-cameras-isolated-realistic-icon-set-different-purposes-vector-illustration_1284-71329.jpg?semt=ais_hybrid&w=740&q=80",
    alt: "Collection of white video surveillance cameras",
  },
  "QF-BL5M-04": {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFg9yYMheBHOdiGq0L0jEk6NVrwdJ64j5drGe_K7tGRQ&s=10",
    alt: "Outdoor bullet security camera",
  },
  "QF-BL4K-VF": {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbX_PQlzJLydWZDYwSC47XlA-7_WTXYmjvzLoqH9hcWA&s=10",
    alt: "Long-range bullet security camera",
  },
  "QF-LPR8M-60": {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8uY9nvItNZrHpZbMtMvqDDmX3kLujFj33fzgQSuvnw&s=10",
    alt: "License plate recognition security camera",
  },
  "QF-PTZ25X": {
    src: "https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg",
    alt: "Security camera monitoring an exterior space",
  },
  "QF-PTZ4M-MINI": {
    src: "https://images.pexels.com/photos/27765780/pexels-photo-27765780.jpeg",
    alt: "Close-up security camera installation",
  },
  "QF-FSH12-360": {
    src: "https://images.pexels.com/photos/37591155/pexels-photo-37591155.jpeg",
    alt: "Modern surveillance camera system",
  },
  "QF-NVR16-4T": {
    src: "https://images.pexels.com/photos/30554249/pexels-photo-30554249.jpeg",
    alt: "Security monitoring equipment",
  },
  "QF-NVR32-8T": {
    src: "https://images.pexels.com/photos/33988254/pexels-photo-33988254.jpeg",
    alt: "Professional video surveillance setup",
  },
  "QF-HDD8T-SV": {
    src: "https://images.pexels.com/photos/13422379/pexels-photo-13422379.jpeg",
    alt: "Security camera mounted outside a building",
  },
  "QF-DB2K-CHM": {
    src: "https://images.pexels.com/photos/38805568/pexels-photo-38805568.jpeg",
    alt: "Close-up of a modern security camera",
  },
  "QF-FLC3K-2X": {
    src: "https://images.pexels.com/photos/6570858/pexels-photo-6570858.jpeg",
    alt: "Security camera overlooking a property",
  },
  "QF-INT7-2W": {
    src: "https://images.pexels.com/photos/5589597/pexels-photo-5589597.jpeg",
    alt: "Outdoor surveillance camera",
  },
  "QF-PSW8-120": {
    src: "https://images.pexels.com/photos/28117882/pexels-photo-28117882.jpeg",
    alt: "Security camera detail",
  },
  "QF-CAT6-305": {
    src: "https://images.pexels.com/photos/29291981/pexels-photo-29291981.jpeg",
    alt: "Professional CCTV camera installation",
  },
  "QF-INJ60-AT": {
    src: "https://images.pexels.com/photos/7463021/pexels-photo-7463021.jpeg",
    alt: "Security camera mounted on a wall",
  },
  "QF-UPS1500-R": {
    src: "https://images.pexels.com/photos/33104381/pexels-photo-33104381.jpeg",
    alt: "Contemporary video surveillance camera",
  },
  "QF-JB-ALU": {
    src: "https://images.pexels.com/photos/17104555/pexels-photo-17104555.jpeg",
    alt: "Security monitoring camera in use",
  },
};

export const productImageGallery: ProductImage[] = [
  {
    src: "https://images.pexels.com/photos/13422379/pexels-photo-13422379.jpeg",
    alt: "Security camera mounted outside a building",
  },
  {
    src: "https://images.pexels.com/photos/38805568/pexels-photo-38805568.jpeg",
    alt: "Close-up of a modern security camera",
  },
  {
    src: "https://images.pexels.com/photos/6570858/pexels-photo-6570858.jpeg",
    alt: "Security camera overlooking a property",
  },
  {
    src: "https://images.pexels.com/photos/5589597/pexels-photo-5589597.jpeg",
    alt: "Outdoor surveillance camera",
  },
  {
    src: "https://images.pexels.com/photos/28117882/pexels-photo-28117882.jpeg",
    alt: "Security camera detail",
  },
  {
    src: "https://images.pexels.com/photos/29291981/pexels-photo-29291981.jpeg",
    alt: "Professional CCTV camera installation",
  },
  {
    src: "https://images.pexels.com/photos/7463021/pexels-photo-7463021.jpeg",
    alt: "Security camera mounted on a wall",
  },
  {
    src: "https://images.pexels.com/photos/33104381/pexels-photo-33104381.jpeg",
    alt: "Contemporary video surveillance camera",
  },
  {
    src: "https://images.pexels.com/photos/17104555/pexels-photo-17104555.jpeg",
    alt: "Security monitoring camera in use",
  },
  {
    src: "https://images.pexels.com/photos/29280895/pexels-photo-29280895.jpeg",
    alt: "Close-up of surveillance hardware",
  },
  {
    src: "https://images.pexels.com/photos/11028886/pexels-photo-11028886.jpeg",
    alt: "Security camera watching an entrance",
  },
  {
    src: "https://images.pexels.com/photos/33104382/pexels-photo-33104382.jpeg",
    alt: "Outdoor CCTV camera system",
  },
];

export const products: Product[] = [
  // ---------- Dome Cameras ----------
  {
    sku: "QF-DM4K-08",
    name: "4K Dome Camera, Vandal Housing",
    category: "Dome Cameras",
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
    category: "Dome Cameras",
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
    sku: "QF-DM8M-MOT",
    name: "8MP Motorised Dome, 2.7 to 13.5mm",
    category: "Dome Cameras",
    art: "dome",
    blurb:
      "Framed from the app instead of a ladder. One SKU covers a doorway and a car park, which is why installers stock it deep.",
    specs: [
      ["Sensor", "8MP, 3840 x 2160"],
      ["Lens", "2.7 to 13.5mm motorised zoom"],
      ["Field of view", "112 to 42 degrees"],
      ["Night range", "40m smart IR"],
      ["Focus", "Remote motorised, one touch"],
      ["Power", "PoE 802.3af or 12V DC"],
      ["Rating", "IP67, IK10 vandal"],
    ],
    headline: ["8MP", "5x motorised"],
    msrp: 199,
    moq: 8,
    casePack: 8,
    stock: 1980,
    lead: "Ships same day",
    tiers: [
      { min: 8, unit: 90 },
      { min: 32, unit: 81.5 },
      { min: 96, unit: 73.5 },
      { min: 320, unit: 66 },
      { min: 960, unit: 59 },
    ],
  },

  // ---------- Bullet Cameras ----------
  {
    sku: "QF-BL5M-04",
    name: "5MP Bullet Camera, Colour Night",
    category: "Bullet Cameras",
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
    category: "Bullet Cameras",
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
    sku: "QF-LPR8M-60",
    name: "8MP LPR Bullet, Plate Capture",
    category: "Bullet Cameras",
    art: "lpr",
    blurb:
      "Reads a plate at 60mph in the dark, with the shutter and IR tuned for retroreflective plates rather than faces. Our highest-margin bullet.",
    specs: [
      ["Sensor", "8MP, 1/1.8in starlight"],
      ["Capture speed", "Plates to 60mph"],
      ["Lens", "8 to 32mm motorised"],
      ["Read range", "6 to 30m per lane"],
      ["Output", "Plate string over ONVIF and HTTP"],
      ["Power", "PoE+ 802.3at"],
      ["Rating", "IP67, IK10"],
    ],
    headline: ["8MP", "60mph plates"],
    msrp: 549,
    moq: 4,
    casePack: 4,
    stock: 720,
    lead: "Ships same day",
    badge: "Hot",
    tiers: [
      { min: 4, unit: 248 },
      { min: 16, unit: 228 },
      { min: 48, unit: 209 },
      { min: 160, unit: 191 },
      { min: 480, unit: 174 },
    ],
  },

  // ---------- PTZ & Panoramic ----------
  {
    sku: "QF-PTZ25X",
    name: "PTZ Speed Dome, 25x Optical Zoom",
    category: "PTZ & Panoramic",
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
    sku: "QF-PTZ4M-MINI",
    name: "4MP Mini PTZ, 4x Auto Track",
    category: "PTZ & Panoramic",
    art: "ptz",
    blurb:
      "PTZ behaviour on a residential budget and a residential bracket. Moves in volume through retail because it fits a domestic soffit.",
    specs: [
      ["Sensor", "4MP, 2560 x 1440"],
      ["Zoom", "4x optical, 2.8 to 12mm"],
      ["Rotation", "355 degree pan, 90 degree tilt"],
      ["Tracking", "Auto-track with return to home"],
      ["Night range", "50m IR"],
      ["Power", "PoE 802.3af or 12V DC"],
      ["Rating", "IP66"],
    ],
    headline: ["4MP", "4x auto-track"],
    msrp: 259,
    moq: 6,
    casePack: 6,
    stock: 1340,
    lead: "Ships same day",
    badge: "Sale",
    tiers: [
      { min: 6, unit: 117 },
      { min: 24, unit: 106 },
      { min: 72, unit: 95.5 },
      { min: 240, unit: 85.5 },
      { min: 720, unit: 76.5 },
    ],
  },
  {
    sku: "QF-FSH12-360",
    name: "12MP Fisheye, 360 Degree Panoramic",
    category: "PTZ & Panoramic",
    art: "fisheye",
    blurb:
      "One ceiling position instead of four corners. Dewarps to panorama or quad view in the recorder, so the licence count stays at one.",
    specs: [
      ["Sensor", "12MP, 4000 x 3000"],
      ["Coverage", "360 degrees, single ceiling point"],
      ["Dewarp", "In camera, in NVR and in client"],
      ["Night range", "15m IR"],
      ["Audio", "Microphone and speaker"],
      ["Power", "PoE 802.3af"],
      ["Rating", "IP67, IK10"],
    ],
    headline: ["12MP", "360 degrees"],
    msrp: 379,
    moq: 6,
    casePack: 6,
    stock: 940,
    lead: "Ships same day",
    tiers: [
      { min: 6, unit: 171 },
      { min: 24, unit: 155 },
      { min: 72, unit: 140 },
      { min: 240, unit: 126 },
      { min: 720, unit: 113 },
    ],
  },

  // ---------- Recorders & Storage ----------
  {
    sku: "QF-NVR16-4T",
    name: "16-Channel NVR, 4TB Fitted",
    category: "Recorders & Storage",
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
    sku: "QF-NVR32-8T",
    name: "32-Channel NVR, 8TB, RAID Capable",
    category: "Recorders & Storage",
    art: "nvr",
    blurb:
      "The head end for a site that has outgrown a sixteen. Four bays, RAID 1 or 5, and a redundant record path so one drive does not lose the month.",
    specs: [
      ["Channels", "32 IP, up to 12MP each"],
      ["Storage", "8TB fitted, 4 bays, 64TB max"],
      ["RAID", "0, 1, 5 and 10"],
      ["Throughput", "320 Mbps in, 160 out"],
      ["Outputs", "Dual HDMI 4K, spot monitor"],
      ["Network", "2 x Gigabit, failover or load balance"],
      ["Rack", "1.5U with ears in the box"],
    ],
    headline: ["32 ch", "8TB RAID"],
    msrp: 1149,
    moq: 2,
    casePack: 2,
    stock: 380,
    lead: "Ships same day",
    tiers: [
      { min: 2, unit: 518 },
      { min: 8, unit: 476 },
      { min: 24, unit: 437 },
      { min: 80, unit: 399 },
      { min: 240, unit: 362 },
    ],
  },
  {
    sku: "QF-HDD8T-SV",
    name: "8TB Surveillance Drive, 24/7 Rated",
    category: "Recorders & Storage",
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

  // ---------- Entry & Lighting ----------
  {
    sku: "QF-DB2K-CHM",
    name: "2K Video Doorbell, Chime Included",
    category: "Entry & Lighting",
    art: "doorbell",
    blurb:
      "Battery or hardwired, with a head-to-toe square view. The bundled chime is what keeps the returns down.",
    specs: [
      ["Resolution", "2K, 2560 x 1920"],
      ["View", "166 degrees, square head-to-toe"],
      ["Power", "Battery or 8 to 24V AC"],
      ["Storage", "microSD, NVR or cloud"],
      ["Detection", "Human filter, package alert"],
      ["In the box", "Chime, wedge, screw kit"],
    ],
    headline: ["2K", "Chime in box"],
    msrp: 179,
    moq: 10,
    casePack: 10,
    stock: 2260,
    lead: "Ships same day",
    badge: "New",
    tiers: [
      { min: 10, unit: 81 },
      { min: 40, unit: 73.5 },
      { min: 120, unit: 66 },
      { min: 400, unit: 59.5 },
      { min: 1200, unit: 53 },
    ],
  },
  {
    sku: "QF-FLC3K-2X",
    name: "3K Floodlight Camera, 3000 Lumen",
    category: "Entry & Lighting",
    art: "floodlight",
    blurb:
      "Two adjustable heads and a 105 decibel siren. Sells hardest between October and February, so book it early.",
    specs: [
      ["Resolution", "3K, 2880 x 1620"],
      ["Light output", "3000 lumen, two heads"],
      ["Siren", "105 decibel, strobe linked"],
      ["Detection", "PIR plus human classification"],
      ["Power", "Hardwired 120V"],
      ["Rating", "IP65"],
    ],
    headline: ["3K", "3000 lumen"],
    msrp: 229,
    moq: 8,
    casePack: 8,
    stock: 1420,
    lead: "Ships same day",
    badge: "Sale",
    tiers: [
      { min: 8, unit: 103.5 },
      { min: 32, unit: 94 },
      { min: 96, unit: 84.5 },
      { min: 320, unit: 76 },
      { min: 960, unit: 68 },
    ],
  },
  {
    sku: "QF-INT7-2W",
    name: "7in Video Intercom, Two-Wire Kit",
    category: "Entry & Lighting",
    art: "intercom",
    blurb:
      "Retrofits onto the two wires already in the wall, which turns a two-day rewire into a morning. Sells into apartment blocks all year.",
    specs: [
      ["Monitor", "7in touch, 1024 x 600"],
      ["Door station", "2MP, 130 degrees, IK08"],
      ["Wiring", "Two-wire, non-polarised"],
      ["Expansion", "Up to 4 monitors, 2 stations"],
      ["Unlock", "Relay, card and app"],
      ["Recording", "Snapshot and clip to microSD"],
    ],
    headline: ["7in", "Two-wire"],
    msrp: 289,
    moq: 6,
    casePack: 6,
    stock: 1180,
    lead: "Ships same day",
    tiers: [
      { min: 6, unit: 130 },
      { min: 24, unit: 118 },
      { min: 72, unit: 106 },
      { min: 240, unit: 95.5 },
      { min: 720, unit: 85.5 },
    ],
  },

  // ---------- Cabling & Power ----------
  {
    sku: "QF-PSW8-120",
    name: "8-Port PoE Switch, 120W Budget",
    category: "Cabling & Power",
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
    sku: "QF-CAT6-305",
    name: "Cat6 Outdoor Cable, 305m Box",
    category: "Cabling & Power",
    art: "cable",
    blurb:
      "A UV-stable jacket on a pull box that does not tangle. Add it to any camera order and the installer stops calling you.",
    specs: [
      ["Length", "305m, 1000ft pull box"],
      ["Conductor", "24AWG solid CCA"],
      ["Jacket", "UV-stable outdoor PE"],
      ["Bandwidth", "550MHz tested"],
      ["PoE", "Rated for 802.3at runs to 100m"],
      ["Colour", "Black or white"],
    ],
    headline: ["305m", "Outdoor PE"],
    msrp: 179,
    moq: 4,
    casePack: 4,
    stock: 1180,
    lead: "Ships same day",
    tiers: [
      { min: 4, unit: 79 },
      { min: 16, unit: 72 },
      { min: 48, unit: 65 },
      { min: 160, unit: 58.5 },
      { min: 480, unit: 52 },
    ],
  },
  {
    sku: "QF-INJ60-AT",
    name: "60W PoE++ Injector, Single Port",
    category: "Cabling & Power",
    art: "injector",
    blurb:
      "What you reach for when a PTZ or a heated housing will not run off the switch. Cheap insurance against a second site visit.",
    specs: [
      ["Output", "60W, 802.3bt Type 3"],
      ["Ports", "1 in, 1 out, gigabit"],
      ["Protection", "Surge, short and overload"],
      ["Distance", "100m at full gigabit"],
      ["Housing", "Metal, wall mountable"],
    ],
    headline: ["60W", "802.3bt"],
    msrp: 69,
    moq: 20,
    casePack: 20,
    stock: 3960,
    lead: "Ships same day",
    tiers: [
      { min: 20, unit: 31 },
      { min: 80, unit: 28 },
      { min: 240, unit: 25.2 },
      { min: 800, unit: 22.6 },
      { min: 2400, unit: 20.2 },
    ],
  },
  {
    sku: "QF-UPS1500-R",
    name: "1500VA Rack UPS, Pure Sine",
    category: "Cabling & Power",
    art: "ups",
    blurb:
      "Keeps the recorder and the switch alive through a brownout, which is when most drives get corrupted. The upsell that pays for itself once.",
    specs: [
      ["Capacity", "1500VA, 900W"],
      ["Waveform", "Pure sine wave"],
      ["Runtime", "18 minutes at half load"],
      ["Form", "2U rack or tower"],
      ["Management", "USB, SNMP card slot"],
      ["Outlets", "8 battery backed"],
    ],
    headline: ["1500VA", "Pure sine"],
    msrp: 429,
    moq: 4,
    casePack: 4,
    stock: 640,
    lead: "Ships same day",
    badge: "Wholesale Pack",
    tiers: [
      { min: 4, unit: 194 },
      { min: 16, unit: 176 },
      { min: 48, unit: 159 },
      { min: 160, unit: 143 },
      { min: 480, unit: 128 },
    ],
  },
  {
    sku: "QF-JB-ALU",
    name: "Aluminium Junction Box and Pole Kit",
    category: "Cabling & Power",
    art: "mount",
    blurb:
      "The part nobody remembers to order until the van is on site. Fits our domes, turrets and bullets on one bolt pattern.",
    specs: [
      ["Material", "Die-cast aluminium, powder coat"],
      ["Fit", "Dome, turret and bullet, one pattern"],
      ["Gland", "IP66 cable gland fitted"],
      ["Pole kit", "Stainless bands, 40 to 130mm"],
      ["Rating", "IP66, UV stable"],
    ],
    headline: ["IP66", "One pattern"],
    msrp: 39,
    moq: 24,
    casePack: 24,
    stock: 5820,
    lead: "Ships same day",
    tiers: [
      { min: 24, unit: 17.5 },
      { min: 96, unit: 15.9 },
      { min: 288, unit: 14.3 },
      { min: 960, unit: 12.8 },
      { min: 2880, unit: 11.5 },
    ],
  },
];

export const tierNames = [
  "Trade",
  "Stockist",
  "Dealer",
  "Distributor",
  "Container",
] as const;

export function tierIndexFor(product: Product, qty: number): number {
  let index = 0;
  product.tiers.forEach((tier, i) => {
    if (qty >= tier.min) index = i;
  });
  return index;
}

export function unitPriceFor(product: Product, qty: number): Tier {
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
      .reduce((sum, p) => sum + p.stock, 0),
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
