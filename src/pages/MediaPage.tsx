import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Play, 
  Video, 
  Image as ImageIcon, 
  Sparkles, 
  Layers 
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { MEDIA_ITEMS } from '../data/ledEventsData';

interface MediaPageProps {
  onOpenVideo: (url: string, title: string) => void;
}

export const MediaPage: React.FC<MediaPageProps> = ({ onOpenVideo }) => {
  const videos = MEDIA_ITEMS.filter((m) => m.type === 'video');
  const btsItems = MEDIA_ITEMS.filter((m) => m.type === 'bts');
  const galleryItems = MEDIA_ITEMS.filter((m) => m.type === 'gallery');

  const featuredVideo = videos[0];

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen">
      <SeoHead
        title="Media Hub | Event Videos & Staging Photography | LED Events Cambodia"
        description="Experience the sights and sounds of LED Events: live concert videos, stadium sports recaps, production photo galleries, and behind-the-scenes rigging documentary."
      />

      {/* Page Hero */}
      <PageHero
        badge="MEDIA CENTER // AUDIOVISUAL REPERTOIRE"
        title="Behind Every"
        titleAccent="Great Production"
        subtitle="Watch live concert broadcasts, inspect technical rigging photo archives, and discover how our production engineers calibrate multi-ton stage sets."
        breadcrumbs={[{ label: 'Media' }]}
        extraContent={
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/media/videos"
              className="px-4 py-2 bg-[#121212] border border-[#262626] hover:border-white text-xs font-mono uppercase tracking-wider text-white transition-colors flex items-center gap-2"
            >
              <Video className="w-3.5 h-3.5 text-[#A3A3A3]" />
              <span>Event Videos ({videos.length})</span>
            </Link>
            <Link
              to="/media/gallery"
              className="px-4 py-2 bg-[#121212] border border-[#262626] hover:border-white text-xs font-mono uppercase tracking-wider text-white transition-colors flex items-center gap-2"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#A3A3A3]" />
              <span>Photo Gallery ({galleryItems.length})</span>
            </Link>
            <Link
              to="/media/behind-the-scenes"
              className="px-4 py-2 bg-[#121212] border border-[#262626] hover:border-white text-xs font-mono uppercase tracking-wider text-white transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A3A3A3]" />
              <span>Behind the Scenes ({btsItems.length})</span>
            </Link>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {/* Featured Video Section */}
        {featuredVideo && (
          <section className="bg-[#0D0D0D] border border-[#222222] p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="relative aspect-video w-full bg-black border border-[#262626] overflow-hidden group">
                  <img
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => onOpenVideo(featuredVideo.videoUrl || '', featuredVideo.title)}
                      className="w-18 h-18 rounded-full bg-white text-black hover:scale-110 transition-transform flex items-center justify-center shadow-2xl cursor-pointer"
                      aria-label="Play Featured Video"
                    >
                      <Play className="w-8 h-8 fill-black ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-4">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">
                  FEATURED BROADCAST RECAP
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                  {featuredVideo.title}
                </h3>
                <p className="text-xs text-[#888888] leading-relaxed">
                  {featuredVideo.description}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenVideo(featuredVideo.videoUrl || '', featuredVideo.title)}
                    className="w-full py-3 bg-white text-black hover:bg-[#E5E5E5] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>Watch Full Video</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3 Dedicated Media Sub-Galleries Previews */}

        {/* 1. Videos Preview */}
        <section className="pt-8 border-t border-[#1C1C1C]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                CINEMATIC BROADCASTS
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight mt-1">
                Event Videos
              </h3>
            </div>
            <Link
              to="/media/videos"
              className="text-xs font-mono text-white hover:underline flex items-center gap-1"
            >
              <span>View All Videos ({videos.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((vid) => (
              <div
                key={vid.id}
                className="bg-[#0D0D0D] border border-[#222222] hover:border-white transition-colors group flex flex-col justify-between"
              >
                <div className="relative aspect-video overflow-hidden bg-black border-b border-[#1C1C1C]">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#0A0A0A]/90 text-[10px] font-mono text-white">
                    {vid.category}
                  </div>
                  <button
                    onClick={() => onOpenVideo(vid.videoUrl || '', vid.title)}
                    className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white/90 text-black hover:scale-110 transition-transform flex items-center justify-center shadow-lg cursor-pointer"
                    aria-label="Play video"
                  >
                    <Play className="w-5 h-5 fill-black ml-0.5" />
                  </button>
                </div>

                <div className="p-5">
                  <h4 className="text-sm font-bold uppercase text-white line-clamp-2">
                    {vid.title}
                  </h4>
                  <p className="text-xs text-[#888888] mt-2 line-clamp-2">
                    {vid.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Photo Gallery Preview */}
        <section className="pt-8 border-t border-[#1C1C1C]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                PHOTOGRAPHIC ARCHIVE
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight mt-1">
                Production Photo Gallery
              </h3>
            </div>
            <Link
              to="/media/gallery"
              className="text-xs font-mono text-white hover:underline flex items-center gap-1"
            >
              <span>Explore Full Gallery</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryItems.map((gal) => (
              <Link
                key={gal.id}
                to="/media/gallery"
                className="bg-[#0D0D0D] border border-[#222222] hover:border-white transition-colors group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black border-b border-[#1C1C1C]">
                  <img
                    src={gal.thumbnail}
                    alt={gal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#222222]">
                    <span className="text-[9px] font-mono uppercase text-[#737373] block">{gal.category}</span>
                    <p className="text-xs font-bold text-white uppercase mt-0.5">{gal.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. Behind the Scenes Preview */}
        <section className="pt-8 border-t border-[#1C1C1C]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                RIGGING & CALIBRATION
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight mt-1">
                Behind The Scenes
              </h3>
            </div>
            <Link
              to="/media/behind-the-scenes"
              className="text-xs font-mono text-white hover:underline flex items-center gap-1"
            >
              <span>View All BTS Stages</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {btsItems.map((bts) => (
              <div
                key={bts.id}
                className="bg-[#0D0D0D] border border-[#222222] hover:border-white transition-colors group flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black border-b border-[#1C1C1C]">
                  <img
                    src={bts.thumbnail}
                    alt={bts.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#0A0A0A]/90 text-[10px] font-mono text-emerald-400">
                    {bts.btsScope}
                  </span>
                </div>

                <div className="p-5">
                  <h4 className="text-sm font-bold uppercase text-white">
                    {bts.title}
                  </h4>
                  <p className="text-xs text-[#888888] mt-2">
                    {bts.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="p-10 bg-[#0A0A0A] border border-[#222222] text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            Want to see how our systems perform on your stage?
          </h3>
          <p className="text-xs sm:text-sm text-[#888888] max-w-xl mx-auto">
            Book a physical demonstration at our Phnom Penh warehouse or request our full technical equipment catalog.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-black hover:bg-[#E5E5E5] px-8 py-4 text-xs font-black uppercase tracking-widest"
            >
              Contact Our Engineers
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
