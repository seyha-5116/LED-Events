import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Eye, Film, Image as ImageIcon, Wrench } from 'lucide-react';
import { MEDIA_ITEMS } from '../data/ledEventsData';
import { MediaItem } from '../types';
import { VideoModal } from './VideoModal';

export const MediaSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'video' | 'gallery' | 'bts'>('video');
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);

  const filteredMedia = MEDIA_ITEMS.filter((item) => item.type === activeTab);

  return (
    <section id="media" className="bg-[#050505] py-28 border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#1C1C1C] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 bg-white" />
              <span>Broadcast & Documentation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              Production Media
            </h2>
          </div>

          {/* Media Tabs */}
          <div className="flex flex-wrap items-center gap-2" role="tablist">
            <button
              onClick={() => setActiveTab('video')}
              role="tab"
              aria-selected={activeTab === 'video'}
              className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold border transition-colors ${
                activeTab === 'video'
                  ? 'bg-white text-black border-white'
                  : 'bg-[#111111] text-[#A3A3A3] border-[#222222] hover:text-white hover:border-[#444444]'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Event Videos</span>
            </button>

            <button
              onClick={() => setActiveTab('gallery')}
              role="tab"
              aria-selected={activeTab === 'gallery'}
              className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold border transition-colors ${
                activeTab === 'gallery'
                  ? 'bg-white text-black border-white'
                  : 'bg-[#111111] text-[#A3A3A3] border-[#222222] hover:text-white hover:border-[#444444]'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Photo Gallery</span>
            </button>

            <button
              onClick={() => setActiveTab('bts')}
              role="tab"
              aria-selected={activeTab === 'bts'}
              className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold border transition-colors ${
                activeTab === 'bts'
                  ? 'bg-white text-black border-white'
                  : 'bg-[#111111] text-[#A3A3A3] border-[#222222] hover:text-white hover:border-[#444444]'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>Behind the Scenes</span>
            </button>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.map((item: MediaItem, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group bg-[#0A0A0A] border border-[#222222] hover:border-white transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* Media Thumbnail Container */}
              <div
                onClick={() => {
                  if (item.type === 'video' && item.videoUrl) {
                    setActiveVideo({ url: item.videoUrl, title: item.title });
                  } else {
                    setActiveGalleryImage(item.thumbnail);
                  }
                }}
                className="relative h-60 w-full overflow-hidden bg-[#111111] cursor-pointer"
              >
                {item.type === 'video' && item.videoPreviewUrl ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={item.thumbnail}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src={item.videoPreviewUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                )}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-[#050505] text-white px-2.5 py-1 text-[11px] font-mono border border-[#222222] uppercase">
                    {item.category}
                  </span>
                  {item.type === 'video' && (
                    <span className="bg-[#111111]/90 text-[#A3A3A3] px-2 py-0.5 text-[10px] font-mono border border-[#333333] uppercase">
                      Autoplay
                    </span>
                  )}
                </div>

                {/* Center Action Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {item.type === 'video' ? (
                    <div className="w-12 h-12 bg-white/90 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-black/80 text-white border border-[#333333] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-5 h-5" />
                    </div>
                  )}
                </div>

                {item.btsScope && (
                  <div className="absolute bottom-3 left-3 right-3 bg-black/90 p-2 text-[11px] font-mono text-[#A3A3A3] border border-[#222222]">
                    Scope: {item.btsScope}
                  </div>
                )}
              </div>

              {/* Text Meta */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#737373] mb-1.5">{item.year}</div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight line-clamp-2">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-2 text-xs text-[#A3A3A3] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-3 border-t border-[#1C1C1C] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#737373]">
                    {item.type === 'video' ? 'Interactive Video' : 'High-Res Photo'}
                  </span>
                  <button
                    onClick={() => {
                      if (item.type === 'video' && item.videoUrl) {
                        setActiveVideo({ url: item.videoUrl, title: item.title });
                      } else {
                        setActiveGalleryImage(item.thumbnail);
                      }
                    }}
                    className="text-white font-semibold hover:underline"
                  >
                    {item.type === 'video' ? 'Play Video →' : 'View Image →'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        videoUrl={activeVideo ? activeVideo.url : null}
        title={activeVideo ? activeVideo.title : ''}
        onClose={() => setActiveVideo(null)}
      />

      {/* Lightbox for Gallery Photo */}
      {activeGalleryImage && (
        <div
          onClick={() => setActiveGalleryImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-5xl max-h-[90vh] bg-[#0A0A0A] border border-[#333333] p-2">
            <img
              src={activeGalleryImage}
              alt="Inspected production photograph"
              className="max-h-[85vh] w-auto object-contain"
            />
            <p className="text-center text-xs text-[#737373] mt-2 font-mono">
              Click anywhere to close image preview
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
