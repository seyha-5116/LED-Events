import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout & Global Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { AdminDashboardModal } from './components/AdminDashboardModal';
import { PrivacyModal } from './components/PrivacyModal';
import { VideoModal } from './components/VideoModal';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { MediaPage } from './pages/MediaPage';
import { MediaVideosPage } from './pages/MediaVideosPage';
import { MediaGalleryPage } from './pages/MediaGalleryPage';
import { MediaBtsPage } from './pages/MediaBtsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogCategoryPage } from './pages/BlogCategoryPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';

// Data & Types
import { INITIAL_INQUIRIES } from './data/ledEventsData';
import { EventInquiry } from './types';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  
  // Global Video Modal State
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);

  // Persistent Inquiries state
  const [inquiries, setInquiries] = useState<EventInquiry[]>(() => {
    try {
      const saved = localStorage.getItem('led_events_inquiries');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_INQUIRIES;
  });

  useEffect(() => {
    try {
      localStorage.setItem('led_events_inquiries', JSON.stringify(inquiries));
    } catch {
      // Ignore storage errors
    }
  }, [inquiries]);

  const handleInquirySubmitted = (newInquiry: EventInquiry) => {
    setInquiries((prev) => [newInquiry, ...prev]);
  };

  const handleUpdateInquiryStatus = (id: string, newStatus: EventInquiry['status']) => {
    setInquiries((prev) =>
      prev.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
    );
  };

  const handleOpenVideo = (url: string, title: string) => {
    setActiveVideo({ url, title });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-white selection:text-black flex flex-col justify-between">
        {/* Sticky Header with Multi-Page Mega-Menus */}
        <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route
              path="/"
              element={
                <HomePage
                  onOpenVideo={handleOpenVideo}
                  onInquirySubmitted={handleInquirySubmitted}
                />
              }
            />

            {/* Services */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />

            {/* Projects */}
            <Route
              path="/projects"
              element={<ProjectsPage onOpenVideo={handleOpenVideo} />}
            />
            <Route
              path="/projects/:slug"
              element={<ProjectDetailPage onOpenVideo={handleOpenVideo} />}
            />

            {/* Why Us */}
            <Route path="/why-us" element={<WhyUsPage />} />

            {/* Media Hub & Sub-pages */}
            <Route
              path="/media"
              element={<MediaPage onOpenVideo={handleOpenVideo} />}
            />
            <Route
              path="/media/videos"
              element={<MediaVideosPage onOpenVideo={handleOpenVideo} />}
            />
            <Route path="/media/gallery" element={<MediaGalleryPage />} />
            <Route path="/media/behind-the-scenes" element={<MediaBtsPage />} />

            {/* Blog Hub, Categories & Articles */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/event-guides" element={<BlogCategoryPage />} />
            <Route path="/blog/led-knowledge" element={<BlogCategoryPage />} />
            <Route path="/blog/production-tips" element={<BlogCategoryPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />

            {/* Specialized Products */}
            <Route path="/products" element={<ProductsPage />} />

            {/* Contact & Quotation */}
            <Route
              path="/contact"
              element={<ContactPage onInquirySubmitted={handleInquirySubmitted} />}
            />

            {/* 404 Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer with Multi-Page Links */}
        <Footer
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* Operations Console (Admin Modal) */}
        <AdminDashboardModal
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
          inquiries={inquiries}
          onUpdateInquiryStatus={handleUpdateInquiryStatus}
        />

        {/* Privacy Policy Modal */}
        <PrivacyModal
          isOpen={isPrivacyOpen}
          onClose={() => setIsPrivacyOpen(false)}
        />

        {/* Global Video Modal */}
        <VideoModal
          videoUrl={activeVideo?.url || null}
          title={activeVideo?.title || ''}
          onClose={() => setActiveVideo(null)}
        />
      </div>
    </BrowserRouter>
  );
}
