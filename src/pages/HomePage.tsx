import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Clock, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { StatsIntro } from '../components/StatsIntro';
import { HowWeWorkSection } from '../components/HowWeWorkSection';
import { SmartInquirySection } from '../components/SmartInquirySection';
import { SeoHead } from '../components/SeoHead';
import { SERVICES, PROJECTS, WHY_US_STRENGTHS, MEDIA_ITEMS, BLOG_POSTS, COMPANY_INFO } from '../data/ledEventsData';
import { fadeUpVariants, staggerContainerVariants } from '../utils/animations';

interface HomePageProps {
  onOpenVideo: (url: string, title: string) => void;
  onInquirySubmitted?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenVideo, onInquirySubmitted }) => {
  const navigate = useNavigate();

  // Featured 4 projects for homepage preview
  const featuredProjects = PROJECTS.slice(0, 4);

  // Featured video for media preview
  const featuredVideo = MEDIA_ITEMS.find((m) => m.type === 'video') || MEDIA_ITEMS[0];

  // Latest 3 blog articles
  const latestArticles = BLOG_POSTS.slice(0, 3);

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen">
      <SeoHead
        title="Event Production in Cambodia | Concert, Stage & LED Screen Rental"
        description="The Most Reliable Event Production System in Cambodia since 2012. Modular staging, high-definition LED screens, concert sound systems, and lighting design."
      />

      {/* 1. HERO SECTION */}
      <Hero
        onExploreWork={() => navigate('/projects')}
        onStartProject={() => navigate('/contact')}
      />

      {/* 2. COMPANY INTRODUCTION & KEY EXPERIENCE / STATISTICS */}
      <StatsIntro onLearnMore={() => navigate('/why-us')} />

      {/* 3. SERVICES PREVIEW SECTION */}
      <section className="py-24 bg-[#080808] border-b border-[#1A1A1A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1C1C1C] gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121212] border border-[#262626] text-[11px] font-mono tracking-widest uppercase text-[#A3A3A3] mb-4">
                <span>SYSTEMS // CORE CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
                Turnkey Technical Disciplines
              </h2>
              <p className="text-sm sm:text-base text-[#A3A3A3] mt-3 max-w-2xl">
                Five synchronized event production engineering pillars backed by redundant processing and dedicated live operators.
              </p>
            </div>
            <Link
              to="/services"
              id="home-view-all-services-link"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#D4D4D4] px-4 py-2.5 bg-[#171717] border border-[#2A2A2A] hover:border-white transition-colors"
            >
              <span>View All Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className={`bg-[#0D0D0D] border border-[#222222] hover:border-white transition-all duration-300 flex flex-col justify-between group ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Card Media Banner */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-black border-b border-[#1C1C1C]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0A0A0A]/90 px-2.5 py-1 text-[10px] font-mono text-white border border-[#262626]">
                      {service.number}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:translate-x-1 transition-transform">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#888888] mt-2 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#1C1C1C] flex flex-wrap gap-1.5">
                      {service.equipmentHighlights.slice(0, 2).map((spec, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-[#141414] text-[#888888] text-[10px] font-mono border border-[#222222]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/services/${service.slug}`}
                    className="w-full py-2.5 bg-[#141414] hover:bg-white text-[#A3A3A3] hover:text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#262626] transition-colors"
                  >
                    <span>System Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS PREVIEW */}
      <section className="py-24 bg-[#050505] border-b border-[#1A1A1A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1C1C1C] gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-[#262626] text-[11px] font-mono tracking-widest uppercase text-[#A3A3A3] mb-4">
                <span>PORTFOLIO // VERIFIED SHOWS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
                Landmark Productions
              </h2>
              <p className="text-sm sm:text-base text-[#A3A3A3] mt-3 max-w-2xl">
                Executed stadium stages, televised combat arenas, and luxury corporate gatherings across Cambodia.
              </p>
            </div>
            <Link
              to="/projects"
              id="home-view-all-projects-link"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#D4D4D4] px-4 py-2.5 bg-[#171717] border border-[#2A2A2A] hover:border-white transition-colors"
            >
              <span>View All Projects ({PROJECTS.length})</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="group bg-[#0D0D0D] border border-[#222222] hover:border-white transition-colors overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-black border-b border-[#1C1C1C]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#2A2A2A] text-white text-[11px] font-mono uppercase tracking-wider font-semibold">
                        {project.category}
                      </span>
                      <span className="px-2 py-1 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#2A2A2A] text-[#888888] text-[11px] font-mono">
                        {project.year}
                      </span>
                    </div>

                    {(() => {
                      const videoItem = MEDIA_ITEMS.find(
                        (m) => m.type === 'video' && m.title.toLowerCase().includes(project.title.toLowerCase().split(' ')[0])
                      );
                      if (!videoItem?.videoUrl) return null;
                      return (
                        <button
                          onClick={() => onOpenVideo(videoItem.videoUrl!, project.title)}
                          className="absolute bottom-4 right-4 p-3 bg-white text-black hover:bg-[#E5E5E5] transition-transform hover:scale-110 shadow-lg cursor-pointer"
                          title="Watch Production Video"
                        >
                          <Play className="w-4 h-4 fill-black" />
                        </button>
                      );
                    })()}
                  </div>

                  <div className="p-6">
                    <span className="text-[11px] font-mono text-[#737373] uppercase tracking-wider block mb-1">
                      {project.location} • {project.stageSize || 'Concert Arena'}
                    </span>
                    <h3 className="text-xl font-black uppercase text-white tracking-tight group-hover:translate-x-1 transition-transform">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#888888] mt-3 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      <span className="px-2 py-1 bg-[#141414] text-emerald-400 text-[10px] font-mono border border-[#222222]">
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
                    <span>Read Production Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY US PREVIEW */}
      <section className="py-24 bg-[#080808] border-b border-[#1A1A1A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121212] border border-[#262626] text-[11px] font-mono tracking-widest uppercase text-[#A3A3A3]">
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                <span>UNYIELDING DISCIPLINE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                Why Top Promoters Choose LED Events
              </h2>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                In live event production, there is no second take. A flickering video wall, distorted audio, or sagging truss can destroy a brand’s reputation in seconds.
              </p>
              <p className="text-sm text-[#737373] leading-relaxed">
                We operate on an engineering-first protocol: dual-redundant signal pathways, structural load simulations, calibrated power distribution, and a full-time staff of 30+ certified technicians.
              </p>

              <div className="pt-4">
                <Link
                  to="/why-us"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black hover:bg-[#E5E5E5] text-xs font-black uppercase tracking-widest transition-colors"
                >
                  <span>Discover Our Strengths</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {WHY_US_STRENGTHS.slice(0, 3).map((strength) => (
                <div
                  key={strength.number}
                  className="p-6 bg-[#0D0D0D] border border-[#222222] hover:border-[#444444] transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#171717] border border-[#262626] flex items-center justify-center shrink-0">
                      <span className="text-white font-mono font-bold text-sm">{strength.number}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold uppercase text-white tracking-tight">
                        {strength.title}
                      </h3>
                      <p className="text-xs text-[#888888] mt-1.5 leading-relaxed">
                        {strength.description}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{strength.subtitle}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK (6-STAGE LIFECYCLE) */}
      <HowWeWorkSection onConsult={() => navigate('/contact')} />

      {/* 7. MEDIA PREVIEW */}
      <section className="py-24 bg-[#080808] border-b border-[#1A1A1A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1C1C1C] gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121212] border border-[#262626] text-[11px] font-mono tracking-widest uppercase text-[#A3A3A3] mb-4">
                <span>MEDIA // AUDIOVISUAL SHOWCASE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
                Live Concerts & Technical Execution
              </h2>
              <p className="text-sm sm:text-base text-[#A3A3A3] mt-3 max-w-2xl">
                Experience the raw energy of stadium audio, synchronized lighting drops, and backstage structural rigging.
              </p>
            </div>
            <Link
              to="/media"
              id="home-view-all-media-link"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#D4D4D4] px-4 py-2.5 bg-[#171717] border border-[#2A2A2A] hover:border-white transition-colors"
            >
              <span>View Media Hub</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Featured Video Player Card */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video w-full bg-black border border-[#262626] group overflow-hidden">
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => onOpenVideo(featuredVideo.videoUrl || '', featuredVideo.title)}
                    className="w-16 h-16 rounded-full bg-white text-black hover:scale-110 transition-transform flex items-center justify-center shadow-2xl cursor-pointer"
                    aria-label="Play Featured Video"
                  >
                    <Play className="w-6 h-6 fill-black ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0A0A0A]/90 backdrop-blur-sm border border-[#262626]">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block">
                    {featuredVideo.category} • {featuredVideo.year}
                  </span>
                  <h4 className="text-base font-bold text-white uppercase mt-1">
                    {featuredVideo.title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Quick Media Hub Links */}
            <div className="lg:col-span-5 space-y-4">
              <Link
                to="/media/videos"
                className="block p-5 bg-[#0D0D0D] border border-[#222222] hover:border-white transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block">
                      CINEMATIC BROADCASTS
                    </span>
                    <h4 className="text-base font-bold uppercase text-white group-hover:translate-x-1 transition-transform mt-0.5">
                      Event Videos & Arena Recaps
                    </h4>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#737373] group-hover:text-white transition-colors" />
                </div>
              </Link>

              <Link
                to="/media/gallery"
                className="block p-5 bg-[#0D0D0D] border border-[#222222] hover:border-white transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block">
                      HIGH RESOLUTION PORTFOLIO
                    </span>
                    <h4 className="text-base font-bold uppercase text-white group-hover:translate-x-1 transition-transform mt-0.5">
                      Production Photo Gallery
                    </h4>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#737373] group-hover:text-white transition-colors" />
                </div>
              </Link>

              <Link
                to="/media/behind-the-scenes"
                className="block p-5 bg-[#0D0D0D] border border-[#222222] hover:border-white transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#737373] uppercase tracking-wider block">
                      BACKSTAGE DOCUMENTARY
                    </span>
                    <h4 className="text-base font-bold uppercase text-white group-hover:translate-x-1 transition-transform mt-0.5">
                      Behind The Scenes & Rigging
                    </h4>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#737373] group-hover:text-white transition-colors" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BLOG PREVIEW */}
      <section className="py-24 bg-[#050505] border-b border-[#1A1A1A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1C1C1C] gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-[#262626] text-[11px] font-mono tracking-widest uppercase text-[#A3A3A3] mb-4">
                <span>KNOWLEDGE BASE // TECHNICAL ARTICLES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
                Event Guides & LED Insights
              </h2>
              <p className="text-sm sm:text-base text-[#A3A3A3] mt-3 max-w-2xl">
                Practical engineering tips, screen resolution formulas, and rigging safety standards for event organizers in Cambodia.
              </p>
            </div>
            <Link
              to="/blog"
              id="home-view-all-blog-link"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#D4D4D4] px-4 py-2.5 bg-[#171717] border border-[#2A2A2A] hover:border-white transition-colors"
            >
              <span>Read All Articles ({BLOG_POSTS.length})</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <div
                key={article.id}
                className="bg-[#0D0D0D] border border-[#222222] hover:border-white transition-colors flex flex-col justify-between group"
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

                    <h3 className="text-base font-bold uppercase text-white tracking-tight group-hover:translate-x-1 transition-transform line-clamp-2">
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
                    className="w-full py-2.5 bg-[#141414] hover:bg-white text-[#A3A3A3] hover:text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#262626] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. STRONG CTA QUOTATION STEPPER */}
      <SmartInquirySection onSubmitted={onInquirySubmitted} />
    </div>
  );
};
