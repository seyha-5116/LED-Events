import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Phone, Mail, MapPin, Shield, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/ledEventsData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#050505] text-[#A3A3A3] border-t border-[#1C1C1C] pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Direct Inquiries Banner */}
        <div className="mb-16 p-8 bg-[#0D0D0D] border border-[#222222] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
              • Technical Production Desk
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
              Ready to engineer your next stage or concert?
            </h3>
            <p className="text-xs text-[#888888] mt-1 max-w-xl">
              From 40m outdoor festival stages to high-density LED video walls, our team of 30+ specialists is ready.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 bg-white text-black hover:bg-[#E5E5E5] px-6 py-3 text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-colors"
          >
            <span>Request Technical Proposal</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1C1C1C]">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3 inline-flex">
              <img
                src="/logo.png"
                alt="LED Events"
                className="h-10 w-auto object-contain"
              />
              <div>
                <span className="text-white text-lg font-black tracking-wider uppercase block leading-none">
                  LED EVENTS
                </span>
                <span className="text-[10px] text-[#737373] tracking-widest uppercase font-mono">
                  Cambodia • Est. 2012
                </span>
              </div>
            </Link>

            <p className="text-xs font-mono uppercase text-white tracking-wider font-semibold">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-sm text-[#737373] leading-relaxed">
              Phnom Penh’s trusted turnkey event production contractor delivering certified modular staging, ultra-bright LED displays, line-array acoustics, and synchronized lighting since 2012.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#111111] border border-[#222222] hover:border-white text-xs text-white hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href={COMPANY_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#111111] border border-[#222222] hover:border-white text-xs text-white hover:text-white transition-colors"
              >
                YouTube
              </a>
              <a
                href={COMPANY_INFO.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#111111] border border-[#222222] hover:border-white text-xs text-white hover:text-white transition-colors"
              >
                TikTok
              </a>
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#111111] border border-[#222222] hover:border-white text-xs text-white hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="text-[#A3A3A3] hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#A3A3A3] hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[#A3A3A3] hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-[#A3A3A3] hover:text-white transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-[#A3A3A3] hover:text-white transition-colors">
                  Media Hub
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#A3A3A3] hover:text-white transition-colors">
                  Technical Blog
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-[#A3A3A3] hover:text-white transition-colors">
                  Products & Sales
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#A3A3A3] hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Core Systems
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="text-[#A3A3A3] hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{srv.title}</span>
                    <span className="text-[10px] font-mono text-[#737373]">{srv.number}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-[#1C1C1C]">
                <a
                  href="https://envystage.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline flex items-center justify-between"
                >
                  <span>Fog & Atmospheric Effects ↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://ledmedia.com.kh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline flex items-center justify-between"
                >
                  <span>Commercial LED Sales ↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Hotline Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="space-y-1.5">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open LED Events Headquarters in Google Maps"
                  className="flex items-start gap-2.5 text-[#A3A3A3] hover:text-white transition-colors group/addr"
                >
                  <MapPin className="w-4 h-4 text-emerald-400 group-hover/addr:text-white shrink-0 mt-0.5 transition-colors" />
                  <span className="group-hover/addr:underline decoration-[#444444] leading-relaxed">
                    {COMPANY_INFO.address}
                  </span>
                </a>
                <div className="flex items-center gap-3 pl-6 text-[10px] font-mono text-emerald-400">
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline flex items-center gap-1 transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <span>•</span>
                  <Link
                    to="/contact#company-location-map"
                    className="text-[#737373] hover:text-white transition-colors"
                  >
                    Warehouse Map
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-white font-bold hover:underline">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#D4D4D4] hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#737373]">
          <div>
            © 2012–{new Date().getFullYear()} {COMPANY_INFO.legalName}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenAdmin}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Shield className="w-3 h-3" />
              <span>Operations Console</span>
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
