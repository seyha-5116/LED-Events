import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu, Radio, Sparkles } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { MEDIA_ITEMS } from '../data/ledEventsData';

export const MediaBtsPage: React.FC = () => {
  const btsItems = MEDIA_ITEMS.filter((m) => m.type === 'bts');

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen">
      <SeoHead
        title="Behind the Scenes & Rigging | LED Events Cambodia"
        description="Explore the technical engineering behind Cambodia's biggest shows: structural rigging, front-of-house control centers, acoustic tuning, and DMX lighting calibration."
      />

      {/* Page Hero */}
      <PageHero
        badge="BACKSTAGE RIGOR"
        title="Behind The Scenes &"
        titleAccent="Production Engineering"
        subtitle="Documenting the invisible hours of heavy rigging, phase alignment, and stress testing before the house lights dim."
        breadcrumbs={[
          { label: 'Media', to: '/media' },
          { label: 'Behind the Scenes' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="flex items-center justify-between pb-6 border-b border-[#1C1C1C]">
          <span className="text-xs font-mono text-[#737373] uppercase">
            Documentary Case Logs ({btsItems.length})
          </span>
          <Link
            to="/media"
            className="text-xs font-mono text-[#A3A3A3] hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Media Hub</span>
          </Link>
        </div>

        {/* Detailed BTS Cards */}
        <div className="space-y-16">
          {btsItems.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 bg-[#0D0D0D] border border-[#222222]"
            >
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] overflow-hidden bg-black border border-[#1C1C1C]">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#0A0A0A]/90 border border-[#262626] text-xs font-mono text-emerald-400">
                    STAGE STAGE // {index + 1}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono text-[#737373] uppercase tracking-widest block">
                  {item.btsScope}
                </span>
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-[#1C1C1C] flex flex-wrap gap-2 text-xs font-mono text-[#737373]">
                  <span>Dual Backup Systems</span>
                  <span>•</span>
                  <span>Direct FOH Communication</span>
                  <span>•</span>
                  <span>Calibrated Signal Distribution</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rigging Principles Callout */}
        <div className="p-8 bg-[#0A0A0A] border border-[#222222] text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
            Have Specific Rigging or Power Requirements?
          </h3>
          <p className="text-xs sm:text-sm text-[#888888] max-w-xl mx-auto">
            Our master riggers and electrical engineers coordinate directly with venue facility managers to calculate load points, phase balancing, and emergency egress corridors.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-[#E5E5E5] text-xs font-black uppercase tracking-widest transition-colors"
            >
              <span>Consult Technical Rigging Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
