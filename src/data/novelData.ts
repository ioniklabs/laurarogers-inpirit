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
  sfxColor: 'monochrome' | 'dark' | 'light';
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
  coordinates: { x: number; y: number };
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
  tagline: "CLASSIFIED DOSSIER // HIGH FREQUENCY DIVIDED CITY SYSTEM",
  synopsis: "RESTRICTED FILE: In 1964, intelligence operations confirmed a physical split in urban infrastructure. Tier 1 ('The Stratum') ascended into high-altitude skies using vacuum-core energy arrays. Below, Tier 0 ('The Sub-Grid') operates under heavy smog and intercepted radio surveillance. 17-year-old wiretapper Nova uncovers classified signals threatening both tiers.",
  author: "Jules Vance",
  serialFrequency: "Weekly Clearance Log • Every Friday",
  nextReleaseDate: "2025-05-23T00:00:00Z",
};

export const CHAPTERS: Chapter[] = [
  {
    slug: "chapter-1-the-frequency-theft",
    number: 1,
    title: "The Frequency Theft",
    subtitle: "Classification: UNCLASSIFIED / FREE ACCESS",
    releaseDate: "2025-05-02",
    isFree: true,
    wordCount: 3420,
    summary: "Nova picks up an illicit high-frequency Chrono signal echoing from the Stratum observation tower, revealing a fatal grid drop scheduled for midnight.",
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
    cipherHint: "CLASSIFIED CIPHER FOUND ON TAPE: 'SUBGRID-VIP'"
  },
  {
    slug: "chapter-2-the-stratum-gate",
    number: 2,
    title: "The Stratum Gate",
    subtitle: "Classification: UNCLASSIFIED / FREE ACCESS",
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
    cipherHint: "CLASSIFIED CIPHER AT GATE-09: 'CRYSTAL-1964'"
  },
  {
    slug: "chapter-3-secrets-of-the-vacuum-core",
    number: 3,
    title: "Secrets of the Vacuum Core",
    subtitle: "Classification: RESTRICTED ACCESS",
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
    cipherHint: "CLASSIFIED CIPHER IN CORE: 'STERLING-ECHO'"
  },
  {
    slug: "chapter-4-the-frequency-war",
    number: 4,
    title: "The Frequency War",
    subtitle: "Classification: TOP SECRET / COMING FRIDAY",
    releaseDate: "2025-05-23",
    isFree: false,
    wordCount: 4500,
    summary: "The Sub-Grid launches a pirate radio broadcast while Stratum enforcers mobilize heavy mechanical walkers.",
    content: [
      "RESTRICTED CONTENT. Chapter 4 releases Friday, May 23. Request clearance to read 24 hours early!"
    ]
  }
];

