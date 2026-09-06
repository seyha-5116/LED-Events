import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRODUCTION_STEPS } from '../data/ledEventsData';
import { Check } from 'lucide-react';

export const HowWeWorkSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-we-work" className="bg-[#0A0A0A] py-28 border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#1C1C1C] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 bg-white" />
              <span>Systematic Execution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              How We Work
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#A3A3A3] leading-relaxed">
            From preliminary technical brief to final post-event debrief, our six-stage production lifecycle guarantees predictability and precision.
          </p>
        </div>

        {/* Step Selector Timeline (Desktop & Tablet) */}
        <div className="hidden lg:grid grid-cols-6 gap-2 mb-12 border-b border-[#222222] pb-6">
          {PRODUCTION_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-3 border transition-all ${
                  isActive
                    ? 'bg-white text-black border-white'
                    : 'bg-[#111111] text-[#737373] border-[#222222] hover:text-white hover:border-[#444444]'
                }`}
              >
                <div className="text-xs font-mono font-bold mb-1">{step.number}</div>
                <div className="text-xs font-bold uppercase tracking-wider line-clamp-1">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box (Desktop) */}
        <div className="hidden lg:block bg-[#111111] border border-[#2E2E2E] p-10">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                Phase {PRODUCTION_STEPS[activeStep].number} of 06
              </span>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight mt-2">
                {PRODUCTION_STEPS[activeStep].title}
              </h3>
            </div>
            <span className="text-6xl font-black font-mono text-[#262626]">
              {PRODUCTION_STEPS[activeStep].number}
            </span>
          </div>

          <p className="mt-6 text-base text-[#D4D4D4] max-w-3xl leading-relaxed">
            {PRODUCTION_STEPS[activeStep].description}
          </p>

          <div className="mt-8 pt-6 border-t border-[#222222]">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#737373] mb-4">
              Phase Key Deliverables
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {PRODUCTION_STEPS[activeStep].deliverables.map((del, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-[#171717] border border-[#262626]">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span className="text-xs text-[#D4D4D4] font-medium">{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Stepper for Mobile & Tablets */}
        <div className="lg:hidden space-y-6">
          {PRODUCTION_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[#111111] border border-[#222222] p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-white px-2 py-1 bg-[#1F1F1F] border border-[#333333]">
                  Phase {step.number}
                </span>
                <span className="text-xl font-mono font-bold text-[#444444]">{step.number}</span>
              </div>

              <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                {step.title}
              </h3>

              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                {step.description}
              </p>

              <div className="pt-3 border-t border-[#1C1C1C] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#737373]">
                  Deliverables:
                </span>
                {step.deliverables.map((del, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#D4D4D4]">
                    <Check className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
