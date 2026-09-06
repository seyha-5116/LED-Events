import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { BLOG_POSTS } from '../data/ledEventsData';

const CATEGORY_MAP: Record<string, { title: string; categoryName: string; description: string }> = {
  'event-guides': {
    title: 'Event Guides',
    categoryName: 'Event Guides',
    description: 'Practical venue checklists, seasonal weather planning, and timeline blueprints for corporate organizers in Cambodia.',
  },
  'led-knowledge': {
    title: 'LED Knowledge',
    categoryName: 'LED Knowledge',
    description: 'Technical breakdowns of pixel pitch, indoor vs outdoor IP ratings, video scalers, and screen dimension calculation formulas.',
  },
  'production-tips': {
    title: 'Production Tips',
    categoryName: 'Production Tips',
    description: 'Rigging safety principles, audio phase alignment, power distribution, and lighting cue design.',
  },
};

export const BlogCategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const categoryMeta = categorySlug ? CATEGORY_MAP[categorySlug] : null;

  if (!categoryMeta) {
    return <Navigate to="/blog" replace />;
  }

  const articles = BLOG_POSTS.filter(
    (p) => p.category.toLowerCase() === categoryMeta.categoryName.toLowerCase()
  );

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen">
      <SeoHead
        title={`${categoryMeta.title} | Event Production Articles | LED Events`}
        description={categoryMeta.description}
      />

      {/* Page Hero */}
      <PageHero
        badge={`CATEGORY // ${categoryMeta.title.toUpperCase()}`}
        title={categoryMeta.title}
        subtitle={categoryMeta.description}
        breadcrumbs={[
          { label: 'Blog', to: '/blog' },
          { label: categoryMeta.title }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="flex items-center justify-between pb-6 border-b border-[#1C1C1C]">
          <span className="text-xs font-mono text-[#737373] uppercase">
            Showing {articles.length} Articles in {categoryMeta.title}
          </span>
          <Link
            to="/blog"
            className="text-xs font-mono text-[#A3A3A3] hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Articles</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
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
