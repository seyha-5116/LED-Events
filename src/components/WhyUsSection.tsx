import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Cpu, Users, Zap, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { WHY_US_STRENGTHS } from '../data/ledEventsData';

export const WhyUsSection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return Cpu;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Users':
        return Users;
      case 'Zap':
        return Zap;
      default:
        return Award;
    }
  };

  const selectedStrength = WHY_US_STRENGTHS[selectedIndex];
  const SelectedIcon = getIcon(selectedStrength.iconName);

  return (
    <section id="why-us" className="bg-[#050505] py-28 border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-[#1C1C1C]">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-widest mb-3">
            <span className="w-2 h-2 bg-white" />
            <span>Operational Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Why LED Events
          </h2>
          <p className="mt-4 text-base text-[#A3A3A3] leading-relaxed">
            In live event production, there are no second takes. We build our reputation on five structural pillars that protect your brand, timeline, and production budget.
          </p>
        </div>

        {/* Desktop Split Showcase & Mobile Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: List of 5 Pillars */}
          <div className="lg:col-span-5 space-y-3">
            {WHY_US_STRENGTHS.map((strength, idx) => {
              const isSelected = selectedIndex === idx;
              const ItemIcon = getIcon(strength.iconName);

              return (
                <div
                  key={strength.number}
                  onClick={() => setSelectedIndex(idx)}
                  className={`cursor-pointer p-5 border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#141414] border-white text-white'
                      : 'bg-[#0A0A0A] border-[#222222] text-[#A3A3A3] hover:border-[#444444] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-[#737373]">{strength.number}</span>
                    <ItemIcon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-[#737373]'}`} />
                    <div>
                      <h3 className="text-base font-bold uppercase tracking-wider">{strength.title}</h3>
                      <p className="text-xs text-[#737373] line-clamp-1">{strength.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'rotate-90 lg:rotate-0 text-white' : 'text-[#555555]'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Strength Deep Dive */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStrength.number}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0F0F0F] border border-[#262626] p-8 sm:p-10 space-y-8"
              >
                {/* Header with Icon and Big Number */}
                <div className="flex items-start justify-between pb-6 border-b border-[#1F1F1F]">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171717] border border-[#2E2E2E] text-xs font-mono text-[#A3A3A3] uppercase">
                      <SelectedIcon className="w-3.5 h-3.5 text-white" />
                      <span>Pillar {selectedStrength.number}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                      {selectedStrength.title}: {selectedStrength.subtitle}
                    </h3>
                  </div>
                  <span className="text-4xl sm:text-6xl font-black font-mono text-[#262626]">
                    {selectedStrength.number}
                  </span>
                </div>

                {/* Narrative */}
                <p className="text-base text-[#D4D4D4] leading-relaxed">
                  {selectedStrength.description}
                </p>

                {/* Key Points Checklist */}
                <div className="space-y-3 pt-4 border-t border-[#1F1F1F]">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                    Operational Standards & Rigor
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedStrength.keyPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-[#141414] border border-[#222222]">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span className="text-xs text-[#A3A3A3] leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Production Guarantee Banner */}
                <div className="p-4 bg-[#171717] border border-[#333333] flex items-center justify-between text-xs">
                  <span className="text-[#A3A3A3]">
                    Guaranteed across every LED Events production in Cambodia.
                  </span>
                  <span className="text-white font-mono uppercase font-bold tracking-wider">
                    Zero Compromise
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
