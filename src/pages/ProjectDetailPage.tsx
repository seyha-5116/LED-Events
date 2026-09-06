import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Maximize2, 
  Users, 
  Clock, 
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { PROJECTS, MEDIA_ITEMS } from '../data/ledEventsData';

interface ProjectDetailPageProps {
  onOpenVideo: (url: string, title: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ onOpenVideo }) => {
  const { slug } = useParams<{ slug: string }>();
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Related projects (excluding current one)
  const relatedProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  // Gallery items (using project.gallery or fallback to project.image)
  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image];

  // Video lookup
  const videoItem = MEDIA_ITEMS.find(
    (m) => m.type === 'video' && m.title.toLowerCase().includes(project.title.toLowerCase().split(' ')[0])
  );

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen">
      <SeoHead
        title={`${project.title} | Production Case Study | LED Events Cambodia`}
        description={`${project.title} (${project.year}) - ${project.location}. Scope: ${project.scope}.`}
      />

      {/* Page Hero */}
      <PageHero
        badge={`CASE STUDY // ${project.category.toUpperCase()}`}
        title={project.title}
        subtitle={`${project.location} • ${project.year}`}
        breadcrumbs={[
          { label: 'Projects', to: '/projects' },
          { label: project.title }
        ]}
        extraContent={
          <div className="flex flex-wrap gap-4 pt-2">
            {videoItem && videoItem.videoUrl && (
              <button
                onClick={() => onOpenVideo(videoItem.videoUrl!, project.title)}
                className="bg-white text-black hover:bg-[#E5E5E5] px-6 py-3 text-xs font-black uppercase tracking-widest flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-black" />
                <span>Watch Production Recap</span>
              </button>
            )}
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#171717] hover:bg-[#222222] border border-[#2A2A2A] hover:border-white text-xs font-bold uppercase tracking-wider text-white transition-colors"
            >
              Request Similar Production
            </Link>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {/* Main Cover Showcase Banner */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black border border-[#222222] group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 bg-[#0A0A0A]/90 border border-[#262626] text-xs font-mono text-white">
              {project.category}
            </span>
            <span className="px-3 py-1 bg-[#0A0A0A]/90 border border-[#262626] text-xs font-mono text-[#888888]">
              {project.year}
            </span>
          </div>
          {videoItem && videoItem.videoUrl && (
            <button
              onClick={() => onOpenVideo(videoItem.videoUrl!, project.title)}
              className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white/90 text-black hover:scale-110 transition-transform flex items-center justify-center shadow-2xl cursor-pointer"
              aria-label="Play Video"
            >
              <Play className="w-8 h-8 fill-black ml-1" />
            </button>
          )}
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 bg-[#0D0D0D] border border-[#222222]">
            <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block">
              Venue Location
            </span>
            <p className="text-sm font-bold text-white mt-1">{project.location}</p>
          </div>
          <div className="p-5 bg-[#0D0D0D] border border-[#222222]">
            <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block">
              Stage Dimension
            </span>
            <p className="text-sm font-bold text-white mt-1">{project.stageSize || 'Custom Engineered'}</p>
          </div>
          <div className="p-5 bg-[#0D0D0D] border border-[#222222]">
            <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block">
              Production Year
            </span>
            <p className="text-sm font-bold text-white mt-1">{project.year}</p>
          </div>
          <div className="p-5 bg-[#0D0D0D] border border-[#222222]">
            <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block">
              Technical Scope
            </span>
            <p className="text-sm font-bold text-emerald-400 mt-1 truncate">{project.scope}</p>
          </div>
        </div>

        {/* Detailed Production Story & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                CASE STUDY OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-1">
                The Technical Production Story
              </h2>
            </div>

            <div className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed space-y-4">
              <p>{project.description}</p>
              <p className="text-xs text-[#888888]">
                Every component—from ground anchor rigging through timecode audio-visual synchronization—was managed directly by LED Events’ 30+ certified technicians with zero reliance on outsourced sub-vendors.
              </p>
            </div>

            {/* Scope Badges */}
            <div className="pt-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-3">
                Contracted Technical Scope
              </span>
              <div className="p-4 bg-[#141414] border border-[#262626] text-xs font-mono text-white">
                {project.scope}
              </div>
            </div>
          </div>

          {/* Key Production Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block">
              KEY ACHIEVEMENTS
            </span>
            <div className="space-y-3">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#0D0D0D] border border-[#222222] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-[#E5E5E5] font-medium leading-snug">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Specs Table */}
        {project.technicalSpecs && project.technicalSpecs.length > 0 && (
          <section className="pt-8 border-t border-[#1C1C1C]">
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                SPECIFICATION MATRIX
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight mt-1">
                Engineering Breakdown & Equipment Rider
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.technicalSpecs.map((spec, i) => (
                <div key={i} className="p-4 bg-[#0D0D0D] border border-[#222222]">
                  <span className="text-[10px] font-mono text-[#737373] uppercase block">{spec.label}</span>
                  <p className="text-sm font-bold text-white mt-1">{spec.value}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* High-Resolution Photo Gallery */}
        <section className="pt-8 border-t border-[#1C1C1C]">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
              PHOTO GALLERY
            </span>
            <h3 className="text-2xl font-black uppercase text-white tracking-tight mt-1">
              On-Site Production Photography
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => setActiveGalleryIndex(idx)}
                className="relative aspect-[16/10] overflow-hidden bg-black border border-[#222222] hover:border-white transition-colors cursor-pointer group"
              >
                <img
                  src={imgUrl}
                  alt={`${project.title} - photo ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Projects */}
        <section className="pt-8 border-t border-[#1C1C1C]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                EXPLORE FURTHER
              </span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight mt-1">
                Other Featured Productions
              </h3>
            </div>
            <Link
              to="/projects"
              className="text-xs font-mono text-white hover:underline flex items-center gap-1"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((rel) => (
              <div
                key={rel.id}
                className="bg-[#0D0D0D] border border-[#222222] hover:border-white transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black border-b border-[#1C1C1C]">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-[#0A0A0A]/90 text-[10px] font-mono text-white">
                      {rel.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="text-[10px] font-mono text-[#737373] block mb-1">
                      {rel.location}
                    </span>
                    <h4 className="text-base font-bold uppercase text-white group-hover:translate-x-0.5 transition-transform">
                      {rel.title}
                    </h4>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/projects/${rel.slug}`}
                    className="w-full py-2.5 bg-[#171717] hover:bg-white text-[#CCCCCC] hover:text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-[#2A2A2A]"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="p-10 bg-[#0A0A0A] border border-[#222222] text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            Planning a show similar to {project.title}?
          </h3>
          <p className="text-xs sm:text-sm text-[#888888] max-w-xl mx-auto">
            Our technical directors are ready to review your venue specs, CAD drawings, and timeline.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-black hover:bg-[#E5E5E5] px-8 py-4 text-xs font-black uppercase tracking-widest"
            >
              Start Your Technical Brief
            </Link>
          </div>
        </section>
      </div>

      {/* Lightbox Modal for Gallery Images */}
      {activeGalleryIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setActiveGalleryIndex(null)}
        >
          <button
            onClick={() => setActiveGalleryIndex(null)}
            className="absolute top-6 right-6 p-3 text-white bg-[#1A1A1A] hover:bg-white hover:text-black transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {galleryImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveGalleryIndex((prev) => (prev! > 0 ? prev! - 1 : galleryImages.length - 1));
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white bg-[#1A1A1A] hover:bg-white hover:text-black transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveGalleryIndex((prev) => (prev! < galleryImages.length - 1 ? prev! + 1 : 0));
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white bg-[#1A1A1A] hover:bg-white hover:text-black transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div 
            className="max-w-5xl max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[activeGalleryIndex]}
              alt={`${project.title} full view`}
              className="w-full h-full object-contain max-h-[85vh]"
            />
            <div className="text-center py-2 text-xs font-mono text-[#888888]">
              Image {activeGalleryIndex + 1} of {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
