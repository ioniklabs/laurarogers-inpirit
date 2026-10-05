export interface Chapter {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  releaseDate: string;
  isFree: boolean;
  wordCount: number;
  summary: string;
  content: string[];
  cipherHint?: string;
}

export interface ComicPanel {
  id: number;
  issueNumber: number;
  panelTitle: string;
  sfx: string;
  sfxColor: 'cyan' | 'red' | 'yellow';
  characterName: string;
  dialogue: string;
  narrativeText: string;
  bgGradient: string;
  tier: 'Tier 0' | 'Tier 1';
  hiddenCipher?: string;
}

export interface MapLocation {
  id: string;
  name: string;
  tier: 0 | 1; // 0 = Sub-Grid, 1 = Stratum
  coordinates: { x: number; y: number }; // Percentage for map placement
  tagline: string;
  description: string;
  dangers: string;
  keyFaction: string;
  classifiedNote?: string;
  cipherCode?: string;
  audioFrequency?: string;
}

export interface Dossier {
  id: string;
  name: string;
  category: 'Character' | 'Faction' | 'Tech' | 'Location';
  tierAffiliation: 'Sub-Grid (Tier 0)' | 'Stratum (Tier 1)' | 'Unclassified';
  role: string;
  bio: string;
  quote: string;
  secretInfo: string;
  requiredCipher?: string;
}

export interface SecretCipher {
  code: string;
  title: string;
  revealedMessage: string;
  unlockedDossierId?: string;
}

export const NOVEL_META = {
  title: "CHRONO-CLASS: 1964",
  tagline: "High Tech. Low Frequencies. Divided World.",
  synopsis: "In 1964, the world split in two. The elite ascended to 'The Stratum'—a pristine skyline powered by Chrono-Crystals and vacuum-tube supercomputers. Below them lies 'The Sub-Grid'—a smog-choked underground where teenage tinkerers hack high-frequency radio waves to fight for survival. When 17-year-old wiretapper Nova uncovers a secret transmission from 1984, she triggers a rebellion that threatens to collapse both tiers.",
  author: "Jules Vance",
  serialFrequency: "New Chapter Every Friday",
  nextReleaseDate: "2025-05-23T00:00:00Z", // Scheduled release date for Chapter 4
};

