import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Maximize2, X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { MEDIA_ITEMS, PROJECTS } from '../data/ledEventsData';

export const MediaGalleryPage: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('All');

  // Collect all gallery items from MEDIA_ITEMS and PROJECTS
  const allImages = [
    ...MEDIA_ITEMS.filter((m) => m.type === 'gallery').map((g) => ({
      url: g.thumbnail,
      title: g.title,
      category: g.category,
      description: g.description,
    })),
    ...PROJECTS.flatMap((p) => (p.gallery || [p.image]).map((img, i) => ({
      url: img,
      title: `${p.title} • Shot ${i + 1}`,
      category: p.category,
      description: `${p.location} (${p.year}) - ${p.stageSize || p.scope}`,
    }))),
  ];

  const categories = ['All', 'Concert', 'Festival', 'Corporate', 'Outdoor', 'Gallery'];

  const filteredImages = filter === 'All'
    ? allImages
    : allImages.filter((img) => img.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen">
      <SeoHead
        title="Production Photo Gallery | LED Events Cambodia"
        description="High-resolution event photography documenting stage constructions, curved LED screens, line-array audio hangs, and grand light shows across Cambodia."
      />

      {/* Page Hero */}
      <PageHero
        badge="PHOTOGRAPHIC REPERTOIRE"
        title="High-Resolution"
        titleAccent="Production Gallery"
        subtitle="Explore detailed imagery capturing stage builds, high-contrast LED backdrops, and live performance environments."
        breadcrumbs={[
          { label: 'Media', to: '/media' },
          { label: 'Gallery' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        {/* Navigation & Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1C1C1C]">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  filter === cat
                    ? 'bg-white text-black font-bold'
                    : 'bg-[#121212] text-[#A3A3A3] hover:text-white border border-[#262626]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <Link
            to="/media"
            className="text-xs font-mono text-[#A3A3A3] hover:text-white flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Media Hub</span>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className="relative aspect-[4/3] overflow-hidden bg-black border border-[#222222] hover:border-white transition-colors cursor-pointer group"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="px-2 py-0.5 bg-black/80 text-[9px] font-mono text-white border border-[#333333]">
                    {img.category}
                  </span>
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase line-clamp-1">{img.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setActiveImageIndex(null)}
        >
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 p-3 text-white bg-[#1A1A1A] hover:bg-white hover:text-black transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {filteredImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev! > 0 ? prev! - 1 : filteredImages.length - 1));
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white bg-[#1A1A1A] hover:bg-white hover:text-black transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev! < filteredImages.length - 1 ? prev! + 1 : 0));
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white bg-[#1A1A1A] hover:bg-white hover:text-black transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div 
            className="max-w-5xl max-h-[85vh] overflow-hidden text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[activeImageIndex].url}
              alt={filteredImages[activeImageIndex].title}
              className="w-full h-full object-contain max-h-[80vh] mx-auto"
            />
            <div className="pt-3 text-xs font-mono text-white">
              <span className="font-bold uppercase">{filteredImages[activeImageIndex].title}</span>
              <span className="text-[#737373] ml-3">
                ({activeImageIndex + 1} of {filteredImages.length})
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