export const COMIC_PANELS: ComicPanel[] = [
  {
    id: 1,
    issueNumber: 0,
    panelTitle: "SURVEILLANCE PANEL 1: SUB-GRID SECTOR 4",
    sfx: "STATIC / 98.4 MHZ",
    sfxColor: "monochrome",
    characterName: "SURVEILLANCE LOG",
    dialogue: "1964. The atomic age arrived early... but only for those who could afford the altitude.",
    narrativeText: "Sub-Grid Level -120m. Heavy sulfur smog detected.",
    bgGradient: "from-zinc-950 via-neutral-900 to-black",
    tier: "Tier 0"
  },
  {
    id: 2,
    issueNumber: 0,
    panelTitle: "SURVEILLANCE PANEL 2: INTERCEPTED WORKSHOP",
    sfx: "CLICK-CLACK",
    sfxColor: "monochrome",
    characterName: "SUBJECT: NOVA",
    dialogue: "Jax! Hand me the 50mF capacitor! The Stratum broadcast is shifting to frequency 94.7!",
    narrativeText: "Subject adjusting vacuum tube cathode tuning dial.",
    bgGradient: "from-stone-950 via-neutral-900 to-zinc-950",
    tier: "Tier 0"
  },
  {
    id: 3,
    issueNumber: 0,
    panelTitle: "SURVEILLANCE PANEL 3: STRATUM SKYLINE",
    sfx: "HIGH HUM / 104.2 MHZ",
    sfxColor: "dark",
    characterName: "SUBJECT: JAX",
    dialogue: "Look up. The Stratum Grand Casino is drawing double power again. The lights down here are dipping!",
    narrativeText: "Stratum pylons detected at +800m altitude.",
    bgGradient: "from-black via-zinc-900 to-stone-900",
    tier: "Tier 1"
  },
  {
    id: 4,
    issueNumber: 0,
    panelTitle: "SURVEILLANCE PANEL 4: CLASSIFIED AUDIO REEL",
    sfx: "VOOM / ENCRYPTED",
    sfxColor: "monochrome",
    characterName: "BUREAU ENFORCER",
    dialogue: "Attention Enforcers: Prepare Sector 7 blackout. Chrono-Crystal extraction level must reach 99%.",
    narrativeText: "Audio reel locked on encrypted frequency channel.",
    bgGradient: "from-neutral-950 via-stone-900 to-black",
    tier: "Tier 1",
    hiddenCipher: "1964-CRYSTAL"
  },
  {
    id: 5,
    issueNumber: 0,
    panelTitle: "SURVEILLANCE PANEL 5: DISPATCH LOG",
    sfx: "SIGNAL LOCK",
    sfxColor: "light",
    characterName: "SUBJECT: NOVA",
    dialogue: "They're gonna freeze out the infirmaries... Not on my watch. Grab the gear. We scale the grid tower TONIGHT!",
    narrativeText: "Continued in File: Chapter 1 - The Frequency Theft.",
    bgGradient: "from-zinc-900 via-neutral-900 to-black",
    tier: "Tier 0"
  }
];

