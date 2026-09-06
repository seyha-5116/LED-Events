import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowUpRight, 
  Phone, 
  Shield, 
  Layers, 
  Sparkles, 
  Video, 
  Image as ImageIcon, 
  BookOpen,
  Plus,
  Minus,
  MapPin
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, PROJECTS } from '../data/ledEventsData';
import { dropdownMenuVariants } from '../utils/animations';

interface NavbarProps {
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Active desktop dropdown: 'services' | 'projects' | 'media' | 'blog' | null
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Projects dropdown hover preview state
  const [hoveredProjectCategory, setHoveredProjectCategory] = useState<string>('All Projects');

  // Mobile accordion state: which sections are expanded in mobile menu
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    services: false,
    projects: false,
    media: false,
    blog: false,
  });

  const isHomePage = location.pathname === '/';

  // Scroll listener for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname, location.search]);

  // Handle ESC key to close dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Dropdown hover helpers with debounce
  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Toggle mobile accordion section
  const toggleMobileSection = (section: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Check active navigation link state
  const isServicesActive = location.pathname.startsWith('/services');
  const isProjectsActive = location.pathname.startsWith('/projects');
  const isWhyUsActive = location.pathname === '/why-us';
  const isMediaActive = location.pathname.startsWith('/media');
  const isBlogActive = location.pathname.startsWith('/blog');
  const isProductsActive = location.pathname === '/products';
  const isContactActive = location.pathname === '/contact';

  // Project categories with preview images
  const projectCategoryMap: Record<string, { image: string; title: string; count: number; href: string }> = {
    'All Projects': {
      image: PROJECTS[0].image,
      title: 'Complete 2025–2026 Portfolio',
      count: PROJECTS.length,
      href: '/projects',
    },
    'Concert Events': {
      image: PROJECTS.find((p) => p.category === 'Concert')?.image || PROJECTS[1].image,
      title: 'Stadium Tours & Solo Concerts',
      count: PROJECTS.filter((p) => p.category === 'Concert').length,
      href: '/projects?category=Concert',
    },
    'Corporate Events': {
      image: PROJECTS.find((p) => p.category === 'Corporate')?.image || PROJECTS[4].image,
      title: 'Summits, Galas & Product Launches',
      count: PROJECTS.filter((p) => p.category === 'Corporate').length,
      href: '/projects?category=Corporate',
    },
    'Festival Events': {
      image: PROJECTS.find((p) => p.category === 'Festival')?.image || PROJECTS[0].image,
      title: '40m Mega Stages & Open-Air Grounds',
      count: PROJECTS.filter((p) => p.category === 'Festival').length,
      href: '/projects?category=Festival',
    },
    'Outdoor Events': {
      image: PROJECTS.find((p) => p.category === 'Outdoor')?.image || PROJECTS[3].image,
      title: 'Kun Khmer Arenas & Weatherproof Sets',
      count: PROJECTS.filter((p) => p.category === 'Outdoor').length,
      href: '/projects?category=Outdoor',
    },
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHomePage && !isScrolled
            ? 'bg-[#050505]/60 backdrop-blur-md py-4 border-b border-white/10'
            : 'bg-[#0A0A0A]/95 backdrop-blur-md py-3 border-b border-[#222222] shadow-2xl shadow-black/80'
        }`}
      >
        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            id="nav-brand-logo"
            className="flex items-center gap-3 shrink-0 focus:outline-none focus:ring-1 focus:ring-white group"
          >
            <img
              src="/logo.png"
              alt="LED Events Cambodia"
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col whitespace-nowrap">
              <span className="text-white text-sm sm:text-base font-black tracking-wider uppercase leading-none">
                LED EVENTS
              </span>
              <span className="text-[10px] text-[#A3A3A3] tracking-widest uppercase font-mono mt-0.5">
                Cambodia • Est. 2012
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 shrink-0" aria-label="Main Navigation">
            {/* 1. HOME */}
            <Link
              to="/"
              id="nav-link-home"
              className={`relative py-2 text-[12px] 2xl:text-[13px] uppercase tracking-wider font-semibold whitespace-nowrap transition-colors duration-200 ${
                isHomePage
                  ? 'text-white font-bold'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              <span className="whitespace-nowrap">Home</span>
              {isHomePage && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white pointer-events-none" />
              )}
            </Link>

            {/* 2. SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/services"
                id="nav-link-services"
                className={`relative py-2 text-[12px] 2xl:text-[13px] uppercase tracking-wider font-semibold whitespace-nowrap transition-colors duration-200 flex items-center gap-1 ${
                  isServicesActive
                    ? 'text-white font-bold'
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                <span className="whitespace-nowrap">Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                {isServicesActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white pointer-events-none" />
                )}
              </Link>

              {/* Desktop Services Mega Dropdown */}
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownMenuVariants}
                    className="absolute top-full left-0 mt-2 w-[440px] bg-[#0D0D0D] border border-[#262626] shadow-2xl p-4 z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']"
                  >
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1E1E1E]">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373] font-bold">
                        Core Technical Systems
                      </span>
                      <Link
                        to="/services"
                        className="text-[11px] font-mono text-white hover:underline flex items-center gap-1"
                      >
                        <span>All Services</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="space-y-1">
                      {SERVICES.map((srv) => (
                        <Link
                          key={srv.id}
                          to={`/services/${srv.slug}`}
                          className="flex items-start gap-3 p-2.5 hover:bg-[#171717] transition-colors group"
                        >
                          <span className="font-mono text-xs text-[#737373] group-hover:text-white transition-colors pt-0.5">
                            {srv.number}
                          </span>
                          <div>
                            <div className="text-xs font-bold text-white uppercase tracking-wide group-hover:translate-x-0.5 transition-transform">
                              {srv.title}
                            </div>
                            <div className="text-[11px] text-[#888888] line-clamp-1 mt-0.5">
                              {srv.shortDesc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. PROJECTS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('projects')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/projects"
                id="nav-link-projects"
                className={`relative py-2 text-[12px] 2xl:text-[13px] uppercase tracking-wider font-semibold whitespace-nowrap transition-colors duration-200 flex items-center gap-1 ${
                  isProjectsActive
                    ? 'text-white font-bold'
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                <span className="whitespace-nowrap">Projects</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                {isProjectsActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white pointer-events-none" />
                )}
              </Link>

              {/* Desktop Projects Mega Dropdown with Hover Image Preview */}
              <AnimatePresence>
                {activeDropdown === 'projects' && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownMenuVariants}
                    className="absolute top-full left-0 mt-2 w-[520px] bg-[#0D0D0D] border border-[#262626] shadow-2xl p-4 z-50 flex gap-4 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']"
                  >
                    {/* Left: Category Links */}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1E1E1E]">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373] font-bold">
                          Project Portfolio
                        </span>
                        <Link
                          to="/projects"
                          className="text-[11px] font-mono text-white hover:underline flex items-center gap-1"
                        >
                          <span>Explore All</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {Object.keys(projectCategoryMap).map((catName) => {
                        const isHovered = hoveredProjectCategory === catName;
                        return (
                          <Link
                            key={catName}
                            to={projectCategoryMap[catName].href}
                            onMouseEnter={() => setHoveredProjectCategory(catName)}
                            className={`flex items-center justify-between px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-colors ${
                              isHovered ? 'bg-[#1C1C1C] text-white' : 'text-[#A3A3A3] hover:text-white'
                            }`}
                          >
                            <span>{catName}</span>
                            <span className="text-[10px] font-mono text-[#737373]">
                              {projectCategoryMap[catName].count}
                            </span>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Right: Dynamic Project Preview Image */}
                    <div className="w-48 bg-[#141414] border border-[#222222] p-2 flex flex-col justify-between">
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                        <img
                          src={projectCategoryMap[hoveredProjectCategory]?.image || PROJECTS[0].image}
                          alt="Project Preview"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="pt-2">
                        <span className="text-[9px] font-mono uppercase text-[#737373] block">
                          {hoveredProjectCategory}
                        </span>
                        <p className="text-[11px] font-bold text-white line-clamp-2 leading-tight mt-0.5">
                          {projectCategoryMap[hoveredProjectCategory]?.title}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. WHY US */}
            <Link
              to="/why-us"
              id="nav-link-why-us"
              className={`relative py-2 text-[12px] 2xl:text-[13px] uppercase tracking-wider font-semibold whitespace-nowrap transition-colors duration-200 ${
                isWhyUsActive
                  ? 'text-white font-bold'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              <span className="whitespace-nowrap">Why Us</span>
              {isWhyUsActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white pointer-events-none" />
              )}
            </Link>

            {/* 5. MEDIA DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('media')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/media"
                id="nav-link-media"
                className={`relative py-2 text-[12px] 2xl:text-[13px] uppercase tracking-wider font-semibold whitespace-nowrap transition-colors duration-200 flex items-center gap-1 ${
                  isMediaActive
                    ? 'text-white font-bold'
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                <span className="whitespace-nowrap">Media</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                {isMediaActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white pointer-events-none" />
                )}
              </Link>

              {/* Media Dropdown */}
              <AnimatePresence>
                {activeDropdown === 'media' && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownMenuVariants}
                    className="absolute top-full left-0 mt-2 w-64 bg-[#0D0D0D] border border-[#262626] shadow-2xl p-3 z-50 space-y-1 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']"
                  >
                    <div className="pb-2 mb-2 border-b border-[#1E1E1E]">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#737373] font-bold">
                        Production Media
                      </span>
                    </div>

                    <Link
                      to="/media"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs text-white hover:bg-[#171717] transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5 text-[#A3A3A3]" />
                      <span>All Media</span>
                    </Link>
                    <Link
                      to="/media/videos"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs text-white hover:bg-[#171717] transition-colors"
                    >
                      <Video className="w-3.5 h-3.5 text-[#A3A3A3]" />
                      <span>Event Videos</span>
                    </Link>
                    <Link
                      to="/media/gallery"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs text-white hover:bg-[#171717] transition-colors"
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-[#A3A3A3]" />
                      <span>Photo Gallery</span>
                    </Link>
                    <Link
                      to="/media/behind-the-scenes"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs text-white hover:bg-[#171717] transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#A3A3A3]" />
                      <span>Behind the Scenes</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 6. BLOG DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('blog')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/blog"
                id="nav-link-blog"
                className={`relative py-2 text-[12px] 2xl:text-[13px] uppercase tracking-wider font-semibold whitespace-nowrap transition-colors duration-200 flex items-center gap-1 ${
                  isBlogActive
                    ? 'text-white font-bold'
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                <span className="whitespace-nowrap">Blog</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                {isBlogActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white pointer-events-none" />
                )}
              </Link>

              {/* Blog Dropdown */}
              <AnimatePresence>
                {activeDropdown === 'blog' && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownMenuVariants}
                    className="absolute top-full left-0 mt-2 w-64 bg-[#0D0D0D] border border-[#262626] shadow-2xl p-3 z-50 space-y-1 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']"
                  >
                    <div className="pb-2 mb-2 border-b border-[#1E1E1E]">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#737373] font-bold">
                        Knowledge Hub
                      </span>
                    </div>

                    <Link
                      to="/blog"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs text-white hover:bg-[#171717] transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#A3A3A3]" />
                      <span>All Articles</span>
                    </Link>
                    <Link
                      to="/blog/event-guides"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs text-white hover:bg-[#171717] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-[#555555] rounded-full" />
                      <span>Event Guides</span>
                    </Link>
                    <Link
                      to="/blog/led-knowledge"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs text-white hover:bg-[#171717] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-[#555555] rounded-full" />
                      <span>LED Knowledge</span>
                    </Link>
                    <Link
                      to="/blog/production-tips"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs text-white hover:bg-[#171717] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-[#555555] rounded-full" />
                      <span>Production Tips</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 7. PRODUCTS */}
            <Link
              to="/products"
              id="nav-link-products"
              className={`relative py-2 text-[12px] 2xl:text-[13px] uppercase tracking-wider font-semibold whitespace-nowrap transition-colors duration-200 ${
                isProductsActive
                  ? 'text-white font-bold'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              <span className="whitespace-nowrap">Products</span>
              {isProductsActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white pointer-events-none" />
              )}
            </Link>

            {/* 8. CONTACT */}
            <Link
              to="/contact"
              id="nav-link-contact"
              className={`relative py-2 text-[12px] 2xl:text-[13px] uppercase tracking-wider font-semibold whitespace-nowrap transition-colors duration-200 ${
                isContactActive
                  ? 'text-white font-bold'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              <span className="whitespace-nowrap">Contact</span>
              {isContactActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white pointer-events-none" />
              )}
            </Link>
          </nav>

          {/* Desktop Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5 2xl:gap-3 shrink-0">
            {/* Location Pill */}
            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-location-link"
              title="Open LED Events Headquarters in Google Maps"
              className="flex items-center gap-2 h-9 px-3 bg-[#111111] hover:bg-[#1A1A1A] border border-[#262626] hover:border-[#444444] text-[11px] font-mono text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap shrink-0 group/loc"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <MapPin className="w-3.5 h-3.5 text-emerald-400 group-hover/loc:text-white transition-colors shrink-0" />
              <span className="hidden 2xl:inline whitespace-nowrap">Sen Sok, Phnom Penh</span>
              <span className="inline 2xl:hidden whitespace-nowrap">Sen Sok</span>
            </a>

            {/* Direct Phone Call */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              id="nav-quick-call"
              title={`Direct Hotline: ${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 h-9 px-3 bg-[#111111] hover:bg-[#1A1A1A] border border-[#262626] hover:border-[#444444] text-[11px] font-mono text-[#CCCCCC] hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="whitespace-nowrap">{COMPANY_INFO.phone}</span>
            </a>

            {/* Primary Action Button */}
            <Link
              to="/contact"
              id="nav-cta-talk"
              className="h-9 px-4.5 bg-white hover:bg-[#E5E5E5] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors shadow-sm"
            >
              <span className="whitespace-nowrap">Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </Link>

            {/* Operations Console Modal Button */}
            <button
              type="button"
              onClick={onOpenAdmin}
              id="nav-admin-login-button"
              title="Operations Console & Inquiry Manager"
              aria-label="Operations Console"
              className="h-9 w-9 flex items-center justify-center bg-[#111111] hover:bg-[#1A1A1A] border border-[#262626] hover:border-[#444444] text-[#888888] hover:text-white transition-colors shrink-0 cursor-pointer"
            >
              <Shield className="w-4 h-4 shrink-0" />
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              title={`Call ${COMPANY_INFO.phone}`}
              className="h-9 w-9 flex items-center justify-center bg-[#141414] border border-[#262626] text-white hover:bg-[#202020] transition-colors"
              aria-label="Call Hotline"
            >
              <Phone className="w-4 h-4" />
            </a>
            <Link
              to="/contact"
              className="h-9 px-3.5 bg-white text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center whitespace-nowrap hover:bg-[#E5E5E5] transition-colors"
            >
              <span className="whitespace-nowrap">Quote</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              className="h-9 w-9 flex items-center justify-center text-white bg-[#141414] border border-[#262626] hover:bg-[#202020] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with Accordion Submenus */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            id="mobile-navigation-drawer"
            className="fixed inset-0 z-40 bg-[#0A0A0A] pt-24 px-6 pb-10 flex flex-col justify-between overflow-y-auto xl:hidden"
          >
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-widest text-[#737373] font-bold font-mono">
                Corporate Navigation
              </p>

              <div className="flex flex-col space-y-2">
                {/* 1. HOME */}
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-wider text-white hover:text-[#A3A3A3] py-2 border-b border-[#1A1A1A]"
                >
                  Home
                </Link>

                {/* 2. SERVICES ACCORDION */}
                <div className="border-b border-[#1A1A1A] py-2">
                  <div className="flex items-center justify-between">
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl font-bold uppercase tracking-wider text-white"
                    >
                      Services
                    </Link>
                    <button
                      onClick={() => toggleMobileSection('services')}
                      className="p-2 text-[#A3A3A3] hover:text-white"
                      aria-label="Toggle Services Submenu"
                    >
                      {mobileExpanded.services ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </button>
                  </div>
                  {mobileExpanded.services && (
                    <div className="pl-4 pt-2 pb-1 space-y-2 border-l border-[#262626] mt-2">
                      {SERVICES.map((srv) => (
                        <Link
                          key={srv.id}
                          to={`/services/${srv.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-[#CCCCCC] hover:text-white py-1"
                        >
                          <span className="font-mono text-xs text-[#737373] mr-2">{srv.number}</span>
                          {srv.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* 3. PROJECTS ACCORDION */}
                <div className="border-b border-[#1A1A1A] py-2">
                  <div className="flex items-center justify-between">
                    <Link
                      to="/projects"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl font-bold uppercase tracking-wider text-white"
                    >
                      Projects
                    </Link>
                    <button
                      onClick={() => toggleMobileSection('projects')}
                      className="p-2 text-[#A3A3A3] hover:text-white"
                      aria-label="Toggle Projects Submenu"
                    >
                      {mobileExpanded.projects ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </button>
                  </div>
                  {mobileExpanded.projects && (
                    <div className="pl-4 pt-2 pb-1 space-y-2 border-l border-[#262626] mt-2">
                      <Link
                        to="/projects"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-[#CCCCCC] hover:text-white py-1"
                      >
                        All Projects ({PROJECTS.length})
                      </Link>
                      <Link
                        to="/projects?category=Concert"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-[#CCCCCC] hover:text-white py-1"
                      >
                        Concert Events
                      </Link>
                      <Link
                        to="/projects?category=Corporate"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-[#CCCCCC] hover:text-white py-1"
                      >
                        Corporate Events
                      </Link>
                      <Link
                        to="/projects?category=Festival"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-[#CCCCCC] hover:text-white py-1"
                      >
                        Festival Events
                      </Link>
                      <Link
                        to="/projects?category=Outdoor"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-[#CCCCCC] hover:text-white py-1"
                      >
                        Outdoor Events
                      </Link>
                    </div>
                  )}
                </div>

                {/* 4. WHY US */}
                <Link
                  to="/why-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-wider text-white hover:text-[#A3A3A3] py-2 border-b border-[#1A1A1A]"
                >
                  Why Us
                </Link>

                {/* 5. MEDIA ACCORDION */}
                <div className="border-b border-[#1A1A1A] py-2">
                  <div className="flex items-center justify-between">
                    <Link
                      to="/media"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl font-bold uppercase tracking-wider text-white"
                    >
                      Media
                    </Link>
                    <button
                      onClick={() => toggleMobileSection('media')}
                      className="p-2 text-[#A3A3A3] hover:text-white"
                      aria-label="Toggle Media Submenu"
                    >
                      {mobileExpanded.media ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </button>
                  </div>
                  {mobileExpanded.media && (
                    <div className="pl-4 pt-2 pb-1 space-y-2 border-l border-[#262626] mt-2">
                      <Link
                        to="/media"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-[#CCCCCC] hover:text-white py-1"
                      >
                        All Media
                      </Link>
                      <Link
                        to="/media/videos"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-[#CCCCCC] hover:text-white py-1"
                      >
                        Event Videos
                      </Link>
                      <Link
                        to="/media/gallery"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-[#CCCCCC] hover:text-white py-1"
                      >
                        Photo Gallery
                      </Link>
                      <Link
                        to="/media/behind-the-scenes"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-[#CCCCCC] hover:text-white py-1"
                      >
                        Behind the Scenes
                      </Link>
                    </div>
                  )}
                </div>

                {/* 6. BLOG ACCORDION */}
                <div className="border-b border-[#1A1A1A] py-2">
                  <div className="flex items-center justify-between">
                    <Link
                      to="/blog"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl font-bold uppercase tracking-wider text-white"
                    >
                      Blog
                    </Link>
                    <button
                      onClick={() => toggleMobileSection('blog')}
                      className="p-2 text-[#A3A3A3] hover:text-white"
                      aria-label="Toggle Blog Submenu"
                    >
                      {mobileExpanded.blog ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </button>
                  </div>
                  {mobileExpanded.blog && (
                    <div className="pl-4 pt-2 pb-1 space-y-2 border-l border-[#262626] mt-2">
                      <Link
                        to="/blog"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-[#CCCCCC] hover:text-white py-1"
                      >
                        All Articles
                      </Link>
                      <Link
                        to="/blog/event-guides"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-[#CCCCCC] hover:text-white py-1"
                      >
                        Event Guides
                      </Link>
                      <Link
                        to="/blog/led-knowledge"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-[#CCCCCC] hover:text-white py-1"
                      >
                        LED Knowledge
                      </Link>
                      <Link
                        to="/blog/production-tips"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-[#CCCCCC] hover:text-white py-1"
                      >
                        Production Tips
                      </Link>
                    </div>
                  )}
                </div>

                {/* 7. PRODUCTS */}
                <Link
                  to="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-wider text-white hover:text-[#A3A3A3] py-2 border-b border-[#1A1A1A]"
                >
                  Products
                </Link>

                {/* 8. CONTACT */}
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-wider text-white hover:text-[#A3A3A3] py-2 border-b border-[#1A1A1A]"
                >
                  Contact
                </Link>

                {/* Mobile Direct Location Card */}
                <div className="pt-4 pb-2">
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3.5 bg-[#121212] border border-[#262626] hover:border-white transition-colors group/mobloc"
                  >
                    <div className="w-8 h-8 bg-[#1C1C1C] border border-[#333333] flex items-center justify-center shrink-0 mt-0.5 group-hover/mobloc:bg-white group-hover/mobloc:text-black transition-colors">
                      <MapPin className="w-4 h-4 text-emerald-400 group-hover/mobloc:text-black transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                        <span>Sen Sok Warehouse</span>
                        <ArrowUpRight className="w-3 h-3 text-[#737373] group-hover/mobloc:text-white" />
                      </div>
                      <div className="text-xs text-white font-medium mt-0.5 leading-snug">
                        {COMPANY_INFO.address}
                      </div>
                      <div className="text-[10px] font-mono text-[#888888] mt-1 flex items-center gap-1">
                        <span>Open in Google Maps →</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Bottom Hotline & Actions */}
            <div className="pt-8 border-t border-[#222222] space-y-4">
              <div className="flex flex-col gap-1 text-sm text-[#A3A3A3]">
                <span className="text-xs uppercase tracking-widest text-[#737373] font-mono">
                  Direct Production Desk
                </span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-white font-bold text-lg">
                  {COMPANY_INFO.phone}
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#A3A3A3] hover:underline text-xs">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-white text-black py-3 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="w-full bg-[#171717] border border-[#262626] text-[#A3A3A3] hover:text-white py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Shield className="w-3.5 h-3.5" />
                  <span>Admin</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
