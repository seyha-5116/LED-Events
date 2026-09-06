import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  Share2, 
  HelpCircle,
  Tag
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { BLOG_POSTS, COMPANY_INFO } from '../data/ledEventsData';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = BLOG_POSTS.find((p) => p.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Related articles in same or other categories
  const relatedArticles = BLOG_POSTS.filter((p) => p.slug !== article.slug).slice(0, 3);

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen">
      <SeoHead
        title={`${article.title} | LED Events Cambodia`}
        description={article.excerpt}
      />

      {/* Page Hero */}
      <PageHero
        badge={`GUIDE // ${article.category.toUpperCase()}`}
        title={article.title}
        subtitle={`${article.date} • ${article.readTime} • Written by LED Events Technical Directorate`}
        breadcrumbs={[
          { label: 'Blog', to: '/blog' },
          { label: article.category, to: `/blog?category=${encodeURIComponent(article.category)}` },
          { label: article.title }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#A3A3A3] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black border border-[#222222]">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 px-3 py-1 bg-[#0A0A0A]/90 border border-[#262626] text-xs font-mono text-white">
            {article.category}
          </div>
        </div>

        {/* Article Content */}
        <article className="space-y-6 text-base text-[#CCCCCC] leading-relaxed">
          {article.content.map((paragraph, index) => (
            <p key={index} className="text-base sm:text-lg leading-relaxed text-[#D4D4D4]">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Key Takeaways Box */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="p-6 sm:p-8 bg-[#0D0D0D] border border-[#262626] space-y-4">
            <div className="flex items-center gap-2 text-white font-mono text-xs uppercase tracking-wider font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Key Technical Takeaways</span>
            </div>
            <ul className="space-y-3 text-sm text-[#CCCCCC]">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Author Bio Box */}
        <div className="p-6 bg-[#0D0D0D] border border-[#222222] flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <img
            src="/logo.png"
            alt="LED Events"
            className="w-12 h-12 object-contain bg-black p-1 border border-[#262626]"
          />
          <div>
            <h4 className="text-sm font-bold uppercase text-white">
              LED Events Technical Editorial Team
            </h4>
            <p className="text-xs text-[#888888] mt-1">
              Phnom Penh’s premier turnkey event production contractor since 2012. Specializing in modular staging, line-array acoustics, and NovaStar LED systems.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="pt-12 border-t border-[#1C1C1C]">
          <h3 className="text-xl font-bold uppercase text-white mb-6">
            Recommended Reading
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                to={`/blog/${rel.slug}`}
                className="group block p-4 bg-[#0D0D0D] border border-[#222222] hover:border-white transition-colors"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black mb-3">
                  <img
                    src={rel.featuredImage}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[10px] font-mono text-[#737373] block">{rel.category}</span>
                <h4 className="text-xs font-bold text-white uppercase mt-1 line-clamp-2 group-hover:translate-x-0.5 transition-transform">
                  {rel.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 bg-[#0A0A0A] border border-[#222222] text-center space-y-4">
          <h3 className="text-xl font-bold uppercase text-white">
            Have Questions About Your Upcoming Event?
          </h3>
          <p className="text-xs text-[#888888] max-w-md mx-auto">
            Contact our senior production managers directly to discuss screen sizes, acoustic coverage, or stage design.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-[#E5E5E5] text-xs font-black uppercase tracking-widest transition-colors"
            >
              <span>Speak with Our Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
