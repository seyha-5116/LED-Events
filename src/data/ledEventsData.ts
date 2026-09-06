import {
  Project,
  ServiceItem,
  WhyUsStrength,
  ProductionStep,
  BlogPost,
  MediaItem,
  ProductItem,
  EventInquiry,
} from '../types';

export const COMPANY_INFO = {
  name: 'LED Events',
  legalName: 'LED Events Cambodia',
  tagline: 'The Most Reliable Event Production System in Cambodia',
  establishedYear: 2012,
  teamCount: '30+',
  address: '#159A, Street 2011, Dei Thmey Village, Khmuonh Commune, Sen Sok District, Phnom Penh, Cambodia',
  shortAddress: '#159A, St 2011, Sen Sok, Phnom Penh',
  districtCity: 'Sen Sok, Phnom Penh, Cambodia',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=LED+Events+Cambodia+%23159A+Street+2011+Phnom+Penh',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=LED+Events+Cambodia+%23159A+Street+2011+Phnom+Penh',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=LED%20Events%20Cambodia%20159A%20Street%202011%20Sen%20Sok%20Phnom%20Penh&t=&z=15&ie=UTF8&iwloc=&output=embed',
  coordinates: {
    lat: 11.5833,
    lng: 104.8583,
    display: '11.5833° N, 104.8583° E',
  },
  phone: '015 999 235',
  phoneIntl: '+855 15 999 235',
  email: 'Info@ledevents.asia',
  whatsappUrl: 'https://wa.me/85515999235?text=Hello%20I%20want%20more%20information',
  telegramUrl: 'https://t.me/+85515999235',
  social: {
    facebook: 'https://www.facebook.com/ledevents2023',
    youtube: 'https://www.youtube.com/@ledevent-s',
    tiktok: 'https://www.tiktok.com/@led.events',
    linkedin: 'https://www.linkedin.com/in/led-events-7141b6406/',
  },
  heroVideo: '/hero-video.mp4',
  heroVideoFallback: 'https://ledevents.asia/storage/sections/1ylMRFMEVIk7ya7aylF8TFpXgoX41j7Q6gfBAelg.mov',
  heroPoster: '/hero-poster.jpg',
};

