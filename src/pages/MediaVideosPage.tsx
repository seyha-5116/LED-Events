import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowLeft, Video, Clock } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { MEDIA_ITEMS } from '../data/ledEventsData';

interface MediaVideosPageProps {
  onOpenVideo: (url: string, title: string) => void;
}

export const MediaVideosPage: React.FC<MediaVideosPageProps> = ({ onOpenVideo }) => {
  const videos = MEDIA_ITEMS.filter((m) => m.type === 'video');

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen">
      <SeoHead
        title="Concert & Event Videos | LED Events Cambodia"
        description="Watch live stadium concerts, Kun Khmer fight broadcasts, and technical synchronization videos engineered by LED Events in Cambodia."
      />

      {/* Page Hero */}
      <PageHero
        badge="CINEMATIC BROADCASTS"
        title="Event Videos &"
        titleAccent="Concert Recaps"
        subtitle="Full audiovisual recordings showcasing synchronized LED walls, moving head lighting, and line-array acoustics in action."
        breadcrumbs={[
          { label: 'Media', to: '/media' },
          { label: 'Videos' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="flex items-center justify-between pb-6 border-b border-[#1C1C1C]">
          <span className="text-xs font-mono text-[#737373] uppercase">
            Showing {videos.length} Production Broadcasts
          </span>
          <Link
            to="/media"
            className="text-xs font-mono text-[#A3A3A3] hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Media Hub</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid) => (
            <div
              key={vid.id}
              className="bg-[#0D0D0D] border border-[#222222] hover:border-white transition-colors group flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-black border-b border-[#1C1C1C]">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0A0A0A]/90 border border-[#262626] text-[10px] font-mono text-white">
                    {vid.category}
                  </div>
                  <button
                    onClick={() => onOpenVideo(vid.videoUrl || '', vid.title)}
                    className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white text-black hover:scale-110 transition-transform flex items-center justify-center shadow-2xl cursor-pointer"
                    aria-label={`Play ${vid.title}`}
                  >
                    <Play className="w-6 h-6 fill-black ml-0.5" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 mb-2">
                    <span>{vid.year} Broadcast</span>
                  </div>
                  <h3 className="text-base font-bold uppercase text-white tracking-tight group-hover:translate-x-0.5 transition-transform">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-[#888888] mt-3 leading-relaxed">
                    {vid.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenVideo(vid.videoUrl || '', vid.title)}
                  className="w-full py-2.5 bg-[#171717] hover:bg-white text-white hover:text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#2A2A2A] transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Play Broadcast Video</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
