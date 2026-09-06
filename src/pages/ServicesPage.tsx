import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Radio,
  Sliders,
  ChevronRight
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { SERVICES, PROJECTS, COMPANY_INFO } from '../data/ledEventsData';
import { fadeUpVariants } from '../utils/animations';

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen">
      <SeoHead
        title="Event Production Services in Cambodia | LED Screen, Stage, Sound & Lighting"
        description="Explore LED Events' 5 core technical production disciplines: Modular Stage Rental, LED Screen Rental, Line-Array Sound Systems, Lighting Production, and Full Turnkey Event Execution."
      />

      {/* Hero Header */}
      <PageHero
        badge="DISCIPLINE MATRIX // SYSTEMS 01-05"
        title="Event Production"
        titleAccent="Services & Disciplines"
        subtitle="Five synchronized technical production departments engineered for stadium concerts, live broadcasts, and prestigious corporate summits across Cambodia."
        breadcrumbs={[{ label: 'Services' }]}
        extraContent={
          <div className="flex flex-wrap gap-4 text-xs font-mono text-[#A3A3A3] pt-2">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              Est. 2012 in Phnom Penh
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              30+ Certified Technicians
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              Dual-Redundant Backup Protocols
            </span>
          </div>
        }
      />

      {/* Services List Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          // Find projects that utilize this service
          const relatedProjects = PROJECTS.filter((p) => 
            p.scope.toLowerCase().includes(service.title.toLowerCase().split(' ')[0])
          ).slice(0, 2);

          return (
            <section
              key={service.id}
              id={`service-section-${service.slug}`}
              className="pt-8 border-t border-[#1C1C1C]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Visual Media Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black border border-[#222222] group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#0A0A0A]/90 px-3 py-1 text-xs font-mono text-white border border-[#262626]">
                      SYSTEM {service.number}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-2">
                      CORE DISCIPLINE • {service.number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#A3A3A3] mt-3 leading-relaxed">
                      {service.fullDesc || service.shortDesc}
                    </p>
                  </div>

                  {/* Highlights Bullet Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.features.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 bg-[#0D0D0D] border border-[#222222]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span className="text-xs text-[#CCCCCC] font-medium leading-snug">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Specs Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {service.equipmentHighlights.map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#141414] border border-[#262626] text-xs font-mono text-[#888888]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* CTA link to dedicated service page */}
                  <div className="pt-4 flex flex-wrap gap-4 items-center">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-[#E5E5E5] text-xs font-black uppercase tracking-widest transition-colors"
                    >
                      <span>Explore {service.title} Dedicated Page</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-4 py-3 bg-[#111111] text-[#A3A3A3] hover:text-white border border-[#2A2A2A] hover:border-white text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <span>Request Proposal</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Production Standards Banner */}
      <section className="py-20 bg-[#0A0A0A] border-y border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
              TURNKEY RIGOR
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-2">
              Why Synchronized Event Disciplines Outperform Split Vendors
            </h3>
            <p className="text-xs sm:text-sm text-[#888888] mt-3 leading-relaxed">
              When audio, visual, lighting, and stage rigging are operated by separate contractors, communication gaps lead to delayed sound checks, overloaded power circuits, and video lag. LED Events provides one accountable team, one unified master clock, and zero finger-pointing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#0D0D0D] border border-[#222222]">
              <Cpu className="w-6 h-6 text-white mb-4" />
              <h4 className="text-base font-bold uppercase text-white">Centralized FOH Control</h4>
              <p className="text-xs text-[#888888] mt-2 leading-relaxed">
                Timecoded cues synchronize audio drops, lighting strobes, and video keyframes with sub-frame accuracy.
              </p>
            </div>
            <div className="p-6 bg-[#0D0D0D] border border-[#222222]">
              <ShieldCheck className="w-6 h-6 text-white mb-4" />
              <h4 className="text-base font-bold uppercase text-white">Certified Load Calculations</h4>
              <p className="text-xs text-[#888888] mt-2 leading-relaxed">
                Every truss line, electric chain hoist, and ground support base is mathematically checked against venue structural limits.
              </p>
            </div>
            <div className="p-6 bg-[#0D0D0D] border border-[#222222]">
              <Zap className="w-6 h-6 text-white mb-4" />
              <h4 className="text-base font-bold uppercase text-white">Dedicated Power Plants</h4>
              <p className="text-xs text-[#888888] mt-2 leading-relaxed">
                Dual three-phase generator plants isolate sensitive digital video scalers from heavy motor and lighting loads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="py-20 bg-[#050505] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            Need a Customized Technical Rider?
          </h3>
          <p className="text-sm text-[#888888] mt-3">
            Speak directly with our senior event technical directors to receive CAD stage layouts, electrical distribution plans, and quotation estimates within 24 hours.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-black hover:bg-[#E5E5E5] px-8 py-4 text-xs font-black uppercase tracking-widest"
            >
              Consult Production Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
