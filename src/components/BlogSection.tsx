import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS } from '../data/ledEventsData';
import { BlogPost, BlogCategory } from '../types';
import { BlogDetailModal } from './BlogDetailModal';

interface BlogSectionProps {
  onOpenInquiry: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories: BlogCategory[] = ['All', 'Event Guides', 'LED Knowledge', 'Production Tips'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="bg-[#0A0A0A] py-28 border-b border-[#1A1A1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-[#1C1C1C] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#737373] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 bg-white" />
              <span>Technical Publications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              Production Knowledge
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search guides & insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111111] border border-[#262626] focus:border-white px-4 py-2.5 pl-9 text-xs text-white placeholder-[#737373] focus:outline-none transition-colors"
            />
            <Search className="w-3.5 h-3.5 text-[#737373] absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold border transition-colors ${
                selectedCategory === cat
                  ? 'bg-white text-black border-white'
                  : 'bg-[#111111] text-[#A3A3A3] border-[#222222] hover:text-white hover:border-[#444444]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setActivePost(post)}
              className="group cursor-pointer bg-[#0F0F0F] border border-[#222222] hover:border-white transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden bg-[#111111]">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />

                <div className="absolute top-4 left-4">
                  <span className="bg-[#050505] text-white px-2.5 py-1 text-[11px] font-mono border border-[#222222] uppercase">
                    {post.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-[#050505]/80 p-2 text-white border border-[#222222] group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Text */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#737373] mb-2">
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

                  <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-white transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-xs text-[#A3A3A3] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C1C1C] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#737373]">
                    {post.content.length} Sections
                  </span>
                  <span className="text-white font-semibold flex items-center gap-1 group-hover:underline">
                    Read Full Guide →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 border border-[#222222] bg-[#111111]">
            <p className="text-sm text-[#A3A3A3]">No articles found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 text-xs font-mono text-white underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Blog Reading Modal */}
      <AnimatePresence>
        {activePost && (
          <BlogDetailModal
            post={activePost}
            onClose={() => setActivePost(null)}
            onSelectPost={(p) => setActivePost(p)}
            allPosts={BLOG_POSTS}
            onOpenInquiry={onOpenInquiry}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
