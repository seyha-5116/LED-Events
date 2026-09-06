import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Sliders, 
  Radio, 
  Layers, 
  Sparkles,
  ChevronDown,
  HelpCircle,
  Clock,
  Play
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { SERVICES, PROJECTS, MEDIA_ITEMS } from '../data/ledEventsData';

interface ServiceExtendedItem {
  tagline: string;
  deepDiveParagraphs: string[];
  indoorVsOutdoor?: {
    indoor: { title: string; pitch: string; brightness: string; idealFor: string };
    outdoor: { title: string; pitch: string; brightness: string; idealFor: string };
  };
  safetyAndRigging?: {
    loadRating: string;
    trussSpecs: string;
    certification: string;
    levelingPrecision: string;
  };
  hardwareSpecs: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  relevantProjectSlugs: string[];
}

// Extended technical data for each service
const SERVICE_EXTENDED_DATA: Record<string, ServiceExtendedItem> = {
  'led-screen-rental': {
    tagline: 'High-Refresh Rate Indoor & Outdoor Modular LED Video Displays',
    deepDiveParagraphs: [
      'LED Events maintains Cambodia’s premier inventory of rental-grade LED tiles, engineered for broadcast cameras with 3840Hz refresh rates, true 16-bit grayscale gradation, and HDR color reproduction.',
      'Whether deploying curved visual centerpieces inside luxury hotel ballrooms or towering 5,000-nit outdoor video towers in direct tropical sunlight, our hardware maintains razor-sharp clarity without flicker or color drift.',
      'Every rental package is powered by redundant NovaStar UHD processors with automated failover video lines, ensuring your keynote slides, live camera IMAG, and concert visual effects never miss a single frame.'
    ],
    indoorVsOutdoor: {
      indoor: {
        title: 'Indoor High-Density Series',
        pitch: 'P2.6mm & P2.9mm Pixel Pitch',
        brightness: '1,000 - 1,500 Nits (Camera-Calibrated)',
        idealFor: 'Corporate Summits, Gala Dinners, Exhibitions, and Indoor Keynotes with 2m–15m viewing distances.'
      },
      outdoor: {
        title: 'Outdoor IP65 Weatherproof Series',
        pitch: 'P3.9mm & P4.8mm Pixel Pitch',
        brightness: '4,500 - 6,000 Nits (Sunlight-Readable)',
        idealFor: 'Music Festivals, Stadium Kun Khmer Matches, Open-Air Grounds, and Rain/Humidity-Resistant Builds.'
      }
    },
    hardwareSpecs: [
      { label: 'Pixel Pitch Options', value: 'P2.6 / P2.9 / P3.9 / P4.8' },
      { label: 'Refresh Rate', value: '3,840 Hz (Broadcast Zero-Moiré)' },
      { label: 'Processing Engines', value: 'NovaStar UHD / VX1000 / H9' },
      { label: 'Weather Protection', value: 'IP65 Front & Rear (Outdoor Fleet)' },
      { label: 'Signal Redundancy', value: 'Dual Fiber-Optic & Gigabit Ethernet Lines' },
      { label: 'Aspect Ratios Supported', value: '16:9, 21:9, 32:9 Ultra-Wide & Curved Concave/Convex' }
    ],
    faqs: [
      {
        question: 'How do I choose between P2.6 and P3.9 pixel pitch?',
        answer: 'Pixel pitch represents the distance between individual LED diodes. For indoor events where the audience sits within 2 to 5 meters of the stage, P2.6 offers pristine high-definition resolution. For outdoor stages with audiences 6+ meters away, P3.9 delivers maximum brightness and punch.'
      },
      {
        question: 'What video inputs are supported for live presentations?',
        answer: 'We accept HDMI 2.0, DisplayPort, 12G-SDI, and seamless multi-input switcher feeds from Blackmagic, Roland, and Barco systems with instant backup switching.'
      },
      {
        question: 'Do you provide live operators during the event?',
        answer: 'Yes. Every rental package includes certified video engineers and switchboard operators who manage scaling, screen splitting, live camera feeds, and real-time cueing throughout your event.'
      }
    ],
    relevantProjectSlugs: ['vattanac-live-show', 'greet-music-festival', 'nico-solo-concert']
  },
  'stage-rental': {
    tagline: 'Engineered Aluminum Modular Platforms & Heavy-Duty Roof Trusses',
    deepDiveParagraphs: [
      'The foundation of any high-stakes production is structural integrity. LED Events provides heavy-duty modular stage platforms rated for 750 kg/m² static and dynamic loads, guaranteeing complete safety for high-energy dance crews, VIP dignitaries, and full symphonic orchestras.',
      'Our stage framing is fabricated from structural aircraft-grade aluminum alloy with non-slip phenolic plywood surfaces, variable-height telescoping legs with micro-leveling feet, and integrated safety handrails.',
      'For open-air festivals, we construct towering goal-post and curved roof truss systems spanning up to 40 meters, equipped with certified electric hoists capable of suspending tons of lighting and LED video walls.'
    ],
    safetyAndRigging: {
      loadRating: '750 kg/m² Certified Live Load Capacity',
      trussSpecs: 'Aluminum Box Truss (400x400mm & 520x760mm Heavy-Duty)',
      certification: 'Structural Weld Quality & Ground Anchor Wind-Load Rated',
      levelingPrecision: 'Micro-threaded Leveling Jacks for Uneven Terrain'
    },
    hardwareSpecs: [
      { label: 'Deck Dimensions', value: '1.22m x 1.22m & 1.22m x 2.44m Modular Sections' },
      { label: 'Adjustable Heights', value: '0.4m, 0.6m, 0.8m, 1.0m, 1.2m, up to 1.8m' },
      { label: 'Surface Finish', value: 'High-Grip Non-Slip Hexa Decking (Black)' },
      { label: 'Skirting & Stairs', value: 'Pleated Velvet Skirting & Variable Safety Staircases' },
      { label: 'Truss Spans', value: 'Custom Spans up to 40m Clear Width' },
      { label: 'Electric Hoists', value: '1-Ton and 2-Ton Rated Chain Motors with Master Controller' }
    ],
    faqs: [
      {
        question: 'Can the stage be built on grass, sand, or uneven ground?',
        answer: 'Yes. Our stage leg systems utilize multi-axis leveling jacks and ground spreader plates designed specifically to compensate for slopes, grass, and uneven stadium terrain.'
      },
      {
        question: 'What is the maximum stage size you can construct?',
        answer: 'We have constructed stages up to 40 meters wide (such as the Greet Music Festival at Koh Norea) and can expand modularly to accommodate any venue footprint.'
      },
      {
        question: 'Are stairs, safety railings, and skirting included?',
        answer: 'Yes. All stage rentals come with heavy-duty safety stairs, rear and side safety guardrails, and fire-retardant black skirting for clean cable concealment.'
      }
    ],
    relevantProjectSlugs: ['greet-music-festival', 'boostrong-king-of-the-ring-kun-khmer', 'krud-kunkhmer-tour-concert']
  },
  'sound-system': {
    tagline: 'Concert Line-Array Acoustics & Precision RF Wireless Management',
    deepDiveParagraphs: [
      'Acoustic clarity separates amateur productions from world-class experiences. LED Events fields high-performance active and passive line-array speaker systems designed to throw uniform, phase-aligned frequency coverage across convention halls and 20,000-person festival grounds.',
      'Our sound engineers utilize 3D acoustic predictive software to map speaker angles, dispersion patterns, and delay towers, eliminating acoustic reflections and dead zones.',
      'We deploy digital mixing consoles from Yamaha and Midas, coupled with multi-channel Shure Axient Digital and Sennheiser wireless systems calibrated with real-time RF spectrum scanning to prevent frequency interference in dense urban venues.'
    ],
    hardwareSpecs: [
      { label: 'Loudspeaker Architecture', value: 'Dual 10" & Dual 12" Touring Line-Array Elements' },
      { label: 'Low Frequency Extension', value: 'Dual 18" Sub-Bass Arrays with Cardioid Tuning' },
      { label: 'FOH & Monitor Consoles', value: 'Yamaha CL5 / M32 / Wing Digital Consoles' },
      { label: 'Wireless Microphones', value: 'Shure Axient Digital & UHF-R with Directional Fin Antennas' },
      { label: 'In-Ear Monitoring', value: 'Sennheiser G4 IEM Systems for Touring Artists' },
      { label: 'Signal Transport', value: 'Dante Digital Audio Network over Redundant Gigabit Cat6' }
    ],
    faqs: [
      {
        question: 'How do you handle acoustic feedback and echo in large hotel ballrooms?',
        answer: 'Our audio engineers utilize digital DSP speaker management, time-alignment delays, and precision parametric EQ to match the room’s acoustic reverberation profile.'
      },
      {
        question: 'How many wireless microphones can operate simultaneously without dropout?',
        answer: 'Using active RF spectrum analyzers and directional helical antennas, we operate up to 24 wireless channels simultaneously with zero crosstalk or RF interference.'
      },
      {
        question: 'Do you supply backline instruments for live bands?',
        answer: 'Yes, we can provide professional drum kits, guitar amplifiers, bass rigs, and keyboard stages alongside our PA systems.'
      }
    ],
    relevantProjectSlugs: ['nico-solo-concert', 'road-2-the-star', 'krud-kunkhmer-tour-concert']
  },
  'lighting-production': {
    tagline: 'Intelligent Moving Head Fixtures, Stage Washes & DMX Programming',
    deepDiveParagraphs: [
      'Lighting transforms physical stages into emotive visual landscapes. LED Events designs multi-layered lighting rigs combining high-output beam fixtures, motorized zoom washes, profile framing spots, and blinding crowd strobes.',
      'All fixtures are controlled via industry-standard grandMA and Avolites lighting consoles, enabling timecode-synchronized cue lists that hit every musical crescendo and VIP entrance with mathematical precision.',
      'For televised events and awards galas, our lighting designers calibrate key light color temperatures (3200K / 5600K) with high CRI ratings, guaranteeing natural skin tones and zero camera flicker on high-definition video broadcasts.'
    ],
    hardwareSpecs: [
      { label: 'Beam & Hybrid Fixtures', value: '380W / 470W High-Intensity Discharge Moving Beams' },
      { label: 'Wash & Color Fixtures', value: '19x40W RGBW LED Zoom Washes' },
      { label: 'Broadcast Key Lighting', value: 'Warm/Cool White LED Fresnels & Profile Spots (CRI > 95)' },
      { label: 'Control Consoles', value: 'grandMA2 Full-Size & Avolites Tiger Touch II' },
      { label: 'Atmospheric Support', value: 'Continuous Fine Hazers & Low-Fog Cryogenic Units' },
      { label: 'Data Distribution', value: 'Opto-Isolated DMX Splitters & Art-Net Node Networks' }
    ],
    faqs: [
      {
        question: 'Can you synchronize lighting cues to live music and video playback?',
        answer: 'Yes. We utilize SMPTE timecode and MIDI clock synchronization to trigger lighting changes, video keyframes, and audio cues in unison.'
      },
      {
        question: 'Do your lights flicker on broadcast television cameras?',
        answer: 'No. All our LED fixtures feature high-frequency PWM dimming specifically engineered for broadcast TV cameras and high-frame-rate slow motion.'
      },
      {
        question: 'Do you create 3D lighting visualization plots before setup?',
        answer: 'Yes. We build 3D stage renders in WYSIWYG or Capture software so you can preview and approve lighting designs before on-site installation.'
      }
    ],
    relevantProjectSlugs: ['boostrong-king-of-the-ring-kun-khmer', 'greet-music-festival', 'nico-solo-concert']
  },
  'full-event-production': {
    tagline: 'Turnkey Technical Engineering from Initial CAD Blueprint to Final Cue',
    deepDiveParagraphs: [
      'When your event cannot afford friction or miscommunication, LED Events’ turnkey production package delivers seamless end-to-end management. We integrate staging, LED video walls, concert audio, intelligent lighting, structural rigging, and on-site electrical power under a single accountable technical director.',
      'From initial venue site inspections and 3D CAD modeling through multi-track rehearsal coordination, our 30+ full-time technical specialists manage every logistical complexity.',
      'Promoters, multinational corporations, and event agencies benefit from single-vendor convenience, unified master run-of-show cue sheets, and zero technical finger-pointing.'
    ],
    hardwareSpecs: [
      { label: 'Lifecycle Scope', value: 'Consultation • 3D CAD • Logistics • Rigging • Show Execution • Teardown' },
      { label: 'Dedicated Personnel', value: 'Technical Director, FOH Audio Lead, Video Master, Lighting Programmer, Master Riggers' },
      { label: 'Power Infrastructure', value: 'Synchronized Generator Plants & Distribution Breakers' },
      { label: 'Safety Protocols', value: 'Certified PPE, Fall-Arrest Systems & Structural Load Sign-Offs' },
      { label: 'Communication Hub', value: 'Multi-Channel Wireless Production Intercom (Clear-Com)' },
      { label: 'Turnaround Time', value: 'Rapid Overnight Load-In and Precision Teardown' }
    ],
    faqs: [
      {
        question: 'What does "Turnkey Event Production" include?',
        answer: 'It includes everything required on stage and FOH: structural staging, LED video walls, sound systems, stage lighting, rigging motors, power distribution, signal cabling, live operators, and an assigned Technical Director overseeing the run of show.'
      },
      {
        question: 'How early should we book for large-scale concerts or festivals?',
        answer: 'For large stadium productions requiring custom stage designs and extensive CAD engineering, we recommend 4 to 8 weeks in advance. However, our deep equipment fleet allows rapid turnarounds for urgent events.'
      },
      {
        question: 'Can you coordinate with foreign touring artists and technical riders?',
        answer: 'Yes. We regularly interface with international touring managers, translating overseas technical riders into compliant equipment packages available in Cambodia.'
      }
    ],
    relevantProjectSlugs: ['greet-music-festival', 'krud-kunkhmer-tour-concert', 'vattanac-live-show']
  }
};

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const defaultExtended: ServiceExtendedItem = {
    tagline: service.shortDesc,
    deepDiveParagraphs: [service.fullDesc || service.shortDesc],
    hardwareSpecs: (service.equipmentHighlights || []).map((s) => ({ label: 'Specification', value: s })),
    faqs: [],
    relevantProjectSlugs: []
  };

  const extended: ServiceExtendedItem = SERVICE_EXTENDED_DATA[service.slug] || defaultExtended;

  const relevantProjects = PROJECTS.filter((p) => extended.relevantProjectSlugs.includes(p.slug));

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen">
      <SeoHead
        title={`${service.title} in Cambodia | Professional Rental & Engineering`}
        description={`${service.title} by LED Events Cambodia: ${extended.tagline}. Certified hardware, redundant processing, and experienced on-site engineers.`}
      />

      {/* Page Hero */}
      <PageHero
        badge={`SYSTEM // ${service.number}`}
        title={service.title}
        subtitle={extended.tagline}
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: service.title }
        ]}
        extraContent={
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-white text-black hover:bg-[#E5E5E5] px-6 py-3 text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <span>Get Quotation for this System</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#technical-specs"
              className="px-6 py-3 bg-[#141414] hover:bg-[#202020] border border-[#262626] text-xs font-bold uppercase tracking-wider text-white transition-colors"
            >
              Technical Specifications
            </a>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {/* Main Service Image Banner & Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[16/10] overflow-hidden bg-black border border-[#222222]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#0A0A0A]/90 px-3 py-1 text-xs font-mono text-white border border-[#262626]">
                DISCIPLINE {service.number}
              </div>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {service.features.map((h, i) => (
                <div key={i} className="p-4 bg-[#0D0D0D] border border-[#222222] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-[#E5E5E5] font-medium leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">
              ENGINEERING OVERVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight leading-tight">
              Mission-Critical Reliability on Every Live Cue
            </h2>

            <div className="space-y-4 text-sm text-[#A3A3A3] leading-relaxed">
              {extended.deepDiveParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Quick Consultation Callout */}
            <div className="p-6 bg-[#0D0D0D] border border-[#222222] space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                Need Fast Turnaround?
              </h4>
              <p className="text-xs text-[#888888]">
                Our warehouse is situated in Sen Sok, Phnom Penh, stocked with complete hardware packages ready for emergency mobilization.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="text-xs font-bold uppercase tracking-wider text-white hover:underline flex items-center gap-1"
                >
                  <span>Book Site Inspection or Equipment Lock</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Specialized Breakdown: Indoor vs Outdoor (For LED Screen) */}
        {extended.indoorVsOutdoor && (
          <section className="p-8 bg-[#0D0D0D] border border-[#222222] space-y-8">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373]">
                ENVIRONMENTAL CLASSIFICATION
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight mt-1">
                Indoor vs Outdoor Technical Comparison
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-[#121212] border border-[#262626] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
                  <h4 className="text-base font-bold uppercase text-white">
                    {extended.indoorVsOutdoor.indoor.title}
                  </h4>
                  <span className="px-2 py-0.5 bg-[#1C1C1C] text-[10px] font-mono text-emerald-400">
                    High Pixel Density
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#1C1C1C]">
                    <span className="text-[#737373]">Pixel Pitch:</span>
                    <span className="font-mono text-white">{extended.indoorVsOutdoor.indoor.pitch}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1C1C1C]">
                    <span className="text-[#737373]">Brightness Output:</span>
                    <span className="font-mono text-white">{extended.indoorVsOutdoor.indoor.brightness}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-[#737373] block mb-1">Recommended Deployment:</span>
                    <p className="text-[#CCCCCC] leading-relaxed">
                      {extended.indoorVsOutdoor.indoor.idealFor}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#121212] border border-[#262626] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
                  <h4 className="text-base font-bold uppercase text-white">
                    {extended.indoorVsOutdoor.outdoor.title}
                  </h4>
                  <span className="px-2 py-0.5 bg-[#1C1C1C] text-[10px] font-mono text-emerald-400">
                    IP65 Weatherproof
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#1C1C1C]">
                    <span className="text-[#737373]">Pixel Pitch:</span>
                    <span className="font-mono text-white">{extended.indoorVsOutdoor.outdoor.pitch}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#1C1C1C]">
                    <span className="text-[#737373]">Brightness Output:</span>
                    <span className="font-mono text-white">{extended.indoorVsOutdoor.outdoor.brightness}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-[#737373] block mb-1">Recommended Deployment:</span>
                    <p className="text-[#CCCCCC] leading-relaxed">
                      {extended.indoorVsOutdoor.outdoor.idealFor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Specialized Breakdown: Structural Safety & Load Ratings (For Stage Rental) */}
        {extended.safetyAndRigging && (
          <section className="p-8 bg-[#0D0D0D] border border-[#222222] space-y-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373]">
                STRUCTURAL INTEGRITY STANDARDS
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight mt-1">
                Engineering Safety & Load Capacity
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 bg-[#121212] border border-[#262626]">
                <ShieldCheck className="w-5 h-5 text-white mb-2" />
                <span className="text-[10px] font-mono uppercase text-[#737373] block">Live Load Capacity</span>
                <p className="text-sm font-bold text-white mt-1">{extended.safetyAndRigging.loadRating}</p>
              </div>
              <div className="p-5 bg-[#121212] border border-[#262626]">
                <Layers className="w-5 h-5 text-white mb-2" />
                <span className="text-[10px] font-mono uppercase text-[#737373] block">Truss Construction</span>
                <p className="text-sm font-bold text-white mt-1">{extended.safetyAndRigging.trussSpecs}</p>
              </div>
              <div className="p-5 bg-[#121212] border border-[#262626]">
                <CheckCircle2 className="w-5 h-5 text-white mb-2" />
                <span className="text-[10px] font-mono uppercase text-[#737373] block">Safety Protocol</span>
                <p className="text-sm font-bold text-white mt-1">{extended.safetyAndRigging.certification}</p>
              </div>
              <div className="p-5 bg-[#121212] border border-[#262626]">
                <Cpu className="w-5 h-5 text-white mb-2" />
                <span className="text-[10px] font-mono uppercase text-[#737373] block">Terrain Compensation</span>
                <p className="text-sm font-bold text-white mt-1">{extended.safetyAndRigging.levelingPrecision}</p>
              </div>
            </div>
          </section>
        )}

        {/* Technical Specifications Table */}
        <section id="technical-specs" className="pt-8 border-t border-[#1C1C1C]">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
              HARDWARE SPECIFICATIONS
            </span>
            <h3 className="text-2xl font-black uppercase text-white tracking-tight mt-1">
              Engineered Technical Standards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {extended.hardwareSpecs.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-[#0D0D0D] border border-[#222222]"
              >
                <span className="text-xs font-mono text-[#888888]">{item.label}</span>
                <span className="text-xs font-mono text-white font-bold text-right ml-4">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Relevant Verified Projects */}
        {relevantProjects.length > 0 && (
          <section className="pt-8 border-t border-[#1C1C1C]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                  VERIFIED DEPLOYMENTS
                </span>
                <h3 className="text-2xl font-black uppercase text-white tracking-tight mt-1">
                  Projects Utilizing {service.title}
                </h3>
              </div>
              <Link
                to="/projects"
                className="text-xs font-mono text-white hover:underline flex items-center gap-1"
              >
                <span>View Complete Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relevantProjects.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#0D0D0D] border border-[#222222] hover:border-white transition-colors group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-black border-b border-[#1C1C1C]">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#0A0A0A]/90 text-[10px] font-mono text-white">
                        {p.category}
                      </span>
                    </div>

                    <div className="p-5">
                      <span className="text-[10px] font-mono text-[#737373] block mb-1">
                        {p.location}
                      </span>
                      <h4 className="text-base font-bold uppercase text-white group-hover:translate-x-1 transition-transform">
                        {p.title}
                      </h4>
                      <p className="text-xs text-[#888888] mt-2 line-clamp-2">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      to={`/projects/${p.slug}`}
                      className="w-full py-2.5 bg-[#171717] hover:bg-white text-[#CCCCCC] hover:text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-[#2A2A2A]"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technical FAQ Section */}
        {extended.faqs.length > 0 && (
          <section className="pt-8 border-t border-[#1C1C1C]">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight mt-1">
                Technical Planning & On-Site FAQ
              </h3>
            </div>

            <div className="space-y-4 max-w-4xl">
              {extended.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-[#0D0D0D] border border-[#222222] transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-sm font-bold uppercase text-white tracking-wide">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#737373] transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180 text-white' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-[#A3A3A3] leading-relaxed border-t border-[#1C1C1C] pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Direct Quotation Stepper CTA */}
        <section className="p-10 bg-[#0A0A0A] border border-[#222222] text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest">
              STEP 1: TECHNICAL SCOPE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              Ready to deploy {service.title} for your event?
            </h3>
            <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
              Submit your event date, expected attendee capacity, and venue location. Our technical production supervisors respond with CAD layouts and pricing within 24 hours.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-black hover:bg-[#E5E5E5] px-8 py-4 text-xs font-black uppercase tracking-widest flex items-center gap-2"
            >
              <span>Submit Event Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="bg-[#141414] text-[#A3A3A3] hover:text-white border border-[#262626] px-6 py-4 text-xs font-bold uppercase tracking-wider"
            >
              Browse All Services
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
