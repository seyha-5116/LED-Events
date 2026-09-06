import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Calendar, MapPin, Layers, Maximize2, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
  onOpenInquiryWithProject: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
  onOpenInquiryWithProject,
}) => {
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);

  if (!project) return null;

  const relatedProjects = allProjects
    .filter((p) => p.id !== project.id && (p.category === project.category || allProjects.indexOf(p) < 3))
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 24 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-[#0A0A0A] border border-[#2E2E2E] text-white flex flex-col overflow-hidden shadow-2xl"
      >
        {/* Top Bar */}
        <div className="p-5 sm:p-6 border-b border-[#222222] bg-[#111111] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono px-2.5 py-1 bg-[#1F1F1F] border border-[#333333] uppercase text-[#A3A3A3]">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#737373]">{project.year}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-[#A3A3A3] hover:text-white bg-[#171717] border border-[#262626] hover:bg-[#222222] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
          {/* Project Hero Visual */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden border border-[#222222] bg-[#050505]">
            <img
              src={activeGalleryImage || project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {activeGalleryImage && (
              <button
                onClick={() => setActiveGalleryImage(null)}
                className="absolute top-4 right-4 bg-black/80 px-3 py-1 text-xs text-white border border-[#333333] hover:bg-black"
              >
                Reset to Main Cover
              </button>
            )}
          </div>

          {/* Project Header Info */}
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              {project.title}
            </h2>

            {/* Quick Metadata Chips */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#111111] border border-[#222222]">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#737373] uppercase">
                  <Calendar className="w-3 h-3" />
                  <span>Year</span>
                </div>
                <div className="text-sm font-bold text-white">{project.year}</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#737373] uppercase">
                  <MapPin className="w-3 h-3" />
                  <span>Location</span>
                </div>
                <div className="text-sm font-bold text-white">{project.location}</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#737373] uppercase">
                  <Layers className="w-3 h-3" />
                  <span>Scope</span>
                </div>
                <div className="text-sm font-bold text-white line-clamp-1">{project.scope}</div>
              </div>

              {project.stageSize && (
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#737373] uppercase">
                    <Maximize2 className="w-3 h-3" />
                    <span>Stage Size</span>
                  </div>
                  <div className="text-sm font-bold text-white">{project.stageSize}</div>
                </div>
              )}
            </div>
          </div>

          {/* Project Story & Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-[#1C1C1C]">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                Project Narrative & Production Scope
              </h3>
              <p className="text-base text-[#D4D4D4] leading-relaxed">
                {project.description}
              </p>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                As with every tier-1 event produced by LED Events Cambodia, our engineers deployed synchronized power backups, dual data distribution loops, and on-site acoustic and lighting calibration to guarantee flawless live execution.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                Verified Production Highlights
              </h3>
              <ul className="space-y-3">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#A3A3A3]">
                    <span className="w-1.5 h-1.5 bg-white shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Production Photo Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="pt-6 border-t border-[#1C1C1C]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#737373]">
                  Production Gallery ({project.gallery.length} Images)
                </h3>
                <span className="text-xs text-[#737373]">Click to inspect photo in viewer</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveGalleryImage(img)}
                    className={`cursor-pointer h-28 overflow-hidden border transition-all ${
                      activeGalleryImage === img ? 'border-white ring-2 ring-white' : 'border-[#222222] hover:border-[#555555]'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} detail ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="pt-6 border-t border-[#1C1C1C]">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#737373] mb-4">
                Related Productions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProjects.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      setActiveGalleryImage(null);
                      onSelectProject(rel);
                    }}
                    className="group cursor-pointer bg-[#111111] p-3 border border-[#222222] hover:border-white transition-colors"
                  >
                    <div className="h-28 overflow-hidden mb-2">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-xs font-bold text-white uppercase line-clamp-1">
                      {rel.title}
                    </div>
                    <div className="text-[11px] text-[#737373] mt-1">{rel.location}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom CTA */}
        <div className="p-5 sm:p-6 border-t border-[#222222] bg-[#111111] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm font-medium text-white">
            Planning your next concert, festival, or corporate production?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#A3A3A3] hover:text-white border border-[#262626] transition-colors"
            >
              Back to Projects
            </button>
            <button
              onClick={() => {
                const title = project.title;
                onClose();
                onOpenInquiryWithProject(title);
              }}
              className="w-full sm:w-auto bg-white text-black px-6 py-2.5 text-xs font-black uppercase tracking-wider hover:bg-[#E5E5E5] transition-colors flex items-center justify-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
