import React from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface VideoModalProps {
  videoUrl: string | null;
  title: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, title, onClose }) => {
  if (!videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative z-10 w-full max-w-5xl bg-[#0A0A0A] border border-[#2E2E2E] shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#111111] border-b border-[#222222] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest px-2 py-0.5 bg-white text-black font-bold">
              Video Player
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight line-clamp-1">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A3A3A3] hover:text-white bg-[#171717] border border-[#262626] hover:bg-[#222222] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={`${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1&playsinline=1&rel=0`}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#111111] border-t border-[#222222] flex items-center justify-between text-xs text-[#737373]">
          <span>LED Events Cambodia • Verified Production Archive</span>
          <button
            onClick={onClose}
            className="text-white hover:underline font-semibold"
          >
            Close Player
          </button>
        </div>
      </motion.div>
    </div>
  );
};