export const MAP_LOCATIONS: MapLocation[] = [
  // Tier 0
  {
    id: "loc-sub-1",
    name: "Sector 4 Slums [Zone A]",
    tier: 0,
    coordinates: { x: 22, y: 35 },
    tagline: "Wiretappers Union Operations",
    description: "Subterranean grid labyrinth constructed around steel support pylons. Bootleg cathode workshops and illegal radio relays.",
    dangers: "High frequency sweepers, unshielded high-voltage leaks.",
    keyFaction: "Wiretappers Union",
    classifiedNote: "Frequency 104.2 FM leaks audio from Stratum Executive Lounge.",
    cipherCode: "SUBGRID-VIP"
  },
  {
    id: "loc-sub-2",
    name: "The Sulfur Drains [Zone B]",
    tier: 0,
    coordinates: { x: 58, y: 72 },
    tagline: "Subterranean Waste Canals",
    description: "Canals carrying chemical runoff from Stratum quantum vacuum engines. Location of underground resistance cells.",
    dangers: "Toxic vapors, automated security drones.",
    keyFaction: "The Underground Circuit",
    classifiedNote: "Use polarized goggles to spot laser tripwires.",
    audioFrequency: "88.3 MHz"
  },
  {
    id: "loc-sub-3",
    name: "Gate-09 Base Depot",
    tier: 0,
    coordinates: { x: 80, y: 45 },
    tagline: "Heavy Freight Conduit Shaft",
    description: "Massive mechanical lift shaft transporting raw Chrono-Ore up to Tier 1.",
    dangers: "Heavy mechanical gear hazards, armed sentries.",
    keyFaction: "Chrono Bureau Guards",
    classifiedNote: "Passcode cipher recorded in File #2."
  },

  // Tier 1
  {
    id: "loc-strat-1",
    name: "Stratum Atrium [Level 1]",
    tier: 1,
    coordinates: { x: 30, y: 25 },
    tagline: "High-Altitude Executive Dome",
    description: "A glass dome with artificial daylight, scrubbed ozone air, and high-society galas.",
    dangers: "Biometric scanners, social surveillance.",
    keyFaction: "High Council of 1964",
    classifiedNote: "Exhaust scrubbers vent toxic runoff directly into Sub-Grid Sector 4."
  },
  {
    id: "loc-strat-2",
    name: "Chrono-Core Central",
    tier: 1,
    coordinates: { x: 65, y: 30 },
    tagline: "Vacuum Core Mainframe",
    description: "Central facility housing multi-story cathode tubes containing glowing Chrono-Crystals.",
    dangers: "Temporal distortion fields, Chrono-Stunner squads.",
    keyFaction: "Dr. Sterling's Research Division",
    classifiedNote: "Overclocking core causes temporal echo anomalies in subterranean sectors.",
    cipherCode: "STERLING-ECHO"
  },
  {
    id: "loc-strat-3",
    name: "Grand Prism Deck",
    tier: 1,
    coordinates: { x: 45, y: 60 },
    tagline: "Executive Observation Deck",
    description: "Floating structure drawing gigawatts of electricity directly from Sub-Grid Sector 7.",
    dangers: "Security enforcers, temporal lock grids.",
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
    role: "Radio Intercept Hacker",
    bio: "17-year-old wiretapper raised in Sector 4. Constructed shortwave receivers from scavenged brass and cathode vacuum tubes.",
    quote: "‘They locked us in the dark, but forgot we know how to wire the lights.’",
    secretInfo: "Nova's estranged mother is Dr. Eleanor Sterling, lead scientist at Chrono-Core Central."
  },
  {
    id: "dossier-jax",
    name: "Jax Miller",
    category: "Character",
    tierAffiliation: "Sub-Grid (Tier 0)",
    role: "EMP Specialist",
    bio: "Former apprentice engineer at Gate-09 demoted for smuggling vacuum tubes to subterranean clinics.",
    quote: "‘If it has gears or glass tubes, I can bypass it.’",
    secretInfo: "Jax holds a stolen keycard to the Stratum Freight Elevator."
  },
  {
    id: "dossier-sterling",
    name: "Dr. Eleanor Sterling",
    category: "Character",
    tierAffiliation: "Stratum (Tier 1)",
    role: "Chief Architect of Chrono-Core",
    bio: "Lead physicist who harnessed temporal resonance in 1958. Directs Stratum energy distribution.",
    quote: "‘Progress requires sacrifice. The lower grid is merely the anchor.’",
    secretInfo: "Dr. Sterling is using Chrono-Crystals to construct a temporal bridge.",
    requiredCipher: "STERLING-ECHO"
  },
  {
    id: "dossier-bureau",
    name: "The Chrono Bureau",
    category: "Faction",
    tierAffiliation: "Stratum (Tier 1)",
    role: "Grid Enforcement Agency",
    bio: "Paramilitary force equipped with frequency jammer batons and temporal suppression rifles.",
    quote: "‘Order above all. Silence below.’",
    secretInfo: "Monitors all radio transmissions exceeding 100 Megahertz."
  },
  {
    id: "dossier-tech-crystals",
    name: "Chrono-Crystals",
    category: "Tech",
    tierAffiliation: "Unclassified",
    role: "Temporal Energy Catalyst",
    bio: "Glowing mineral extracted from subterranean mines in 1960. Distorts local spacetime under cathode excitation.",
    quote: "‘A single gram can light a city... or erase five seconds of history.’",
    secretInfo: "Over-extraction destabilizes tectonic structures.",
    requiredCipher: "1964-CRYSTAL"
  }
];

export const SECRET_CIPHERS: SecretCipher[] = [
  {
    code: "SUBGRID-VIP",
    title: "Wiretapper Emergency Frequencies Unlocked",
    revealedMessage: "CLASSIFIED MEMO #409: Sub-Grid Resistance meeting location verified at Sulfur Drain Station 3. VIP pass authorized."
  },
  {
    code: "1964-CRYSTAL",
    title: "Chrono-Crystal Excavation File Unlocked",
    revealedMessage: "RESTRICTED DOCUMENT: Chrono-Crystals were not mined... they dropped from an unknown future timeline during a 1960 anomaly."
  },
  {
    code: "STERLING-ECHO",
    title: "Dr. Sterling Private Audio Log Unlocked",
    revealedMessage: "INTERCEPTED AUDIO LOG: 'If Nova finds out what the core is really doing, she won't just shut down the Stratum—she will break the timeline.'"
  }
];
