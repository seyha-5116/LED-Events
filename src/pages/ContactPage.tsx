import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  Navigation,
  Copy,
  Check,
  ExternalLink,
  Map as MapIcon
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { SmartInquirySection } from '../components/SmartInquirySection';
import { COMPANY_INFO } from '../data/ledEventsData';
import { EventInquiry } from '../types';
import { 
  openCompanyGoogleMaps, 
  openCompanyDirections, 
  copyCompanyAddress, 
  scrollToCompanyMap 
} from '../utils/location';

interface ContactPageProps {
  onInquirySubmitted?: (inquiry: EventInquiry) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onInquirySubmitted }) => {
  const [copied, setCopied] = useState(false);

  // Smooth scroll to map if hash is present in URL
  useEffect(() => {
    if (window.location.hash === '#map' || window.location.hash === '#location' || window.location.hash === '#company-location-map') {
      setTimeout(() => {
        scrollToCompanyMap();
      }, 300);
    }
  }, []);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const ok = await copyCompanyAddress();
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen">
      <SeoHead
        title="Contact & Technical Quotation | LED Events Cambodia"
        description="Contact LED Events for event production in Cambodia. 24/7 technical hotline (015 999 235), headquarters in Sen Sok, Phnom Penh, and online quotation inquiries."
      />

      {/* Page Hero */}
      <PageHero
        badge="PRODUCTION DESK & BOOKINGS"
        title="Let's Build Something"
        titleAccent="Extraordinary Together"
        subtitle="Speak directly with our technical supervisors for turnkey stage design, LED screen rental, concert audio, and event lighting across Cambodia."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Contact Information & Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone Channel */}
          <div className="p-6 bg-[#0D0D0D] border border-[#222222] space-y-3">
            <div className="w-10 h-10 bg-[#171717] border border-[#262626] flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-[10px] font-mono uppercase text-[#737373] block">
              24/7 Production Hotline
            </span>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="text-lg font-bold text-white hover:underline block"
            >
              {COMPANY_INFO.phone}
            </a>
            <p className="text-xs text-[#888888]">
              Emergency dispatch & live show technical support.
            </p>
          </div>

          {/* Email Channel */}
          <div className="p-6 bg-[#0D0D0D] border border-[#222222] space-y-3">
            <div className="w-10 h-10 bg-[#171717] border border-[#262626] flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-[10px] font-mono uppercase text-[#737373] block">
              RFP & Technical Bids
            </span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-base font-bold text-white hover:underline block break-all"
            >
              {COMPANY_INFO.email}
            </a>
            <p className="text-xs text-[#888888]">
              Send CAD drawings and event riders for 24h quotation.
            </p>
          </div>

          {/* Headquarters Location Card (Direct click to Google Maps & smooth scroll) */}
          <div 
            id="headquarters-location-card"
            className="p-6 bg-[#0D0D0D] border border-[#222222] hover:border-[#444444] transition-all duration-300 flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-[#171717] border border-[#262626] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <MapPin className="w-5 h-5 text-emerald-400 group-hover:text-black transition-colors" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#171717] border border-[#262626] text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Base
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase text-[#737373] block">
                Phnom Penh Warehouse
              </span>
              <p className="text-sm font-bold text-white leading-snug">
                {COMPANY_INFO.address}
              </p>
              <p className="text-xs text-[#888888]">
                Sen Sok District, Phnom Penh, Kingdom of Cambodia.
              </p>
            </div>

            <div className="pt-2 border-t border-[#1C1C1C] space-y-2">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 bg-white text-black hover:bg-[#E5E5E5] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                title="Open LED Events in Google Maps"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={scrollToCompanyMap}
                  className="py-1.5 px-2 bg-[#171717] hover:bg-[#222222] text-[11px] font-mono text-[#A3A3A3] hover:text-white border border-[#262626] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  title="Scroll down to interactive map"
                >
                  <MapIcon className="w-3 h-3" />
                  <span>View Map</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="py-1.5 px-2 bg-[#171717] hover:bg-[#222222] text-[11px] font-mono text-[#A3A3A3] hover:text-white border border-[#262626] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  title="Copy exact address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Operational Hours */}
          <div className="p-6 bg-[#0D0D0D] border border-[#222222] space-y-3">
            <div className="w-10 h-10 bg-[#171717] border border-[#262626] flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <span className="text-[10px] font-mono uppercase text-[#737373] block">
              Operations Schedule
            </span>
            <p className="text-sm font-bold text-white leading-snug">
              Monday – Sunday
            </p>
            <p className="text-xs text-[#888888]">
              Warehouse: 08:00–18:00<br />
              Field Crews: 24/7 on show days.
            </p>
          </div>
        </div>

        {/* Direct Instant Messengers & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Instant Messaging Connectors */}
          <div className="lg:col-span-5 p-8 bg-[#0D0D0D] border border-[#222222] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">
                INSTANT CHAT CHANNELS
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                Connect Directly on Telegram & WhatsApp
              </h3>
              <p className="text-xs text-[#888888] leading-relaxed">
                Need an immediate reply for urgent equipment availability or weekend show changes? Message our technical dispatchers directly.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={COMPANY_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#141414] hover:bg-[#1E1E1E] border border-[#262626] flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-none bg-[#24A1DE] text-white flex items-center justify-center font-bold text-sm">
                      TG
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase group-hover:translate-x-0.5 transition-transform">
                        Telegram Direct Dispatch
                      </div>
                      <div className="text-[11px] text-[#737373]">{COMPANY_INFO.phoneIntl} • Instant Response</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:text-white transition-colors" />
                </a>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#141414] hover:bg-[#1E1E1E] border border-[#262626] flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-none bg-[#25D366] text-white flex items-center justify-center font-bold text-sm">
                      WA
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase group-hover:translate-x-0.5 transition-transform">
                        WhatsApp Business
                      </div>
                      <div className="text-[11px] text-[#737373]">{COMPANY_INFO.phoneIntl} • Verified Account</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:text-white transition-colors" />
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="p-4 bg-[#141414] hover:bg-[#1E1E1E] border border-[#262626] flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-none bg-white text-black flex items-center justify-center font-bold text-sm">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase group-hover:translate-x-0.5 transition-transform">
                        Direct Phone Call
                      </div>
                      <div className="text-[11px] text-[#737373]">{COMPANY_INFO.phone} • 24/7 Available</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1C1C1C] flex items-center gap-2 text-xs font-mono text-[#737373]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Registered Contractor in Kingdom of Cambodia</span>
            </div>
          </div>

          {/* Interactive Map & Sen Sok Logistics Hub */}
          <div 
            id="company-location-map"
            className="lg:col-span-7 bg-[#0D0D0D] border border-[#222222] p-8 flex flex-col justify-between space-y-6 scroll-mt-28"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">
                  • LOGISTICS & EQUIPMENT HUB
                </span>
                <span className="text-xs font-mono text-[#737373] hidden sm:inline">
                  Sen Sok, Phnom Penh
                </span>
              </div>
              <h3 className="text-xl font-bold uppercase text-white tracking-tight">
                Phnom Penh Central Operations Base
              </h3>
              <p className="text-xs text-[#888888] mt-2 leading-relaxed">
                Our 2,500m² Sen Sok staging facility houses all aluminum truss inventory, NovaStar processors, and line-array cabinets with dedicated loading docks for heavy freight vehicles.
              </p>
            </div>

            {/* Embedded Live Google Map with Direction Controls */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#121212] border border-[#262626] overflow-hidden group">
              <iframe
                id="google-maps-embed-frame"
                src={COMPANY_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LED Events Cambodia Google Maps Location"
                className="w-full h-full"
              />

              {/* Top Banner overlay with quick direct actions */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                <div className="bg-[#050505]/95 backdrop-blur-md px-3 py-1.5 border border-[#333333] shadow-lg pointer-events-auto flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px] font-mono text-white font-bold">
                    LED Events Cambodia
                  </span>
                </div>

                <div className="flex items-center gap-2 pointer-events-auto">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="px-2.5 py-1.5 bg-[#050505]/95 backdrop-blur-md border border-[#333333] hover:border-white text-[11px] font-mono text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Copy full address to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Bottom directions link */}
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                <div className="bg-[#050505]/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono text-[#A3A3A3] border border-[#262626] hidden sm:block">
                  Via Hanoi Blvd & Street 2011
                </div>

                <div className="flex items-center gap-2 ml-auto pointer-events-auto">
                  <a
                    href={COMPANY_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#171717]/95 hover:bg-emerald-500 text-white hover:text-black border border-[#333333] hover:border-emerald-500 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xl"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-white text-black hover:bg-[#E5E5E5] text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xl"
                  >
                    <span>Open in Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Technical Location Specs Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#737373] pt-2 border-t border-[#1C1C1C]">
              <a 
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>GPS: {COMPANY_INFO.coordinates.display}</span>
              </a>
              <span>Freight Docks: 4 High-Bay Vehicle Bays</span>
            </div>
          </div>
        </div>

        {/* Full Quotation Stepper */}
        <div className="pt-8">
          <SmartInquirySection onInquirySubmitted={onInquirySubmitted} />
        </div>
      </div>
    </div>
  );
};
