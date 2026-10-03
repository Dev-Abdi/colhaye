/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrandProvider, useBrand } from './context/BrandContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutPreview } from './components/AboutPreview';
import { RealEstateSection } from './components/RealEstateSection';
import { SadaqaSection } from './components/SadaqaSection';
import { MediaSection } from './components/MediaSection';
import { SocialSection } from './components/SocialSection';
import { WorkWithMe } from './components/WorkWithMe';
import { ContactSection } from './components/ContactSection';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';

// Modals
import { PropertyModal } from './components/PropertyModal';
import { SadaqaModal } from './components/SadaqaModal';
import { VideoModal } from './components/VideoModal';
import { InquiryModal } from './components/InquiryModal';

const AppContent: React.FC = () => {
  const {
    activeView,
    selectedProperty,
    setSelectedProperty,
    selectedCampaign,
    setSelectedCampaign,
    selectedMedia,
    setSelectedMedia,
  } = useBrand();

  useEffect(() => {
    // Scroll to top on view changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#141414] antialiased selection:bg-[#B89358]/30 selection:text-[#141414]">
      {/* Sticky Editorial Navbar */}
      <Navbar />

      {/* Main Content Area Based on Active View */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            <Hero />
            <AboutPreview />
            <RealEstateSection />
            <SadaqaSection />
            <MediaSection />
            <SocialSection />
            <WorkWithMe />
            <ContactSection />
          </>
        )}

        {activeView === 'about' && <AboutPage />}

        {activeView === 'real-estate' && (
          <div className="pt-16">
            <RealEstateSection />
            <ContactSection />
          </div>
        )}

        {activeView === 'sadaqa' && (
          <div className="pt-16">
            <SadaqaSection />
            <ContactSection />
          </div>
        )}

        {activeView === 'media' && (
          <div className="pt-16">
            <MediaSection />
            <SocialSection />
          </div>
        )}

        {activeView === 'work' && (
          <div className="pt-16">
            <WorkWithMe />
            <ContactSection />
          </div>
        )}

        {activeView === 'contact' && (
          <div className="pt-16">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Global Interactive Modals */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      <SadaqaModal
        campaign={selectedCampaign}
        onClose={() => setSelectedCampaign(null)}
      />

      <VideoModal
        media={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />

      <InquiryModal />
    </div>
  );
};

export default function App() {
  return (
    <BrandProvider>
      <AppContent />
    </BrandProvider>
  );
}
