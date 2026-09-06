import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { fadeUpVariants } from '../utils/animations';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeroProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  extraContent?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge = 'PRODUCTION CUE',
  title,
  titleAccent,
  subtitle,
  breadcrumbs,
  extraContent,
}) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#050505] border-b border-[#1A1A1A] overflow-hidden">
      {/* Subtle architectural stage grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Subtle stage lighting beam indicator (solid/clean opacity line) */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-[#333333] opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-[#333333] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="space-y-6"
        >
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#737373]" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">
                HOME
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight className="w-3.5 h-3.5 text-[#444444]" />
                  {crumb.to ? (
                    <Link to={crumb.to} className="hover:text-white transition-colors">
                      {crumb.label.toUpperCase()}
                    </Link>
                  ) : (
                    <span className="text-white font-semibold">
                      {crumb.label.toUpperCase()}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          {/* Cue Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-[#262626] text-xs font-mono text-[#A3A3A3]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="tracking-widest uppercase">{badge}</span>
          </div>

          {/* Main H1 Title */}
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.08]">
              {title}{' '}
              {titleAccent && <span className="text-[#A3A3A3] font-medium block sm:inline">{titleAccent}</span>}
            </h1>
            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-[#A3A3A3] max-w-3xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {extraContent && <div className="pt-2">{extraContent}</div>}
        </motion.div>
      </div>
    </section>
  );
};
