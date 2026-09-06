import React from 'react';
import { motion } from 'motion/react';
import { VERIFIED_STATS } from '../data/ledEventsData';
import { ShieldCheck, Cpu, Users, Award } from 'lucide-react';

export const StatsIntro: React.FC = () => {
  return (
    <section className="bg-[#0A0A0A] py-24 border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Editorial Headline */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-widest mb-4">
              <span className="w-4 h-[1px] bg-[#737373]" />
              <span>Company Overview</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
              Built on Experience. <br />
              <span className="text-[#A3A3A3]">Driven by Precision.</span>
            </h2>
            <p className="mt-6 text-sm text-[#737373] font-mono tracking-widest uppercase">
              #159A, Street 2011, Dei Thmey Village, Sen Sok District, Phnom Penh
            </p>
          </div>

          {/* Right Column: Company Explanation */}
          <div className="lg:col-span-6 space-y-6 text-[#A3A3A3] text-base leading-relaxed">
            <p>
              LED Events is a premier full-service event production company based in Phnom Penh, Cambodia. Since our founding in 2012, we have delivered the technical backbone for the Kingdom’s most demanding live events—ranging from multi-province stadium concert tours and international music festivals to high-level corporate summits and royal ceremonies.
            </p>
            <p>
              What distinguishes LED Events is our adherence to a unified, fail-safe system. Rather than managing disparate subcontractors with conflicting equipment, our client partners receive single-point accountability covering high-resolution LED screens, certified stage structures, line-array audio acoustics, and synchronized intelligent lighting.
            </p>
            <p className="text-white font-medium">
              Every production is backed by dual-redundancy signal pathways, on-site backup generators, and over 30 experienced technicians committed to zero show interruption.
            </p>
          </div>
        </div>

        {/* Verified Stats Grid */}
        <div className="mt-20 pt-16 border-t border-[#1C1C1C] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VERIFIED_STATS.map((stat, idx) => {
            const icons = [Award, Users, Cpu, ShieldCheck];
            const Icon = icons[idx % icons.length];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#111111] p-6 border border-[#222222] hover:border-[#444444] transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#737373] uppercase tracking-wider">0{idx + 1}</span>
                  <Icon className="w-5 h-5 text-[#A3A3A3]" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight font-mono">
                  {stat.value}
                  <span className="text-lg text-[#737373] font-normal ml-1">{stat.suffix}</span>
                </div>
                <div className="mt-3 text-xs uppercase tracking-wider font-semibold text-[#A3A3A3]">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
