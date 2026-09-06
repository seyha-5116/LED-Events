import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, ArrowRight, BookOpen, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { BLOG_POSTS } from '../data/ledEventsData';

export const BlogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All';
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { label: 'All', value: 'All' },
    { label: 'Event Guides', value: 'Event Guides', path: '/blog/event-guides' },
    { label: 'LED Knowledge', value: 'LED Knowledge', path: '/blog/led-knowledge' },
    { label: 'Production Tips', value: 'Production Tips', path: '/blog/production-tips' },
  ];

  const handleCategoryChange = (val: string) => {
    if (val === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: val });
    }
  };

  const filteredArticles = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCat = activeCategory === 'All' || post.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesQuery = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  // Featured article (first one)
  const featuredArticle = BLOG_POSTS[0];

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen">
      <SeoHead
        title="Event Production Guides & LED Knowledge | LED Events Cambodia"
        description="Technical guides, screen resolution formulas, stage rigging safety standards, and venue logistics for corporate organizers and concert promoters in Cambodia."
      />

      {/* Page Hero */}
      <PageHero
        badge="KNOWLEDGE HUB"
        title="Technical Guides &"
        titleAccent="Event Insights"
        subtitle="Practical engineering insights, screen size calculation formulas, and stage safety best practices for event organizers across Cambodia."
        breadcrumbs={[{ label: 'Blog' }]}
        extraContent={
          <div className="flex flex-wrap gap-4 text-xs font-mono text-[#A3A3A3] pt-2">
            <span>{BLOG_POSTS.length} In-Depth Technical Articles</span>
            <span>•</span>
            <span>Written by Senior Production Supervisors</span>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Featured Article Banner */}
        {activeCategory === 'All' && !searchQuery && featuredArticle && (
          <div className="bg-[#0D0D0D] border border-[#222222] overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="relative aspect-[16/10] overflow-hidden bg-black border-b lg:border-b-0 lg:border-r border-[#1C1C1C]">
                  <img
                    src={featuredArticle.featuredImage}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#0A0A0A]/90 border border-[#262626] text-xs font-mono text-emerald-400">
                    FEATURED GUIDE
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 lg:p-8 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono text-[#737373]">
                  <span>{featuredArticle.category}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight group-hover:translate-x-0.5 transition-transform leading-snug">
                  {featuredArticle.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-4">
                  <Link
                    to={`/blog/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-[#E5E5E5] text-xs font-black uppercase tracking-widest transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#1C1C1C]">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              const count = cat.value === 'All' 
                ? BLOG_POSTS.length 
                : BLOG_POSTS.filter((p) => p.category === cat.value).length;

              return (
                <button
                  key={cat.value}
                  onClick={() => handleCategoryChange(cat.value)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-white text-black font-bold'
                      : 'bg-[#121212] text-[#A3A3A3] hover:text-white border border-[#262626]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] ${isActive ? 'text-[#666666]' : 'text-[#737373]'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search guides by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#121212] border border-[#262626] text-xs text-white placeholder-[#737373] focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-[#0D0D0D] border border-[#222222] hover:border-white transition-colors group flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black border-b border-[#1C1C1C]">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#0A0A0A]/90 border border-[#262626] text-[10px] font-mono text-white">
                    {article.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[10px] font-mono text-[#737373] mb-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold uppercase text-white tracking-tight group-hover:translate-x-0.5 transition-transform line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#888888] mt-3 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/blog/${article.slug}`}
                  className="w-full py-2.5 bg-[#171717] hover:bg-white text-white hover:text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#2A2A2A] transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