export const CHAPTERS: Chapter[] = [
  {
    slug: "chapter-1-the-frequency-theft",
    number: 1,
    title: "The Frequency Theft",
    subtitle: "In the Sub-Grid, noise is currency.",
    releaseDate: "2025-05-02",
    isFree: true,
    wordCount: 3420,
    summary: "Nova picks up a illicit high-frequency Chrono signal echoing from the Stratum observation tower, revealing a fatal grid drop scheduled for midnight.",
    content: [
      "The vacuum tube inside Nova’s makeshift receiver hummed like a angry hornet in a Mason jar. Standard 1964 radio dials only went up to 108 Megahertz, but Nova’s custom copper coil—rigged from scavenged neon signage in Sector 4—could slice through the Stratum’s encrypted sub-ether channels.",
      "Out the window of her third-story Sub-Grid tenement, the world was cast in greasy amber fog. Overhead, miles above the rust-speckled catwalks, hung the giant steel pylons of The Stratum. Up there, the elite lived in perpetual midday sunshine created by artificial Chrono-Lamps, breathing oxygen scrubbed through silver coils, completely oblivious to the three million souls sludging through the wet neon streets below.",
      "‘You’re gonna fry the transformer again, Nova,’ muttered Jax, leaning against the workbench while polishing his brass-plated welding goggles. ‘The Bureau patrol guards have frequency sweepers mounted on their hover-scooters tonight.’",
      "‘Let them sweep,’ Nova whispered, adjusting her Bakelite tuning knob by a fraction of a millimeter. ‘Listen to this.’",
      "A high-pitched chime cut through the static—a pure, crystalline pulse that sounded like glass singing under a violin bow. The Chrono-Crystal signal. But behind it was a human voice, faint and modulated through heavy cathode filtering.",
      "“Project Echo-64 is authorized. Sub-Grid Power Sector 7 will be drained to 12% capacity at midnight to stabilize the Stratum Grand Casino arrays. Casualties expected in subterranean hospitals: uncalculated.”",
      "Jax froze, the rag dropping from his fingers. ‘They’re shutting down the power grid? Sector 7 includes the infirmaries, Nova!’",
      "‘Not if we broadcast this audio tape across the city first,’ Nova said, snapping the reel-to-reel recorder shut with a sharp CLICK. ‘Get your wiretapper kit. We’re climbing the Stratum drop-conduit.’"
    ],
    cipherHint: "SECRET CIPHER FOUND ON TAPE: 'SUBGRID-VIP'"
  },
  {
    slug: "chapter-2-the-stratum-gate",
    number: 2,
    title: "The Stratum Gate",
    subtitle: "Gravity is lighter when you have money.",
    releaseDate: "2025-05-09",
    isFree: true,
    wordCount: 3890,
    summary: "Disguised as maintenance tech crew, Nova and Jax scale the massive gravity elevator shaft to infiltrate Tier 1.",
    content: [
      "Scaling the primary elevator shaft of Gate-09 felt like climbing a mechanical titan’s spine. Massive brass cogs the size of three-story buildings turned with slow, rhythmic thuds, sending vibrations down the steel cables.",
      "Nova’s boots slipped on grease. Below her, the Sub-Grid looked like a sprawling sea of flickering amber dots and sulfur smog. Above, the underside of the Stratum shone with pristine white chrome plates and blinding blue mercury lamps.",
      "‘Remember,’ Jax hissed through his respirator mask. ‘The guards up here carry Chrono-Stunners. One hit and your nervous system thinks it’s stuck in last Tuesday.’",
      "‘I’m more worried about the automated turret scanners,’ Nova replied, pulling out her copper EMP pulse-grenade. ‘When I drop the line, hit the junction box.’",
      "As they pulled themselves onto the observation deck, the air suddenly changed. It didn’t smell like diesel or coal dust anymore. It smelled like crisp autumn rain and lavender perfume—the signature scent-synthesis of Tier 1."
    ],
    cipherHint: "CIPHER FOUND AT GATE-09: 'CRYSTAL-1964'"
  },
  {
    slug: "chapter-3-secrets-of-the-vacuum-core",
    number: 3,
    title: "Secrets of the Vacuum Core",
    subtitle: "A machine that remembers tomorrow.",
    releaseDate: "2025-05-16",
    isFree: false,
    wordCount: 4120,
    summary: "Deep inside the Stratum Mainframe, Nova uncovers the truth about the Chrono-Crystals: they aren't power sources, they are time containers.",
    content: [
      "The room was as big as a cathedral, filled floor to ceiling with thousands of glowing vacuum tubes the size of tree trunks. Inside each glass column, violet plasma swirled around glowing crystal shards.",
      "Dr. Sterling stood at the central console, wearing a white lab coat with gold embroidery. She wasn't looking at punch cards—she was typing into a holographic cathode-ray terminal.",
      "‘You shouldn't be here, Sub-Grid rat,’ Sterling said without turning around. ‘You think we extract your electricity out of spite? No. We feed the Chrono-Core so it can hold the rift open.’",
      "Nova stepped forward, clutching her pulse wrench. ‘What rift?’",
      "Sterling turned, revealing her eyes—pulsing with tiny glowing purple crystal specks. ‘The rift to twenty-twenty four. We aren't building a city, Nova. We are building a bridge out of time.’"
    ],
    cipherHint: "CIPHER FOUND IN CORE: 'STERLING-ECHO'"
  },
  {
    slug: "chapter-4-the-frequency-war",
    number: 4,
    title: "The Frequency War",
    subtitle: "When the sky begins to static.",
    releaseDate: "2025-05-23",
    isFree: false,
    wordCount: 4500,
    summary: "The Sub-Grid launches a pirate radio broadcast while Stratum enforcers mobilize heavy mechanical walkers.",
    content: [
      "COMING SOON! Chapter 4 releases Friday, May 23. Subscribe to the Transmission Bulletin to read 24 hours early!"
    ]
  }
];

