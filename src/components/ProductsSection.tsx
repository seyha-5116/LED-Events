import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Check, Wind, Monitor } from 'lucide-react';
import { PRODUCTS } from '../data/ledEventsData';

export const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="bg-[#050505] py-28 border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-8 border-b border-[#1C1C1C]">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-widest mb-3">
            <span className="w-2 h-2 bg-white" />
            <span>Hardware & Special Divisions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Specialized Products
          </h2>
          <p className="mt-4 text-base text-[#A3A3A3] leading-relaxed">
            In addition to full-service live event production rentals, LED Events operates dedicated divisions for atmospheric stage effects and permanent commercial LED hardware installations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PRODUCTS.map((prod, idx) => {
            const Icon = idx === 0 ? Wind : Monitor;

            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0A0A0A] border border-[#262626] p-8 sm:p-10 flex flex-col justify-between hover:border-white transition-colors group"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-[#141414] border border-[#2E2E2E]">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373]">
                          Division 0{idx + 1}
                        </span>
                        <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                          {prod.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-[#A3A3A3] uppercase mb-4 tracking-wider">
                    {prod.tagline}
                  </p>

                  <div className="h-48 w-full overflow-hidden border border-[#222222] mb-6 bg-[#111111]">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  <p className="text-sm text-[#D4D4D4] leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {prod.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#A3A3A3]">
                        <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1F1F1F]">
                  <a
                    href={prod.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full p-4 bg-[#141414] hover:bg-white text-white hover:text-black border border-[#2E2E2E] hover:border-white transition-all text-xs font-bold uppercase tracking-wider"
                  >
                    <span>{prod.platformLabel}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
