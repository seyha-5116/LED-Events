import React from 'react';
import { motion } from 'motion/react';
import { X, Clock, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogDetailModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onSelectPost: (p: BlogPost) => void;
  allPosts: BlogPost[];
  onOpenInquiry: () => void;
}

export const BlogDetailModal: React.FC<BlogDetailModalProps> = ({
  post,
  onClose,
  onSelectPost,
  allPosts,
  onOpenInquiry,
}) => {
  if (!post) return null;

  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || allPosts.indexOf(p) < 3))
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

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-[#0A0A0A] border border-[#2E2E2E] text-white flex flex-col overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#222222] bg-[#111111] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-1 bg-white text-black font-bold uppercase">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-xs font-mono text-[#737373]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A3A3A3] hover:text-white bg-[#171717] border border-[#262626] hover:bg-[#222222] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Featured Image */}
          <div className="h-64 sm:h-80 w-full overflow-hidden border border-[#222222] bg-[#050505]">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Takeaways Callout */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="p-6 bg-[#111111] border border-[#2E2E2E] space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#A3A3A3] font-bold">
                Key Production Takeaways
              </h3>
              <div className="space-y-2">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#D4D4D4]">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content Paragraphs */}
          <div className="space-y-5 text-base text-[#D4D4D4] leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Author/Company Verification Footnote */}
          <div className="p-4 bg-[#141414] border border-[#222222] flex items-center justify-between text-xs font-mono text-[#737373]">
            <span>Published by LED Events Engineering Team</span>
            <span>Phnom Penh, Cambodia</span>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="pt-8 border-t border-[#1C1C1C]">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#737373] mb-4">
                Related Technical Guides
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedPosts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectPost(rel)}
                    className="group cursor-pointer bg-[#111111] p-4 border border-[#222222] hover:border-white transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-[#737373] uppercase">{rel.category}</span>
                      <h4 className="text-xs font-bold text-white uppercase line-clamp-2 mt-1">
                        {rel.title}
                      </h4>
                    </div>
                    <span className="text-[10px] text-white mt-3 flex items-center gap-1 group-hover:underline">
                      Read Guide →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 sm:p-6 border-t border-[#222222] bg-[#111111] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#A3A3A3]">
            Need technical advice for an upcoming Cambodian concert or festival?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#A3A3A3] hover:text-white border border-[#262626] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto bg-white text-black px-6 py-2.5 text-xs font-black uppercase tracking-wider hover:bg-[#E5E5E5] transition-colors flex items-center justify-center gap-2"
            >
              <span>Consult Our Engineers</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