export const COMIC_PANELS: ComicPanel[] = [
  {
    id: 1,
    issueNumber: 0,
    panelTitle: "PANEL 1: THE SUB-GRID AT NIGHT",
    sfx: "BZZZZT!",
    sfxColor: "cyan",
    characterName: "NARRATOR",
    dialogue: "1964. The atomic age arrived early... but only for those who could afford the altitude.",
    narrativeText: "Sector 4, Sub-Grid Level -120 meters.",
    bgGradient: "from-slate-950 via-purple-950 to-slate-900",
    tier: "Tier 0"
  },
  {
    id: 2,
    issueNumber: 0,
    panelTitle: "PANEL 2: NOVA'S WORKSHOP",
    sfx: "CLICK-CLACK!",
    sfxColor: "yellow",
    characterName: "NOVA",
    dialogue: "Jax! Hand me the 50mF capacitor! The Stratum broadcast is shifting to frequency 94.7!",
    narrativeText: "Nova tweaks the vacuum tube dials on her scavenged receiver.",
    bgGradient: "from-amber-950 via-slate-900 to-amber-900",
    tier: "Tier 0"
  },
  {
    id: 3,
    issueNumber: 0,
    panelTitle: "PANEL 3: THE STRATUM SKYLINE",
    sfx: "KZZZZT!",
    sfxColor: "cyan",
    characterName: "JAX",
    dialogue: "Look up. The Stratum Grand Casino is drawing double power again. The lights down here are dipping!",
    narrativeText: "High above, floating anti-gravity pylons hum with eerie blue energy.",
    bgGradient: "from-sky-950 via-cyan-950 to-slate-900",
    tier: "Tier 1"
  },
  {
    id: 4,
    issueNumber: 0,
    panelTitle: "PANEL 4: THE CLASSIFIED TRANSMISSION",
    sfx: "VOOM!",
    sfxColor: "red",
    characterName: "CHRONO-BUREAU VOICE",
    dialogue: "Attention Enforcers: Prepare Sector 7 blackout. Chrono-Crystal extraction level must reach 99%.",
    narrativeText: "The tape reel spins wildly as the encrypted frequency locks in.",
    bgGradient: "from-red-950 via-slate-900 to-purple-950",
    tier: "Tier 1",
    hiddenCipher: "1964-CRYSTAL"
  },
  {
    id: 5,
    issueNumber: 0,
    panelTitle: "PANEL 5: THE DECISION",
    sfx: "SHHH-KLACK!",
    sfxColor: "yellow",
    characterName: "NOVA",
    dialogue: "They're gonna freeze out the infirmaries... Not on my watch. Grab the gear. We scale the grid tower TONIGHT!",
    narrativeText: "To be continued in Chapter 1: The Frequency Theft...",
    bgGradient: "from-yellow-950 via-amber-950 to-slate-950",
    tier: "Tier 0"
  }
];

export const MAP_LOCATIONS: MapLocation[] = [
  // Tier 0 Locations
  {
    id: "loc-sub-1",
    name: "Sector 4 Neon Slums",
    tier: 0,
    coordinates: { x: 22, y: 35 },
    tagline: "Home of the Wiretappers Union",
    description: "A labyrinth of rusty cat walks, neon-lit noodle shops, and bootleg vacuum tube workshops built under the shadow of Pylon-09.",
    dangers: "Bureau frequency sweepers, rogue high-voltage leaks.",
    keyFaction: "Wiretappers Union",
    classifiedNote: "Frequency 104.2 FM leaks audio from Stratum Executive Lounge.",
    cipherCode: "SUBGRID-VIP"
  },
  {
    id: "loc-sub-2",
    name: "The Sulfur Drains",
    tier: 0,
    coordinates: { x: 58, y: 72 },
    tagline: "Industrial Wastewater & Underground Resistance",
    description: "Subterranean canals carrying cooling runoff from the Stratum's quantum vacuum engines. Home to secret rebel meetings.",
    dangers: "Toxic fumes, automated surveillance drones.",
    keyFaction: "The Underground Circuit",
    classifiedNote: "Use brass goggles to see UV laser alarms in Section B.",
    audioFrequency: "88.3 MHz"
  },
  {
    id: "loc-sub-3",
    name: "Gate-09 Conduit Base",
    tier: 0,
    coordinates: { x: 80, y: 45 },
    tagline: "The Heavy Freight Elevator",
    description: "The massive mechanical lift transporting raw minerals and Chrono-Ore up to Tier 1.",
    dangers: "Heavy machinery crush hazard, armed automated turrets.",
    keyFaction: "Chrono Bureau Guards",
    classifiedNote: "Maintenance door passcode cipher hidden in Chapter 2."
  },

  // Tier 1 Locations
  {
    id: "loc-strat-1",
    name: "The Stratum Skyline Atrium",
    tier: 1,
    coordinates: { x: 30, y: 25 },
    tagline: "Pristine High-Altitude Luxury",
    description: "A sprawling glass dome featuring artificial sunlight, gravity-defying parks, and high-society galas.",
    dangers: "Biometric scanners, high class social surveillance.",
    keyFaction: "High Council of 1964",
    classifiedNote: "Air scrubbing system vents directly into Sub-Grid Sector 4."
  },
  {
    id: "loc-strat-2",
    name: "Chrono-Core Central",
    tier: 1,
    coordinates: { x: 65, y: 30 },
    tagline: "Heart of the Time-Crystal Engine",
    description: "The top-secret facility housing giant vacuum core towers containing glowing Chrono-Crystals.",
    dangers: "Temporal distortion fields, Chrono-Stunner squads.",
    keyFaction: "Dr. Sterling's Research Division",
    classifiedNote: "Overclocking the core causes temporal echo anomalies in lower sectors.",
    cipherCode: "STERLING-ECHO"
  },
  {
    id: "loc-strat-3",
    name: "Grand Prism Casino & Observation Deck",
    tier: 1,
    coordinates: { x: 45, y: 60 },
    tagline: "Where the Elite Gamble with Time",
    description: "A staggering retro-futuristic casino floating over the clouds, drawing gigawatts of power directly from Sub-Grid Sector 7.",
    dangers: "Security enforcers, temporal lock-down grids.",
    keyFaction: "Chrono Bureau Executives",
    cipherCode: "CRYSTAL-1964"
  }
];

