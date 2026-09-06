import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Users, 
  Clock, 
  Layers, 
  Award, 
  ArrowRight, 
  Zap, 
  Radio, 
  Sparkles,
  FileCheck
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { WHY_US_STRENGTHS, COMPANY_INFO } from '../data/ledEventsData';
import { fadeUpVariants } from '../utils/animations';

export const WhyUsPage: React.FC = () => {
  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen">
      <SeoHead
        title="Why LED Events | Cambodia's Most Reliable Event Production System"
        description="Discover why top promoters trust LED Events since 2012: The 5 Pillars of Technical Reliability, 30+ certified technicians, dual-redundant backup systems, and zero-compromise safety."
      />

      {/* Hero Header */}
      <PageHero
        badge="PHILOSOPHY & CREDENTIALS"
        title="Engineering Trust in"
        titleAccent="High-Stakes Live Environments"
        subtitle="Since 2012, LED Events has operated under a single operating doctrine: zero failure, unified technical accountability, and absolute safety across every live cue."
        breadcrumbs={[{ label: 'Why Us' }]}
        extraContent={
          <div className="flex flex-wrap gap-6 pt-2 text-xs font-mono text-[#A3A3A3]">
            <div>
              <span className="text-white font-bold block text-sm">2012</span>
              <span>Founded in Phnom Penh</span>
            </div>
            <div>
              <span className="text-white font-bold block text-sm">30+</span>
              <span>Full-Time Specialists</span>
            </div>
            <div>
              <span className="text-white font-bold block text-sm">100%</span>
              <span>Zero-Downtime Track Record</span>
            </div>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">
              OUR HERITAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              Over a Decade of Production Leadership
            </h2>
            <div className="space-y-4 text-sm text-[#A3A3A3] leading-relaxed">
              <p>
                In 2012, event production in Cambodia was fragmented. Organizers rented stages from carpenter workshops, speakers from small audio outfits, and lighting from independent technicians. The result was frequent power trips, distorted microphones, and dangerous structural compromises.
              </p>
              <p>
                LED Events was founded to introduce European and international concert production standards to Cambodia. We invested in certified aluminum truss systems, high-density LED displays, and computerized line-array audio, bringing every discipline under a single rigorous quality control methodology.
              </p>
              <p>
                Today, our Sen Sok headquarters and logistics hub manages Cambodia’s largest continuous inventory of stage platforms, NovaStar video processors, and concert audio consoles.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] bg-black border border-[#222222] overflow-hidden group">
              <img
                src="https://ledevents.asia/storage/section-items/GO8J3aMphCgNdGTZ1m4pjo7veTV9AwMueyekazI0.jpg"
                alt="LED Events Technical Team on Stage"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#222222]">
                <span className="text-[10px] font-mono uppercase text-[#737373] block">
                  TECHNICAL EXCELLENCE
                </span>
                <p className="text-xs font-bold text-white uppercase mt-1">
                  Synchronized stage calibration before live stadium concert
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 5 Core Strengths Detailed Breakdown */}
        <section className="pt-12 border-t border-[#1C1C1C]">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
              THE 5 PILLARS OF RELIABILITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mt-2">
              Why Cambodia’s Landmark Events Rely on Us
            </h2>
            <p className="text-sm text-[#888888] mt-3">
              Explore the five foundational pillars that eliminate unpredictability from live event execution.
            </p>
          </div>

          <div className="space-y-8">
            {WHY_US_STRENGTHS.map((strength) => (
              <div
                key={strength.number}
                className="p-8 bg-[#0D0D0D] border border-[#222222] hover:border-white transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-2xl font-mono font-bold text-white">
                        {strength.number}
                      </span>
                      <span className="px-3 py-1 bg-[#171717] border border-[#262626] text-[10px] font-mono text-emerald-400 uppercase">
                        {strength.subtitle}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                      {strength.title}
                    </h3>
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-sm text-[#CCCCCC] leading-relaxed">
                      {strength.description}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2">
                      {strength.keyPoints.map((point, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#141414] border border-[#262626] text-xs font-mono text-[#888888]"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team & Safety Standards */}
        <section className="pt-12 border-t border-[#1C1C1C]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                SAFETY & RIGGING STANDARDS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                Safety Over Expediency: Zero Exceptions
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                Suspending tons of audio line-arrays, moving lights, and LED panels above human performers and audience members requires structural rigor. We adhere to international rigging safety coefficients:
              </p>

              <div className="space-y-3">
                <div className="p-4 bg-[#0D0D0D] border border-[#222222] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-white">5:1 Safety Factor on All Rigging Hardware</h4>
                    <p className="text-[11px] text-[#888888] mt-1">All shackles, steel wire ropes, and spansets are load-rated for at least 5 times the working load limit.</p>
                  </div>
                </div>

                <div className="p-4 bg-[#0D0D0D] border border-[#222222] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-white">Wind-Load Contingency Protocols</h4>
                    <p className="text-[11px] text-[#888888] mt-1">Outdoor roof structures are engineered with wind-release side scrims and concrete ballast anchoring systems.</p>
                  </div>
                </div>

                <div className="p-4 bg-[#0D0D0D] border border-[#222222] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-white">Personal Protective Equipment (PPE)</h4>
                    <p className="text-[11px] text-[#888888] mt-1">100% harness compliance for high-altitude riggers, steel-toe boot mandates, and hard hats during load-in and load-out.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                HUMAN CAPITAL
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                Our 30+ Certified Technicians
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                Equipment is only as reliable as the hands operating it. Unlike rental companies that hire temporary street labor on show days, LED Events maintains a permanent roster of full-time, salaried engineers:
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#0D0D0D] border border-[#222222]">
                  <span className="text-[10px] font-mono text-[#737373] uppercase block">Video Department</span>
                  <h4 className="text-sm font-bold text-white mt-1">NovaStar Certified Master Engineers</h4>
                </div>
                <div className="p-4 bg-[#0D0D0D] border border-[#222222]">
                  <span className="text-[10px] font-mono text-[#737373] uppercase block">Audio Department</span>
                  <h4 className="text-sm font-bold text-white mt-1">Dante Audio Network Specialists</h4>
                </div>
                <div className="p-4 bg-[#0D0D0D] border border-[#222222]">
                  <span className="text-[10px] font-mono text-[#737373] uppercase block">Lighting Department</span>
                  <h4 className="text-sm font-bold text-white mt-1">grandMA Console Programmers</h4>
                </div>
                <div className="p-4 bg-[#0D0D0D] border border-[#222222]">
                  <span className="text-[10px] font-mono text-[#737373] uppercase block">Staging & Rigging</span>
                  <h4 className="text-sm font-bold text-white mt-1">Certified Master Riggers</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Trust Section */}
        <section className="p-10 bg-[#0A0A0A] border border-[#222222] text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            PARTNER WITH CAMBODIA'S MOST RELIABLE TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Ready to Plan Your Next Production?
          </h2>
          <p className="text-xs sm:text-sm text-[#888888] max-w-xl mx-auto leading-relaxed">
            Schedule a visit to our Sen Sok warehouse or request a CAD stage layout and quotation for your upcoming date.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-black hover:bg-[#E5E5E5] px-8 py-4 text-xs font-black uppercase tracking-widest flex items-center gap-2"
            >
              <span>Speak with a Technical Director</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
