import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/ledEventsData';

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onStartProject }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn('Hero video autoplay was prevented or deferred by browser:', error);
        });
      }
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] pt-20"
    >
      {/* Background Event Video with Original Vivid Colors and Unobstructed Visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src={COMPANY_INFO.heroVideo} type="video/mp4" />
        </video>
        {/* Crisp balanced overlay allowing vibrant stage colors to show through clearly */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Decorative Technical Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-[#222222] grid grid-cols-4 divide-x divide-[#222222]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-[#222222] text-[#A3A3A3] text-[11px] font-mono tracking-widest uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 bg-white rounded-none" />
          <span>EVENT PRODUCTION • CAMBODIA</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.08] max-w-4xl"
        >
          The Most Reliable Event Production System in Cambodia
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-8 text-base sm:text-lg md:text-xl text-[#A3A3A3] max-w-3xl font-normal leading-relaxed"
        >
          Since 2012, LED Events has engineered Cambodia’s landmark concerts, international festivals, and high-prestige corporate productions. We deliver unified staging, ultra-bright LED displays, line-array acoustics, and synchronized lighting with unyielding technical discipline.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onExploreWork}
            id="hero-cta-explore"
            className="w-full sm:w-auto bg-white text-black hover:bg-[#E5E5E5] px-8 py-4 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-colors cursor-pointer"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onStartProject}
            id="hero-cta-start-project"
            className="w-full sm:w-auto bg-[#111111] text-white hover:bg-[#1A1A1A] border border-[#333333] hover:border-white px-8 py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-colors cursor-pointer"
          >
            <span>Start Your Project</span>
          </button>
        </motion.div>

        {/* Key Verification Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 pt-8 border-t border-[#1C1C1C] grid grid-cols-2 sm:grid-cols-4 gap-6 text-left w-full max-w-4xl"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
            <span className="text-xs text-[#A3A3A3] font-medium">Est. 2012 in Phnom Penh</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
            <span className="text-xs text-[#A3A3A3] font-medium">30+ Certified Specialists</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
            <span className="text-xs text-[#A3A3A3] font-medium">Zero-Failure Backup Systems</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
            <span className="text-xs text-[#A3A3A3] font-medium">Full Turnkey Production</span>
          </div>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#737373] text-[10px] uppercase tracking-widest">
        <span>Scroll to explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
};