export const VERIFIED_STATS = [
  { label: 'Experience Since', value: '2012', suffix: '' },
  { label: 'Experienced Professionals', value: '30', suffix: '+' },
  { label: 'Core Technical Disciplines', value: '5', suffix: ' Systems' },
  { label: 'Reliable Live Show Uptime', value: '100', suffix: '%' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '4',
    slug: 'led-screen-rental',
    number: '01',
    title: 'LED Screen Rental',
    titleKm: 'ជួលអេក្រង់ LED',
    shortDesc: 'Provision of indoor and outdoor LED display screens, including installation and live technical operation.',
    fullDesc: 'We provide premier indoor and outdoor LED display screen rentals engineered for optimum brightness, seamless contrast, and ultra-high refresh rates. Ideal for stadium concerts, corporate conventions, exhibitions, weddings, festivals, and major national broadcasts.',
    image: 'https://ledevents.asia/storage/section-items/71C6jzSLylKz2T7Y4LCezOJkH7U6v8xG3XbZXyrR.jpg',
    gallery: [
      'https://ledevents.asia/storage/section-items/71C6jzSLylKz2T7Y4LCezOJkH7U6v8xG3XbZXyrR.jpg',
      'https://ledevents.asia/storage/section-items/gallery/PPvQ16L7qza7k4jdfM838Q7IkK72EMakfIwUl6vd.png',
      'https://ledevents.asia/storage/section-items/gallery/bsc6TqCipPtsdX1VksVBMB4yrPHA12R97GJ70vMq.jpg',
      'https://ledevents.asia/storage/section-items/gallery/YVHpHZdZBjhpKvzRWD48haXFoHsUegDg0g0HHh9l.jpg'
    ],
    features: [
      'High-resolution P2.6, P3.9, and P4.8 indoor/outdoor panels',
      'High refresh rates (3840Hz+) ensuring zero flicker on camera broadcasts',
      'Curved configuration capabilities (concave and convex)',
      'Heavy-duty ground support and certified fly-bar rigging',
      'Novastar professional processors with redundant signal backup'
    ],
    equipmentHighlights: [
      'Ultra-bright outdoor waterproof IP65 rated modules',
      'High-grade video matrix switchers & low-latency SDI routing',
      'Color calibration with true black SMD packaging'
    ]
  },
  {
    id: '5',
    slug: 'stage-rental',
    number: '02',
    title: 'Stage Rental',
    titleKm: 'សេវាជួលឆាក',
    shortDesc: 'Certified modular stage platforms, heavy-duty aluminum trusses, and custom stage structures for all event scales.',
    fullDesc: 'Customizable stage configurations engineered for structural safety, heavy weight capacities, and rapid deployment. We construct everything from high-profile corporate presentation stages to 40-meter wide outdoor festival mega-stages.',
    image: 'https://ledevents.asia/storage/section-items/GO8J3aMphCgNdGTZ1m4pjo7veTV9AwMueyekazI0.jpg',
    gallery: [
      'https://ledevents.asia/storage/section-items/GO8J3aMphCgNdGTZ1m4pjo7veTV9AwMueyekazI0.jpg',
      'https://ledevents.asia/storage/section-items/gallery/W3ks2SD0RTtuGTdpLkmXagC58NOU6XxQMeAgaVWS.png',
      'https://ledevents.asia/storage/section-items/gallery/Qd0IIBkQC2eA2frQ5sJibR15ZBmPGJK7V1azZ8yA.png',
      'https://ledevents.asia/storage/section-items/gallery/lDF9bT3nrE1gQ5tfF36XfWQvuA5bQgL1BUTHmpIz.png'
    ],
    features: [
      'Modular platform dimensions (1m x 2m & 1.22m x 2.44m units)',
      'Adjustable heights from 0.4m to 2.2m with micro-leveling leveling feet',
      'Heavy-duty aluminum roof systems & weatherproof side tarps',
      'Non-slip textured platforms with certified safety handrails and staircases',
      'Custom wings for audio line-arrays and LED screen integration'
    ],
    equipmentHighlights: [
      'Load tested up to 750 kg/m²',
      'High-grade aviation aluminum truss (F34 / F52 standard)',
      'Multi-tier catwalks and VIP performance platforms'
    ]
  },
  {
    id: '6',
    slug: 'sound-system',
    number: '03',
    title: 'Sound System',
    titleKm: 'ប្រព័ន្ធសំឡេង',
    shortDesc: 'High-quality professional audio equipment and acoustic engineering delivering pristine clarity and punch.',
    fullDesc: 'Complete line-array and sub-bass systems tuned to acoustic perfection. From speech clarity at high-level corporate symposiums to bone-shaking low end at major outdoor Kun Khmer and EDM music festivals.',
    image: 'https://ledevents.asia/storage/section-items/wgTNclaVkmXjwEIAgSFnZ0ofOM5YKxU7U8cYZ75E.jpg',
    gallery: [
      'https://ledevents.asia/storage/section-items/wgTNclaVkmXjwEIAgSFnZ0ofOM5YKxU7U8cYZ75E.jpg',
      'https://ledevents.asia/storage/section-items/gallery/eyCykokGP4iHBbpKgIwJe1lkwaoYsyoDuFEm546d.jpg',
      'https://ledevents.asia/storage/section-items/gallery/Xo15EIVNwZNt13CaP20LU80MDBDURjh7JGBwby8T.jpg'
    ],
    features: [
      'Active & passive line-array touring packages',
      'High-performance cardioid subwoofers for controlled bass punch',
      'Digital mixing consoles (Yamaha / Midas / Allen & Heath)',
      'UHF wireless microphone systems with RF coordination',
      'Stage in-ear monitoring (IEM) and floor wedge packages'
    ],
    equipmentHighlights: [
      'DSP system management and spatial time alignment',
      'Multi-zone delay speakers for deep audience coverage',
      'Dedicated sound engineers for FOH and Monitor mixing'
    ]
  },
  {
    id: '7',
    slug: 'lighting-production',
    number: '04',
    title: 'Lighting Production',
    titleKm: 'ប្រព័ន្ធភ្លើង និងពន្លឺ',
    shortDesc: 'Creative stage lighting, moving head beams, wash lights, strobes, and laser programming for immersive atmospheres.',
    fullDesc: 'Dynamic lighting design that transforms any stage into a cinematic spectacle. We deploy intelligent moving heads, high-powered beams, warm ambient washes, and DMX-synchronized show sequences tailored to artist performances.',
    image: 'https://ledevents.asia/storage/section-items/vtOkebXd3daKKYWGQeIKnfnKde9z5zEoir3mPsx9.jpg',
    gallery: [
      'https://ledevents.asia/storage/section-items/vtOkebXd3daKKYWGQeIKnfnKde9z5zEoir3mPsx9.jpg',
      'https://ledevents.asia/storage/section-items/gallery/oZiY3uOY0vEZzypvIn3wOTsILgGvMSkPrRzvYzMr.jpg',
      'https://ledevents.asia/storage/section-items/gallery/P0Lj463JDq0FP20ti7EuSzOQG8JUaggfLWYU1IWs.jpg',
      'https://ledevents.asia/storage/section-items/gallery/m5HKfKR9s2nEs4dHd0DPKXzWCGEy59aQPO40Dag3.jpg'
    ],
    features: [
      'Sharpy beam fixtures, B-EYE washes, and high-CRI profile spots',
      'GrandMA / Avolites lighting control consoles with live cues',
      'Stage blinders, atom strobes, and atmospheric haze integration',
      'Architectural facade illumination and mood uplighting',
      'Pre-visualization 3D lighting simulation before on-site rig'
    ],
    equipmentHighlights: [
      'DMX512 & Art-Net network distribution',
      'Silent fixtures suitable for corporate broadcast environments',
      'Precision focus for keynote speakers and headline artists'
    ]
  },
  {
    id: '8',
    slug: 'full-event-production',
    number: '05',
    title: 'Full Event Production',
    titleKm: 'ផលិតកម្មព្រឹត្តិការណ៍ពេញលេញ',
    shortDesc: 'End-to-end event solutions covering technical planning, coordination, staging, and live show execution.',
    fullDesc: 'Turnkey technical production uniting LED visual walls, staging structures, audio engineering, and dynamic lighting into one seamless, fail-safe system. We provide single-point accountability for promoters, corporate directors, and event planners.',
    image: 'https://ledevents.asia/storage/section-items/8waw73lVautcz3qZGE3uv2xu4oXiznKxb3e7vJBl.jpg',
    gallery: [
      'https://ledevents.asia/storage/section-items/8waw73lVautcz3qZGE3uv2xu4oXiznKxb3e7vJBl.jpg',
      'https://ledevents.asia/storage/section-items/gallery/pRE5nGxB7RF2v5GALCw0HpPubuRXTimWgSkRjpcI.jpg',
      'https://ledevents.asia/storage/section-items/gallery/3rYlGVFHQoCbj81wRryXNy0viBUh0PPSWcEDcb1p.jpg',
      'https://ledevents.asia/storage/section-items/gallery/Zjkiz8mn1jdljjdrGVNKoTmm3Fz4KJssOwkwfTRv.jpg'
    ],
    features: [
      'Turnkey project coordination and 3D technical blueprinting',
      'Dedicated technical director and stage management team',
      'Rigorous electrical power distribution and backup generator integration',
      'On-site safety protocols and crowd-barrier coordination',
      'Post-event rapid strike and systematic performance debrief'
    ],
    equipmentHighlights: [
      'Single consolidated production schedule across all technical crews',
      'Zero inter-vendor miscommunication during time-critical setup windows',
      'Tested reliability on Cambodia’s largest public events'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: '41',
    slug: 'greet-music-festival',
    title: 'Greet Music Festival',
    year: '2025',
    location: 'Koh Norea, Phnom Penh',
    scope: 'Full Production & Stage Rental W40m × H16m',
    category: 'Festival',
    stageSize: 'W40m × H16m',
    description: 'Greet Music Festival is an annual large-scale concert event featuring top performers, high-energy music, and an unforgettable festival atmosphere. LED Events delivered complete turnkey production including the flagship 40-meter wide festival stage, massive curved LED backdrop, and integrated concert lighting.',
    image: 'https://ledevents.asia/storage/section-items/gallery/eyCykokGP4iHBbpKgIwJe1lkwaoYsyoDuFEm546d.jpg',
    videoPreviewUrl: '/video-clip-1.mp4',
    gallery: [
      'https://ledevents.asia/storage/section-items/gallery/eyCykokGP4iHBbpKgIwJe1lkwaoYsyoDuFEm546d.jpg',
      'https://ledevents.asia/storage/section-items/gallery/Xo15EIVNwZNt13CaP20LU80MDBDURjh7JGBwby8T.jpg',
      'https://ledevents.asia/storage/section-items/gallery/PKzqGOlnmYtHqAz2c7unZ0rCXmoMV9X56dJgHLOW.jpg',
      'https://ledevents.asia/storage/section-items/gallery/62ppcAxM6K6xhlRtC0ykgdzfacMSlobhsCjgOt2D.jpg'
    ],
    highlights: [
      '40-meter wide custom modular festival stage build at Koh Norea',
      'Over 250m² of ultra-bright outdoor LED screens',
      'Synchronized lighting show with moving beams and laser arrays',
      'Dual redundant electrical generation for non-stop festival runtime'
    ],
    technicalSpecs: [
      { label: 'Stage Dimensions', value: 'Width 40m × Height 16m' },
      { label: 'LED Resolution', value: '4K Ultra HD Display Matrix' },
      { label: 'Scope', value: 'Full Production, Staging & Rigging' },
      { label: 'Venue Type', value: 'Outdoor Festival Grounds' }
    ]
  },
  {
    id: '36',
    slug: 'krud-kunkhmer-tour-concert',
    title: 'Krud KunKhmer Tour Concert',
    year: '2025',
    location: 'Nationwide Stadium Tour, Cambodia',
    scope: 'Full Production & Stadium LED Walls',
    category: 'Concert',
    stageSize: 'W36m × H14m',
    description: 'The ISKA Krud Kun Khmer Tour Concert combines the intensity of Kun Khmer combat sports with live music performances, creating a powerful and engaging entertainment experience that celebrates Cambodian culture and spirit.',
    image: 'https://ledevents.asia/storage/section-items/gallery/P0Lj463JDq0FP20ti7EuSzOQG8JUaggfLWYU1IWs.jpg',
    videoPreviewUrl: '/video-clip-2.mp4',
    gallery: [
      'https://ledevents.asia/storage/section-items/gallery/P0Lj463JDq0FP20ti7EuSzOQG8JUaggfLWYU1IWs.jpg',
      'https://ledevents.asia/storage/section-items/gallery/m5HKfKR9s2nEs4dHd0DPKXzWCGEy59aQPO40Dag3.jpg',
      'https://ledevents.asia/storage/section-items/gallery/5k4cHP2xmq7OTvmIsutlNZFJMtLnLIZH1dEM72BM.jpg',
      'https://ledevents.asia/storage/section-items/gallery/2xB8RDOzA7yzZYgJ6kT2P39wk4luAgS0e7n597Qa.jpg'
    ],
    highlights: [
      'High-impact integration of boxing ring and high-energy music stage',
      'High-brightness LED walls visible under intense sports lighting',
      'Multi-province touring setup requiring rapid assembly and strike',
      'Live broadcast video feed feeds with low latency'
    ],
    technicalSpecs: [
      { label: 'Format', value: 'Multi-City Stadium Tour' },
      { label: 'Production', value: 'LED Display, Lighting, Audio, Truss' },
      { label: 'Live Broadcast', value: 'Zero-latency SDI feeds' }
    ]
  },
  {
    id: '37',
    slug: 'nico-solo-concert',
    title: 'Nico Solo Concert ("SHARE THE LOVE")',
    year: '2026',
    location: 'Aeon Mall Sen Sok City, Phnom Penh',
    scope: 'Full Production & Stage Engineering',
    category: 'Concert',
    stageSize: 'W28m × H10m',
    description: 'Nico’s greatest hits and breathtaking stage performances at the "SHARE THE LOVE" Solo Concert. This was more than just a concert; it was a movement of kindness where 100% of all ticket proceeds were donated to support brave soldiers and displaced families.',
    image: 'https://ledevents.asia/storage/section-items/gallery/PPvQ16L7qza7k4jdfM838Q7IkK72EMakfIwUl6vd.png',
    videoPreviewUrl: '/video-clip-1.mp4',
    gallery: [
      'https://ledevents.asia/storage/section-items/gallery/PPvQ16L7qza7k4jdfM838Q7IkK72EMakfIwUl6vd.png',
      'https://ledevents.asia/storage/section-items/gallery/bsc6TqCipPtsdX1VksVBMB4yrPHA12R97GJ70vMq.jpg',
      'https://ledevents.asia/storage/section-items/gallery/YVHpHZdZBjhpKvzRWD48haXFoHsUegDg0g0HHh9l.jpg',
      'https://ledevents.asia/storage/section-items/gallery/dteYMJUYPeCY9Vd95UwgaIrqDjAfx1Lz6rnpcFsO.png'
    ],
    highlights: [
      'Multi-layered LED screens with motorized elements',
      'Pristine live vocal acoustic tuning in large mall convention hall',
      'Charity concert production executed with the highest broadcast standards',
      'Full live multitrack recording and multi-camera broadcast capture'
    ],
    technicalSpecs: [
      { label: 'Venue', value: 'Aeon Mall Sen Sok Convention Hall' },
      { label: 'System', value: 'Line-array audio, Moving lights, P3 LED' },
      { label: 'Cause', value: '100% Charity Benefit Concert' }
    ]
  },
  {
    id: '39',
    slug: 'boostrong-king-of-the-ring-kun-khmer',
    title: 'Boostrong King of the Ring Kun Khmer',
    year: '2025',
    location: 'Kampong Cham Province',
    scope: 'Stage Rental W32m × H11m & Staging System',
    category: 'Outdoor',
    stageSize: 'W32m × H11m',
    description: 'Boostrong King of the Ring Kun Khmer highlights top-tier Kun Khmer fighters in thrilling battles, delivering an exciting and culturally rich experience for thousands of live spectators and millions of television viewers.',
    image: 'https://ledevents.asia/storage/section-items/gallery/W3ks2SD0RTtuGTdpLkmXagC58NOU6XxQMeAgaVWS.png',
    videoPreviewUrl: '/video-clip-2.mp4',
    gallery: [
      'https://ledevents.asia/storage/section-items/gallery/W3ks2SD0RTtuGTdpLkmXagC58NOU6XxQMeAgaVWS.png',
      'https://ledevents.asia/storage/section-items/gallery/Qd0IIBkQC2eA2frQ5sJibR15ZBmPGJK7V1azZ8yA.png',
      'https://ledevents.asia/storage/section-items/gallery/lDF9bT3nrE1gQ5tfF36XfWQvuA5bQgL1BUTHmpIz.png',
      'https://ledevents.asia/storage/section-items/gallery/uy1ZV46ES52gjqaJI0NrgEmLsR8KGEyTEBRcBbHB.png'
    ],
    highlights: [
      'Heavy-duty 32-meter wide stage framing the boxing arena',
      'Weather-sealed outdoor electronics withstand variable conditions',
      'High-contrast digital ringside scoreboards and LED replays',
      'High-output flood and beam lighting for pristine TV broadcast'
    ],
    technicalSpecs: [
      { label: 'Stage Dimensions', value: 'Width 32m × Height 11m' },
      { label: 'Location', value: 'Kampong Cham Province' },
      { label: 'Category', value: 'Outdoor Sports & Live Music' }
    ]
  },
  {
    id: '42',
    slug: 'vattanac-live-show',
    title: 'Vattanac Live-Show',
    year: '2025',
    location: 'Koh Pich, Phnom Penh',
    scope: 'LED Screen Rental & Visual Engineering',
    category: 'Corporate',
    description: 'High-profile corporate and VIP live presentation at Koh Pich. LED Events provided ultra-crisp indoor LED screens, calibrated for high-definition keynote graphics, live camera feeds, and brand prestige.',
    image: 'https://ledevents.asia/storage/section-items/gallery/xaO1AZFXy4CJ3sCIGckWwWVKb6vX4Rpekcw8x0jl.jpg',
    videoPreviewUrl: '/video-clip-1.mp4',
    gallery: [
      'https://ledevents.asia/storage/section-items/gallery/xaO1AZFXy4CJ3sCIGckWwWVKb6vX4Rpekcw8x0jl.jpg',
      'https://ledevents.asia/storage/section-items/gallery/hEVxOJuKgGBqTHn1U1K4wqHAsDdB5dEsZL6nGlcr.jpg',
      'https://ledevents.asia/storage/section-items/gallery/kYyClpbjnE6EXO7dc1Od4Tgd2lM3C2n6nOswb89Z.jpg'
    ],
    highlights: [
      'Ultra-fine pitch indoor LED display for immaculate presentation clarity',
      'Seamless multi-window PIP (picture-in-picture) video switching',
      'Discrete cable management and zero-footprint stage aesthetic'
    ],
    technicalSpecs: [
      { label: 'Venue', value: 'Koh Pich Exhibition Center' },
      { label: 'Scope', value: 'Corporate LED Screen Rental' },
      { label: 'Resolution', value: 'True Native 4K Pixel Map' }
    ]
  },
  {
    id: '45',
    slug: 'road-2-the-star',
    title: 'Road 2 the Star (Season 5)',
    year: '2025 & 2026',
    location: 'Aeon Mean Chey & Aeon Mall 2, Phnom Penh',
    scope: 'Full Production & TV Stage Setup',
    category: 'Concert',
    description: 'High-energy national talent contest and live musical showcase. LED Events was entrusted with complete staging, intelligent lighting sequences, live broadcast audio, and monumental LED backdrops across consecutive seasons.',
    image: 'https://ledevents.asia/storage/section-items/gallery/kFn1U1ktLk82RQYp1Z7BwYm1ASqRZVv23HVadViZ.jpg',
    videoPreviewUrl: '/video-clip-2.mp4',
    gallery: [
      'https://ledevents.asia/storage/section-items/gallery/kFn1U1ktLk82RQYp1Z7BwYm1ASqRZVv23HVadViZ.jpg',
      'https://ledevents.asia/storage/section-items/gallery/fdFAvhMtowfcQ9rzngNzyu12rvjZVcfKLooBzLjy.jpg',
      'https://ledevents.asia/storage/section-items/gallery/BU1ejgX2UKGcfbgpTc4DxBnRVXyHFzyw0ceA8pzG.jpg',
      'https://ledevents.asia/storage/section-items/gallery/LaHOtePx2WaaMNJNJ96BXhAZUE4kFRIMNjpIMzW7.jpg'
    ],
    highlights: [
      'Multi-tier concert stage layout designed for dance routines',
      'Custom timecoded lighting and LED content synchronization',
      'High-reliability audio routing with dedicated judge mic channels'
    ],
    technicalSpecs: [
      { label: 'Seasons', value: '2025 & 2026 Consecutive Runs' },
      { label: 'Venues', value: 'Aeon 2 & Aeon 3 Mall Stages' },
      { label: 'Scope', value: 'Full Production & Technical Operation' }
    ]
  }
];

export const WHY_US_STRENGTHS: WhyUsStrength[] = [
  {
    number: '01',
    title: 'System',
    subtitle: 'Engineered Precision & Rigorous Process',
    description: 'We operate with a structured and professional system to ensure every event is planned and executed efficiently, from initial technical CAD design to final live delivery.',
    keyPoints: [
      'Standardized pre-production checklists',
      'Precise CAD stage blueprints and load calculations',
      'Structured cable mapping and signal routing',
      'Strict timelines that prevent last-minute stress'
    ],
    iconName: 'Cpu'
  },
  {
    number: '02',
    title: 'Backup',
    subtitle: 'Zero Single Points of Failure',
    description: 'Live events cannot be paused or restarted. We design redundant power generation, dual video processors, and secondary audio lines so your show never skips a beat.',
    keyPoints: [
      'Dual-loop NovaStar screen data connections',
      'Redundant audio snakes and FOH splitters',
      'On-site backup diesel generator sets',
      'Hot-standby lighting console backups'
    ],
    iconName: 'ShieldCheck'
  },
  {
    number: '03',
    title: 'Team',
    subtitle: '30+ Certified Production Specialists',
    description: 'With a dedicated team of over 30 experienced professionals, we are capable of managing projects of all sizes with precision, seamless coordination, and disciplined reliability.',
    keyPoints: [
      'In-house riggers, audio engineers, and lighting designers',
      'Certified electrical and stage safety technicians',
      'Continuous technical training on modern AV gear',
      'Bilingual project supervisors on-site'
    ],
    iconName: 'Users'
  },
  {
    number: '04',
    title: 'Execution',
    subtitle: 'Punctual Setup, Flawless Show Running',
    description: 'We respect venue access hours, rehearsal deadlines, and run-sheet timings down to the second. What we promise in the boardroom is what we build on the field.',
    keyPoints: [
      'Punctual on-site arrival and early stage handovers',
      'Clean cable dressing and professional backstage etiquette',
      'Real-time communication via multi-channel wireless intercom',
      'Rapid, safe teardown leaving venues spotless'
    ],
    iconName: 'Zap'
  },
  {
    number: '05',
    title: 'Experience',
    subtitle: 'Proven Track Record Since 2012',
    description: 'With hands-on experience since 2012, we have successfully delivered a wide range of Cambodia’s most prestigious events, bringing deep expertise, reliability, and consistency to every project.',
    keyPoints: [
      'Over 14+ years continuous operation in Cambodia',
      'Hundreds of successful concerts, festivals, and galas',
      'Trusted by international brands, embassies, and ministries',
      'Unmatched familiarity with Cambodian venues and weather'
    ],
    iconName: 'Award'
  }
];

export const PRODUCTION_STEPS: ProductionStep[] = [
  {
    number: '01',
    title: 'Consultation & Briefing',
    description: 'We start by understanding your event objectives, audience size, venue constraints, and technical requirements to design the optimal solution.',
    deliverables: ['Technical brief analysis', 'Site survey assessment', 'Feasibility check']
  },
  {
    number: '02',
    title: 'Concept & Proposal',
    description: 'Our team develops a tailored proposal, including stage configuration, equipment package, pixel maps, and transparent pricing structure.',
    deliverables: ['Custom 3D stage layout', 'Full equipment inventory breakdown', 'Detailed quotation']
  },
  {
    number: '03',
    title: 'Technical Planning',
    description: 'We finalize all technical schematics, from LED screen pixel resolution to sound dispersion angles, power distribution, and lighting fixture plots.',
    deliverables: ['Rigging & weight distribution plans', 'Audio delay & acoustic mapping', 'Run-sheet timeline']
  },
  {
    number: '04',
    title: 'Setup & Installation',
    description: 'Our certified crews handle full on-site setup, ensuring all stage structures, screens, and audio trusses are safely secured and calibrated ahead of rehearsal.',
    deliverables: ['Physical construction', 'Signal and power load testing', 'Full system alignment']
  },
  {
    number: '05',
    title: 'Live Operation & Management',
    description: 'During the live event, our senior directors and technicians manage all AV systems in real time, executing show cues with absolute precision.',
    deliverables: ['Real-time video switching', 'FOH & monitor acoustic balancing', 'Active cue execution']
  },
  {
    number: '06',
    title: 'Dismantling & Evaluation',
    description: 'After the event concludes, we perform efficient, damage-free teardown and conduct a formal post-event debrief to ensure continuous improvement.',
    deliverables: ['Rapid venue handover', 'Clean site clearance', 'Client review meeting']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '60',
    slug: 'how-to-plan-a-successful-event-in-phnom-penh',
    title: 'How to Plan a Successful Event in Phnom Penh (Complete Guide)',
    category: 'Event Guides',
    date: '2025',
    readTime: '6 min read',
    featuredImage: 'https://ledevents.asia/storage/section-items/71C6jzSLylKz2T7Y4LCezOJkH7U6v8xG3XbZXyrR.jpg',
    excerpt: 'Planning an event in Phnom Penh requires balancing weather factors, venue power availability, municipal approvals, and professional audio-visual staging.',
    content: [
      'Phnom Penh is rapidly becoming Southeast Asia’s dynamic hub for corporate summits, musical festivals, and grand brand unveilings. However, delivering a seamless event in the capital requires meticulous technical preparation.',
      'Key considerations begin with venue selection: from indoor ballroom venues at top hotels to open-air riverside expanses like Koh Pich and Koh Norea. Outdoor venues must factor in seasonal rains, wind-load ratings for stage roofs, and dedicated power generator backup.',
      'Working with a unified event production partner who controls the stage, LED visual screens, sound systems, and lighting eliminates the risks associated with multiple fragmented suppliers. When one team manages electrical distribution and signal paths, the probability of on-stage glitches drops to near zero.',
      'Ensure that your production partner conducts a preliminary site survey at least 14 days prior to setup. This allows engineers to verify entry clearance for heavy trucks, floor weight tolerances, and noise curfew guidelines.'
    ],
    keyTakeaways: [
      'Conduct on-site power and weight surveys 2-3 weeks in advance',
      'Choose outdoor stage structures with certified wind-resistance ratings',
      'Consolidate LED, sound, and lighting under a single production team'
    ]
  },
  {
    id: '61',
    slug: 'why-led-screens-are-essential-for-events-in-cambodia',
    title: 'Why LED Screens Are Essential for Events in Cambodia',
    category: 'LED Knowledge',
    date: '2025',
    readTime: '5 min read',
    featuredImage: 'https://ledevents.asia/storage/section-items/8waw73lVautcz3qZGE3uv2xu4oXiznKxb3e7vJBl.jpg',
    excerpt: 'In Cambodia’s high-ambient sunlight and vibrant evening climates, traditional projectors wash out. Modern LED screen panels provide crisp daylight visibility and dynamic backdrops.',
    content: [
      'Traditional projection systems struggle in tropical daylight and high-intensity ambient lighting. Modern LED displays offer brightness levels exceeding 4,500 to 5,500 nits, ensuring vibrant visuals even under direct sunshine.',
      'For indoor corporate conferences, high-definition LED screens with pixel pitches of P2.6 or P2.9 provide razor-sharp text legibility for financial charts and sponsor decks. Attendees seated in the 30th row experience identical clarity to those in the front.',
      'Modern LED walls also transform stage aesthetics. Instead of static printed backdrops that can only showcase one design, an LED wall acts as a dynamic visual canvas that shifts seamlessly between presenter graphics, sponsor animations, and high-energy music videos.'
    ],
    keyTakeaways: [
      'LED panels outshine projectors in tropical ambient sunlight',
      'Fine pixel pitch (P2.6-P2.9) ensures sharp typography for corporate decks',
      'Dynamic backdrop flexibility maximizes sponsor exposure value'
    ]
  },
  {
    id: '62',
    slug: '5-essential-event-production-tips',
    title: '5 Essential Event Production Tips for a Smooth Event',
    category: 'Production Tips',
    date: '2025',
    readTime: '7 min read',
    featuredImage: 'https://ledevents.asia/storage/section-items/GO8J3aMphCgNdGTZ1m4pjo7veTV9AwMueyekazI0.jpg',
    excerpt: 'Flawless event execution is not an accident—it is the result of disciplined pre-production, redundant backups, and clear cue management.',
    content: [
      '1. Finalize the Technical Run-Sheet Early: Ensure speakers, artists, and technical crews share the identical minute-by-minute cue sheet. Include contingency buffers for speeches that run overtime.',
      '2. Implement Signal and Power Redundancy: Always insist on dual signal cables (Main + Backup) to LED processors and a standby electrical generator running parallel for zero-blackout security.',
      '3. Rehearse with Full Media and Lighting: Never skip the technical dry run. Test all video aspect ratios (16:9 vs custom ultra-wide) on the actual screens 2 hours before VIP doors open.',
      '4. Manage Sound Spill and Acoustic Reflections: Work with an experienced audio team who uses line-array predictive software to keep sound focused on the audience and away from echoey glass walls.',
      '5. Maintain Clear Crew Intercoms: Silent stage managers communicating via wireless headsets ensure lighting cues and video transitions hit the exact beat of the keynote.'
    ],
    keyTakeaways: [
      'Synchronize one master run-sheet across all vendors',
      'Mandate dual video lines and generator failovers',
      'Perform full AV rehearsals with actual speaker slides'
    ]
  },
  {
    id: '63',
    slug: 'full-event-production-services-in-phnom-penh',
    title: 'Full Event Production Services in Phnom Penh: One Solution for All Events',
    category: 'Event Guides',
    date: '2025',
    readTime: '6 min read',
    featuredImage: 'https://ledevents.asia/storage/section-items/wgTNclaVkmXjwEIAgSFnZ0ofOM5YKxU7U8cYZ75E.jpg',
    excerpt: 'Why hiring separate vendors for stage, sound, lighting, and screens creates risks—and how full turnkey production guarantees peace of mind.',
    content: [
      'In traditional event setups, organizers frequently hire one vendor for the stage, a second for lighting, a third for audio, and a fourth for LED screens. When problems arise—such as truss weight overloads or power distribution disputes—vendors often point fingers.',
      'Full turnkey event production consolidates all technical disciplines under one experienced technical director. At LED Events, our engineers coordinate the electrical calculations, truss rigging points, audio frequencies, and video playback as one unified system.',
      'This single-vendor synergy reduces setup time by up to 35%, lowers logistical transport costs, and provides organizers with one direct phone number for complete accountability.'
    ],
    keyTakeaways: [
      'Unified technical management prevents vendor conflicts on site',
      'Engineered electrical and weight distribution ensures safety',
      'Faster setup and single-point accountability for organizers'
    ]
  },
  {
    id: '82',
    slug: 'what-is-led-screen-rental-complete-guide',
    title: 'What is LED Screen Rental? A Complete Guide for Events',
    category: 'LED Knowledge',
    date: '2025',
    readTime: '5 min read',
    featuredImage: 'https://ledevents.asia/storage/section-items/vtOkebXd3daKKYWGQeIKnfnKde9z5zEoir3mPsx9.jpg',
    excerpt: 'Everything organizers need to know about panel resolutions, indoor versus outdoor ratings, ground support, and video processors.',
    content: [
      'LED screen rental involves deploying modular LED tiles that lock together with precision latches to form a seamless, continuous digital display of virtually any dimension.',
      'Each tile contains thousands of surface-mount diodes (SMDs). The distance between individual pixels—known as "pixel pitch"—dictates the optimal viewing distance. A P2.6 screen looks pristine from 2 meters away, whereas a P4.8 outdoor screen looks razor-sharp from 5 meters away.',
      'Professional rental packages always include the physical mounting truss, high-grade NovaStar or Brompton processing units, video scalers, and dedicated live operators.'
    ],
    keyTakeaways: [
      'Pixel pitch determines resolution and minimum viewing distance',
      'Modular locking cabinets allow custom aspect ratios and curves',
      'Always confirm professional processors and backup video lines'
    ]
  },
  {
    id: '83',
    slug: 'indoor-vs-outdoor-led-screen',
    title: 'Indoor vs Outdoor LED Screen: Which One Do You Need?',
    category: 'LED Knowledge',
    date: '2025',
    readTime: '5 min read',
    featuredImage: 'https://ledevents.asia/storage/section-items/71C6jzSLylKz2T7Y4LCezOJkH7U6v8xG3XbZXyrR.jpg',
    excerpt: 'Learn the critical differences between IP65 weather ratings, nits of brightness, and pixel density when choosing screens for your venue.',
    content: [
      'The most crucial difference between indoor and outdoor LED screens is weather resistance and brightness. Outdoor panels boast IP65 ratings to withstand rain, dust, and humidity, with brightness levels between 4,500 and 6,000 nits.',
      'Indoor screens, by contrast, operate between 800 and 1,500 nits to avoid blinding indoor audiences. They utilize smaller pixel pitches (P2.0 to P2.9) because guests sit much closer to the stage.',
      'Attempting to use indoor screens outdoors can result in catastrophic water damage and unreadable washed-out visuals. LED Events provides dedicated fleets of both indoor and outdoor certified hardware.'
    ],
    keyTakeaways: [
      'Outdoor screens require IP65 weather seals and 4,500+ nits',
      'Indoor screens focus on high pixel density (P2.6) for close viewing',
      'Never deploy indoor-rated panels in unshielded outdoor environments'
    ]
  },
  {
    id: '84',
    slug: 'how-to-choose-the-right-led-screen',
    title: 'How to Choose the Right LED Screen for Your Event?',
    category: 'LED Knowledge',
    date: '2025',
    readTime: '6 min read',
    featuredImage: 'https://ledevents.asia/storage/section-items/8waw73lVautcz3qZGE3uv2xu4oXiznKxb3e7vJBl.jpg',
    excerpt: 'A practical formula for calculating screen size based on venue depth, audience capacity, and aspect ratio requirements.',
    content: [
      'Selecting the correct screen size begins with the furthest viewer. As a general industry rule, screen height should equal approximately 1/6th to 1/8th of the distance from the stage to the furthest row of seating.',
      'Next, determine your aspect ratio. Most corporate presentations and video files are produced in standard 16:9 widescreen. If your stage requires an ultra-wide cinematic banner (e.g. 24:9 or 32:9), your video content creators must design bespoke custom-resolution graphics.',
      'Consulting with LED Events early allows our CAD team to simulate 3D viewing angles from every section of your venue, ensuring zero obstructed sightlines.'
    ],
    keyTakeaways: [
      'Calculate screen height based on distance to the furthest attendee',
      'Match stage aspect ratio to your video production team’s content',
      'Request 3D sightline simulations before finalizing stage width'
    ]
  },
  {
    id: '85',
    slug: 'what-makes-a-professional-event-production-company',
    title: 'What Makes a Professional Event Production Company?',
    category: 'Production Tips',
    date: '2025',
    readTime: '6 min read',
    featuredImage: 'https://ledevents.asia/storage/section-items/GO8J3aMphCgNdGTZ1m4pjo7veTV9AwMueyekazI0.jpg',
    excerpt: 'Key traits of a reliable production partner: certified rigging standards, full technical backups, trained teams, and insurance coverage.',
    content: [
      'A true production company is far more than an equipment rental depot. It is an engineering discipline centered on life safety, acoustic precision, and artistic storytelling.',
      'First, look for certified rigging knowledge. Hanging thousands of kilograms of lighting and LED screens above human heads requires load-rated aluminum trusses, rated steel safety wires, and calibrated electric hoists.',
      'Second, evaluate team depth. A professional outfit maintains dedicated departmental heads for Audio, Video, Lighting, and Stage Structure, rather than relying on general laborers for complex digital calibration.'
    ],
    keyTakeaways: [
      'Structural safety and load ratings must take precedence over low bids',
      'Look for dedicated departmental technical specialists',
      'Verify company history and proven execution on large-scale events'
    ]
  },
  {
    id: '19',
    slug: 'led-screen-rental-in-phnom-penh',
    title: 'LED Screen Rental in Phnom Penh: Complete Guide for Events',
    category: 'LED Knowledge',
    date: '2025',
    readTime: '5 min read',
    featuredImage: 'https://ledevents.asia/storage/section-items/wgTNclaVkmXjwEIAgSFnZ0ofOM5YKxU7U8cYZ75E.jpg',
    excerpt: 'Detailed insights on logistical delivery, power distribution, and on-site operation across top Phnom Penh hotel ballrooms and convention centers.',
    content: [
      'Phnom Penh features varied event spaces ranging from luxury hotels with strict freight elevator weight limits to massive outdoor convention parks.',
      'Knowing venue loading docks, ceiling rigging points, and electrical breaker ratings is essential for rapid setup. LED Events has operated across every major venue in the capital since 2012, ensuring frictionless venue coordination.'
    ],
    keyTakeaways: [
      'Familiarity with venue freight and ceiling load limits prevents delays',
      'On-site power balancing ensures safe electrical delivery',
      'Choose a local team with extensive Phnom Penh venue track record'
    ]
  },
  {
    id: '20',
    slug: 'event-production-in-cambodia-how-to-plan',
    title: 'Event Production in Cambodia: How to Plan a Successful Event',
    category: 'Event Guides',
    date: '2025',
    readTime: '6 min read',
    featuredImage: 'https://ledevents.asia/storage/section-items/vtOkebXd3daKKYWGQeIKnfnKde9z5zEoir3mPsx9.jpg',
    excerpt: 'Navigating local venue logistics, weather seasons, and technical planning for high-stakes events in the Kingdom of Cambodia.',
    content: [
      'Producing events in Cambodia presents unique opportunities and logistical realities. Balancing the dry and wet seasons requires proactive planning with covered stages and waterproof electronics.',
      'Furthermore, rapid economic growth has elevated audience expectations: attendees expect world-class visual shows, crystal-clear sound, and captivating stage environments that match international standards.'
    ],
    keyTakeaways: [
      'Plan for tropical weather contingencies on all outdoor setups',
      'Elevate production quality to match rising international standards',
      'Rely on proven local technical leadership'
    ]
  },
  {
    id: '21',
    slug: 'stage-rental-in-phnom-penh-what-you-need-to-know',
    title: 'Stage Rental in Phnom Penh: What You Need to Know',
    category: 'Production Tips',
    date: '2025',
    readTime: '5 min read',
    featuredImage: 'https://ledevents.asia/storage/section-items/71C6jzSLylKz2T7Y4LCezOJkH7U6v8xG3XbZXyrR.jpg',
    excerpt: 'Critical guidelines for modular stage safety, platform load ratings, skirting aesthetics, and staircase placement.',
    content: [
      'Stages are the centerpiece of any event. They must provide rock-solid stability for high-energy dance troupes, keynote speakers, and VIP dignitaries.',
      'Our stage systems feature multi-lock aluminum framing, heavy-duty marine plywood decking with non-slip coating, and customizable heights with fine-threaded leveling feet.'
    ],
    keyTakeaways: [
      'Ensure high static and dynamic load ratings on all platforms',
      'Check non-slip deck coatings and sturdy safety handrails',
      'Incorporate clean skirting and concealed cable access'
    ]
  },
  {
    id: '22',
    slug: 'why-led-event-production-is-growing-in-cambodia',
    title: 'Why LED Event Production is Growing in Cambodia',
    category: 'Event Guides',
    date: '2025',
    readTime: '6 min read',
    featuredImage: 'https://ledevents.asia/storage/section-items/8waw73lVautcz3qZGE3uv2xu4oXiznKxb3e7vJBl.jpg',
    excerpt: 'The rise of large-scale concerts, Kun Khmer sports broadcasts, and luxury corporate galas driving high-end production demand.',
    content: [
      'From provincial stadium concert tours to nationwide television broadcasts, Cambodia’s event industry has reached an unprecedented level of sophistication.',
      'Organizers recognize that investing in world-class staging, high-definition LED displays, and intelligent lighting produces memorable brand impressions and viral social media moments.'
    ],
    keyTakeaways: [
      'High production value boosts broadcast viewership and sponsor prestige',
      'Cambodian audiences expect international concert quality',
      'Advanced AV production drives measurable business and brand return'
    ]
  }
];

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: '64',
    type: 'video',
    title: 'Nico Share The Love Solo Concert — Aeon Mall Sen Sok City',
    category: 'Concert Video',
    year: '2026',
    thumbnail: 'https://ledevents.asia/storage/section-items/SV37bHeqkc65TENA69V2dUiNoKbQuFyh43jgpEcx.png',
    videoUrl: 'https://www.youtube.com/embed/ai2mvt5_KxM?si=qo9pwbvqQnnsTvjo',
    videoPreviewUrl: '/video-clip-1.mp4',
    description: 'Full concert production showcase featuring multi-tier LED walls, synchronized moving head lighting, and broadcast audio engineering for Nico’s charity solo concert.'
  },
  {
    id: '77',
    type: 'video',
    title: 'Boostrong King of Birds Kun Khmer Arena Show',
    category: 'Sports & Concert Video',
    year: '2025',
    thumbnail: 'https://ledevents.asia/storage/section-items/ULAd4SSYymCvt96nASVMjxwYnT9jfJIkxQhn9Fei.jpg',
    videoUrl: 'https://www.youtube.com/embed/q5ejcCmtDNo?si=hMgVMf7fwpS2-PtG',
    videoPreviewUrl: '/video-clip-2.mp4',
    description: 'Behind-the-scenes and high-energy ringside broadcast production combining intense Kun Khmer combat with live music performances.'
  },
  {
    id: '79',
    type: 'video',
    title: 'Technical Synchronization: LED Screen, Lighting & Sound',
    category: 'Technical Showcase',
    year: '2025',
    thumbnail: 'https://ledevents.asia/storage/section-items/1QzXabMPBxMCZ1s03F7NRWC7WNL2wjLEAu2W3KYu.jpg',
    videoUrl: 'https://www.youtube.com/embed/PcFhDdR-OLQ?si=tbq3RTHG7ZgCL9jr',
    videoPreviewUrl: '/video-clip-1.mp4',
    description: 'Demonstrating how LED Events synchronizes timecoded DMX lighting, line-array acoustics, and NovaStar video walls with millisecond precision.'
  },
  {
    id: 'bts-1',
    type: 'bts',
    title: 'Greet Music Festival — 40m Stage Heavy Rigging',
    category: 'Behind the Scenes',
    year: '2025',
    thumbnail: 'https://ledevents.asia/storage/section-items/P8XVhV5QfZBxhtG7aQaqGh0KdERznTQtlAX06aug.jpg',
    description: 'Heavy aluminum truss lifting and curved outdoor LED array anchoring at Koh Norea grounds.',
    btsScope: 'Stage Construction & Heavy Rigging'
  },
  {
    id: 'bts-2',
    type: 'bts',
    title: 'Boostrong King of Birds — Arena Lighting Calibration',
    category: 'Behind the Scenes',
    year: '2025',
    thumbnail: 'https://ledevents.asia/storage/section-items/ULAd4SSYymCvt96nASVMjxwYnT9jfJIkxQhn9Fei.jpg',
    description: 'Rigging 120+ moving head beams and setting DMX focus points for the central combat ring.',
    btsScope: 'Lighting Rigging & DMX Programming'
  },
  {
    id: 'bts-3',
    type: 'bts',
    title: 'Road To The Star Season 5 — Sound Check & FOH Tuning',
    category: 'Behind the Scenes',
    year: '2025',
    thumbnail: 'https://ledevents.asia/storage/section-items/1QzXabMPBxMCZ1s03F7NRWC7WNL2wjLEAu2W3KYu.jpg',
    description: 'Acoustic phase alignment and RF wireless microphone scanning prior to television broadcast.',
    btsScope: 'Acoustic Alignment & RF Coordination'
  },
  {
    id: 'gal-1',
    type: 'gallery',
    title: 'High-Density Curved LED Backdrop Installation',
    category: 'Gallery',
    year: '2025',
    thumbnail: 'https://ledevents.asia/storage/section-items/nZFOXz2upZL3LZfZhGLLhVlueKKXnydGdNd7feDH.jpg',
    description: 'Curved indoor LED screen build for corporate summit keynote presentation.'
  },
  {
    id: 'gal-2',
    type: 'gallery',
    title: 'Outdoor Kun Khmer Tour Stadium Lighting Array',
    category: 'Gallery',
    year: '2025',
    thumbnail: 'https://ledevents.asia/storage/section-items/5C1UncNjn90Rd6yzIFYyz704lNSSlm2gKJnbyg0L.jpg',
    description: 'Heavy-duty roof grid rigged with high-output beams and flood fixtures.'
  },
  {
    id: 'gal-3',
    type: 'gallery',
    title: 'Full Production Control Center & Video Switcher',
    category: 'Gallery',
    year: '2025',
    thumbnail: 'https://ledevents.asia/storage/section-items/pftImDuJt7p7pQF5alsgFyQlRT9NSDPCCMqXR9Nl.jpg',
    description: 'Front-of-house engineering station managing video graphics, audio mix, and lighting cues.'
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'fog-effects',
    title: 'Fog & Special Effects',
    tagline: 'Professional Atmospheric & Stage Effects',
    description: 'Stage atmospheric solutions including low-lying fog machines, high-output haze generators, CO2 cryo jets, cold spark pyrotechnics, and stadium confetti blasters. Designed to heighten emotional peaks at concerts and grand reveals.',
    image: 'https://ledevents.asia/storage/section-items/vtOkebXd3daKKYWGQeIKnfnKde9z5zEoir3mPsx9.jpg',
    features: [
      'Low-lying water-based cryogenic fog generators (dry ice effect without CO2 residue)',
      'Continuous fine haze machines for beam lighting illumination',
      'Indoor-safe cold spark fireworks machines',
      'DMX controllable CO2 jets and stadium confetti cannons'
    ],
    externalUrl: 'https://envystage.com/',
    platformLabel: 'Visit Product Platform →'
  },
  {
    id: 'led-display-sales',
    title: 'LED Display Sales',
    tagline: 'Permanent Commercial & Architectural LED Installations',
    description: 'Direct sales and turnkey engineering for permanent commercial LED displays, retail supermarket visual boards, outdoor digital billboards, corporate boardroom screens, and architectural video facades across Cambodia.',
    image: 'https://ledevents.asia/storage/section-items/71C6jzSLylKz2T7Y4LCezOJkH7U6v8xG3XbZXyrR.jpg',
    features: [
      'Commercial grade indoor P1.8 / P2.0 / P2.5 high-definition video walls',
      'Weather-resistant outdoor IP65 billboards with auto-dimming light sensors',
      'Custom curved and transparent architectural glass LED displays',
      'Complete installation warranty, structural engineering, and after-sales support'
    ],
    externalUrl: 'https://ledmedia.com.kh/',
    platformLabel: 'Visit Product Platform →'
  }
];

