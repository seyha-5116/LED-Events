import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Search, 
  MapPin, 
  Calendar, 
  Layers, 
  Maximize2 
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SeoHead } from '../components/SeoHead';
import { PROJECTS, MEDIA_ITEMS } from '../data/ledEventsData';
import { fadeUpVariants } from '../utils/animations';

interface ProjectsPageProps {
  onOpenVideo: (url: string, title: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenVideo }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All';
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Concert', 'Corporate', 'Festival', 'Outdoor'];

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category });
    }
  };

  // Filter projects by category and search
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.scope.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen">
      <SeoHead
        title="Event Production Portfolio | Concerts & Festivals | LED Events Cambodia"
        description="Browse landmark productions by LED Events: Greet Music Festival 40m Stage, Boostrong Kun Khmer Arena, Nico Solo Concert, and Vattanac Live-Show in Cambodia."
      />

      {/* Hero Header */}
      <PageHero
        badge="PRODUCTION REPERTOIRE"
        title="Featured Event"
        titleAccent="Productions & Portfolios"
        subtitle="Explore stadium music festivals, televised sports combat, and luxury corporate galas engineered across Phnom Penh and Cambodian provinces."
        breadcrumbs={[{ label: 'Projects' }]}
        extraContent={
          <div className="flex flex-wrap gap-4 text-xs font-mono text-[#A3A3A3] pt-2">
            <span>{PROJECTS.length} Verified Production Case Studies</span>
            <span>•</span>
            <span>Concerts, Festivals & Corporate Summits</span>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#1C1C1C]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2" role="tablist">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              const count = category === 'All' 
                ? PROJECTS.length 
                : PROJECTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()).length;

              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-white text-black font-bold'
                      : 'bg-[#121212] text-[#A3A3A3] hover:text-white border border-[#262626]'
                  }`}
                  role="tab"
                  aria-selected={isActive}
                >
                  <span>{category}</span>
                  <span className={`text-[10px] ${isActive ? 'text-[#666666]' : 'text-[#737373]'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search venue, artist, scope..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#121212] border border-[#262626] text-xs text-white placeholder-[#737373] focus:outline-none focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="pt-12">
          {filteredProjects.length === 0 ? (
            <div className="py-24 text-center border border-dashed border-[#222222] p-8">
              <p className="text-sm font-mono text-[#737373] uppercase">
                No productions matched your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  handleCategoryChange('All');
                }}
                className="mt-4 px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => {
                const videoItem = MEDIA_ITEMS.find(
                  (m) => m.type === 'video' && m.title.toLowerCase().includes(project.title.toLowerCase().split(' ')[0])
                );

                return (
                  <motion.div
                    key={project.id}
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    className="bg-[#0D0D0D] border border-[#222222] hover:border-white transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                  >
                    <div>
                      {/* Project Image Banner */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-black border-b border-[#1C1C1C]">
                        {videoItem?.videoPreviewUrl ? (
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={project.image}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          >
                            <source src={videoItem.videoPreviewUrl} type="video/mp4" />
                          </video>
                        ) : (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        )}
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span className="px-2.5 py-1 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#2A2A2A] text-white text-[10px] font-mono uppercase tracking-wider font-semibold">
                            {project.category}
                          </span>
                          <span className="px-2 py-1 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#2A2A2A] text-[#888888] text-[10px] font-mono">
                            {project.year}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 text-[11px] font-mono text-[#737373] mb-2">
                          <MapPin className="w-3.5 h-3.5 text-[#555555]" />
                          <span className="truncate">{project.location}</span>
                        </div>

                        <h3 className="text-lg font-black uppercase text-white tracking-tight group-hover:translate-x-0.5 transition-transform">
                          {project.title}
                        </h3>

                        <p className="text-xs text-[#888888] mt-3 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="mt-4 pt-4 border-t border-[#1C1C1C]">
                          <span className="text-[10px] font-mono text-emerald-400 block truncate">
                            {project.scope}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="w-full py-3 bg-[#171717] hover:bg-white text-white hover:text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#262626] transition-colors"
                      >
                        <span>View Production Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Production Standards Banner */}
      <section className="py-20 bg-[#0A0A0A] border-t border-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373]">
            HAVE A VISION FOR YOUR EVENT?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
            Let’s Engineer Your Next Landmark Production
          </h2>
          <p className="text-xs sm:text-sm text-[#888888] leading-relaxed max-w-2xl mx-auto">
            From intimate corporate launches at Phnom Penh five-star hotels to 40m stadium festival stages across Cambodian provinces, our team handles all technical planning and execution.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-black hover:bg-[#E5E5E5] px-8 py-4 text-xs font-black uppercase tracking-widest"
            >
              Request Technical Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
