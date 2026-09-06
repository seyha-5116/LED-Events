import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, X, Layers, Sliders, Volume2, Lightbulb, Workflow } from 'lucide-react';
import { SERVICES } from '../data/ledEventsData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForInquiry,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'led-screen-rental':
        return Layers;
      case 'stage-rental':
        return Sliders;
      case 'sound-system':
        return Volume2;
      case 'lighting-production':
        return Lightbulb;
      default:
        return Workflow;
    }
  };

  return (
    <section id="services" className="bg-[#050505] py-28 border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#1C1C1C] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 bg-white" />
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              What We Produce
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#A3A3A3] leading-relaxed">
            Engineered audio-visual disciplines deployed individually or integrated as one turnkey production system across Phnom Penh and provincial Cambodia.
          </p>
        </div>

        {/* 5 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const IconComponent = getServiceIcon(service.slug);
            const isSpanTwo = idx === 4; // Full Event Production spans larger on desktop

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setSelectedService(service)}
                className={`group cursor-pointer bg-[#0A0A0A] border border-[#222222] hover:border-white transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${
                  isSpanTwo ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Media Container */}
                <div className="relative h-60 w-full overflow-hidden bg-[#111111]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  
                  {/* Service Number Tag */}
                  <div className="absolute top-4 left-4 bg-[#050505] text-white px-3 py-1 text-xs font-mono font-bold tracking-widest border border-[#222222]">
                    {service.number}
                  </div>

                  <div className="absolute top-4 right-4 bg-[#050505]/80 p-2 text-white border border-[#222222] group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-wider mb-2">
                      <IconComponent className="w-4 h-4 text-[#A3A3A3]" />
                      <span>{service.titleKm}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#A3A3A3] line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs">
                    <span className="text-[#737373] font-mono uppercase tracking-wider">
                      {service.features.length} Technical Specs
                    </span>
                    <span className="text-white font-semibold flex items-center gap-1 group-hover:underline">
                      View Specifications & Gallery →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] border border-[#333333] text-white flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-[#222222] flex items-center justify-between bg-[#111111]">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-2 py-1 bg-white text-black font-bold">
                    {selectedService.number}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">
                      {selectedService.title}
                    </h3>
                    <p className="text-xs text-[#737373] font-mono">{selectedService.titleKm}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 text-[#A3A3A3] hover:text-white bg-[#171717] border border-[#262626] hover:bg-[#222222] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content Scrollable */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
                {/* Hero Image */}
                <div className="h-64 sm:h-80 w-full overflow-hidden border border-[#222222]">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#737373] mb-2">
                    Scope of Capability
                  </h4>
                  <p className="text-base text-[#D4D4D4] leading-relaxed">
                    {selectedService.fullDesc}
                  </p>
                </div>

                {/* Key Features & Equipment Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#1C1C1C]">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#737373] mb-4">
                      Engineering Standards
                    </h4>
                    <ul className="space-y-3">
                      {selectedService.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#A3A3A3]">
                          <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#737373] mb-4">
                      Equipment Specifications
                    </h4>
                    <ul className="space-y-3">
                      {selectedService.equipmentHighlights.map((spec, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#A3A3A3]">
                          <span className="w-1.5 h-1.5 bg-white shrink-0 mt-2" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Gallery Images */}
                {selectedService.gallery && selectedService.gallery.length > 0 && (
                  <div className="pt-4 border-t border-[#1C1C1C]">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#737373] mb-4">
                      Production Photo Archive
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {selectedService.gallery.map((imgUrl, i) => (
                        <div key={i} className="h-28 overflow-hidden border border-[#222222] bg-[#111111]">
                          <img
                            src={imgUrl}
                            alt={`${selectedService.title} photo ${i + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer CTA */}
              <div className="p-6 border-t border-[#222222] bg-[#111111] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#A3A3A3]">
                  Ready to specify this service for your event in Cambodia?
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#A3A3A3] hover:text-white border border-[#262626] transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const title = selectedService.title;
                      setSelectedService(null);
                      onSelectServiceForInquiry(title);
                    }}
                    className="w-full sm:w-auto bg-white text-black px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#E5E5E5] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Request Quotation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