export const INITIAL_INQUIRIES: EventInquiry[] = [
  {
    id: 'inq-101',
    firstName: 'Sokha',
    lastName: 'Vann',
    email: 'sokha.vann@cambodiaevents.com',
    phone: '012 888 777',
    eventType: 'Concert & Music Tour',
    eventDate: '2026-11-20',
    eventLocation: 'Koh Pich Theater, Phnom Penh',
    estimatedAttendance: '2,000 - 5,000',
    servicesRequired: ['LED Screen Rental', 'Stage Rental', 'Lighting Production', 'Sound System'],
    projectDetails: 'Looking for a 24m wide stage with high-contrast LED backdrops and live line-array audio for a 2-day musical concert.',
    createdAt: '2026-08-28T10:30:00Z',
    status: 'In Progress'
  },
  {
    id: 'inq-102',
    firstName: 'David',
    lastName: 'Chen',
    email: 'd.chen@apexholding.asia',
    phone: '010 334 991',
    eventType: 'Corporate Gala & Awards',
    eventDate: '2026-12-05',
    eventLocation: 'Sokha Phnom Penh Hotel Grand Ballroom',
    estimatedAttendance: '800 - 1,200',
    servicesRequired: ['LED Screen Rental', 'Sound System', 'Lighting Production'],
    projectDetails: 'Annual corporate summit and awards gala. High-resolution P2.6 indoor screen required with pristine speech audio and stage wash.',
    createdAt: '2026-09-01T14:15:00Z',
    status: 'New'
  }
];