export const DOSSIERS: Dossier[] = [
  {
    id: "dossier-nova",
    name: "Nova Sterling",
    category: "Character",
    tierAffiliation: "Sub-Grid (Tier 0)",
    role: "Master Wiretapper & Radio Hacker",
    bio: "17-year-old orphan raised in Sector 4. Built her first shortwave receiver at age 10 out of brass radio scrap and glowing vacuum tubes.",
    quote: "‘They locked us in the dark, but forgot we know how to wire the lights.’",
    secretInfo: "Nova's estranged mother is Dr. Eleanor Sterling, lead scientist at Chrono-Core Central."
  },
  {
    id: "dossier-jax",
    name: "Jax Miller",
    category: "Character",
    tierAffiliation: "Sub-Grid (Tier 0)",
    role: "Mechanic & EMP Specialist",
    bio: "Former Apprentice Engineer at Gate-09 before being demoted for smuggling spare vacuum tubes to subterranean clinics.",
    quote: "‘If it has gears or glass tubes, I can bypass it.’",
    secretInfo: "Jax holds a stolen keycard to the Stratum Freight Elevator."
  },
  {
    id: "dossier-sterling",
    name: "Dr. Eleanor Sterling",
    category: "Character",
    tierAffiliation: "Stratum (Tier 1)",
    role: "Chief Architect of the Chrono-Core",
    bio: "Brilliant physicist who discovered how to harness temporal resonance in 1958. Oversees the Stratum power distribution.",
    quote: "‘Progress requires sacrifice. The lower grid is merely the anchor.’",
    secretInfo: "Dr. Sterling is using the Chrono-Crystals to build a bridge across decades.",
    requiredCipher: "STERLING-ECHO"
  },
  {
    id: "dossier-bureau",
    name: "The Chrono Bureau",
    category: "Faction",
    tierAffiliation: "Stratum (Tier 1)",
    role: "Paramilitary Enforcement & Grid Security",
    bio: "Armed enforcers dressed in sleek chrome-plated suits equipped with frequency jammer batons and temporal suppression rifles.",
    quote: "‘Order above all. Silence below.’",
    secretInfo: "The Bureau monitors all radio transmissions exceeding 100 Megahertz."
  },
  {
    id: "dossier-tech-crystals",
    name: "Chrono-Crystals",
    category: "Tech",
    tierAffiliation: "Unclassified",
    role: "Temporal Energy Catalyst",
    bio: "Rare glowing violet mineral discovered in deep subterranean mines in 1960. When subjected to vacuum-tube excitation, it distorts local spacetime.",
    quote: "‘A single gram can light a city... or erase five seconds of history.’",
    secretInfo: "Over-extraction destabilizes tectonic and temporal structures.",
    requiredCipher: "1964-CRYSTAL"
  }
];

export const SECRET_CIPHERS: SecretCipher[] = [
  {
    code: "SUBGRID-VIP",
    title: "Wiretapper Emergency Frequencies Unlocked",
    revealedMessage: "Transmission Log #409: Sub-Grid Resistance meeting location verified at Sulfur Drain Station 3. VIP pass activated!"
  },
  {
    code: "1964-CRYSTAL",
    title: "Chrono-Crystal Excavation File Unlocked",
    revealedMessage: "Classified Memorandum: Chrono-Crystals were not mined... they were dropped from a future timeline during an anomaly event in 1960."
  },
  {
    code: "STERLING-ECHO",
    title: "Dr. Sterling Private Audio Log Unlocked",
    revealedMessage: "Personal Journal Entry: 'If Nova ever finds out what the core is really doing, she won't just shut down the Stratum—she will break the entire timeline.'"
  }
];
