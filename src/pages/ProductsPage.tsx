import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Monitor } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { PRODUCTS } from '../data/ledEventsData';

export const ProductsPage: React.FC = () => {
  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen">
      <SeoHead
        title="Products & Commercial Sales | Fog Machines & LED Displays | LED Events"
        description="Explore specialized stage hardware and permanent commercial installations: EnvyStage Fog & Atmospheric Effects and LEDMedia Permanent LED Video Displays in Cambodia."
      />

      {/* Page Hero */}
      <PageHero
        badge="HARDWARE DIVISIONS & SALES"
        title="Stage Effects &"
        titleAccent="Commercial LED Systems"
        subtitle="In addition to turnkey live event rental, LED Events operates dedicated commercial supply platforms for stage atmospheric machines and permanent LED display installations."
        breadcrumbs={[{ label: 'Products' }]}
        extraContent={
          <div className="flex flex-wrap gap-4 text-xs font-mono text-[#A3A3A3] pt-2">
            <span>Official Platforms: EnvyStage & LEDMedia</span>
            <span>•</span>
            <span>Warranty & Local Support in Phnom Penh</span>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {/* Products Showcase */}
        <div className="space-y-20">
          {PRODUCTS.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={product.id}
                className="p-8 md:p-12 bg-[#0D0D0D] border border-[#222222] hover:border-white transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative aspect-[16/10] overflow-hidden bg-black border border-[#1C1C1C]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-[#0A0A0A]/90 border border-[#262626] text-xs font-mono text-emerald-400">
                        OFFICIAL PLATFORM
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <span className="text-xs font-mono text-[#737373] uppercase tracking-widest block">
                        {product.tagline}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mt-1">
                        {product.title}
                      </h2>
                    </div>

                    <p className="text-sm text-[#A3A3A3] leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block">
                        Platform Highlights:
                      </span>
                      {product.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs text-[#CCCCCC] leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-wrap gap-4 items-center">
                      <a
                        href={product.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 bg-white text-black hover:bg-[#E5E5E5] text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-colors"
                      >
                        <span>{product.platformLabel}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>

                      <Link
                        to="/contact"
                        className="px-5 py-3.5 bg-[#141414] hover:bg-[#202020] border border-[#262626] text-xs font-bold uppercase tracking-wider text-white transition-colors"
                      >
                        Request Sales Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Sales Consultation Banner */}
        <div className="p-10 bg-[#0A0A0A] border border-[#222222] text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            TURNKEY INSTALLATION & AFTER-SALES SERVICE
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            Permanent Installations for Venues, Retail & Corporate
          </h3>
          <p className="text-xs sm:text-sm text-[#888888] max-w-xl mx-auto leading-relaxed">
            Need a permanent indoor video wall in your boardroom or outdoor advertising billboard? Our engineering team provides CAD structural calculation, installation, warranty, and continuous maintenance.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-black hover:bg-[#E5E5E5] px-8 py-4 text-xs font-black uppercase tracking-widest flex items-center gap-2"
            >
              <span>Consult Commercial Sales</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
