import React from 'react';
import { useBrand } from '../context/BrandContext';
import { ExternalLink, Camera, Settings, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { config, setActiveView, setIsPhotoManagerOpen, setIsSettingsOpen } = useBrand();
  const currentYear = new Date().getFullYear();

  const handleNav = (view: 'home' | 'about' | 'real-estate' | 'sadaqa' | 'media' | 'work' | 'contact') => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141414] text-[#FAF8F5] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-3xl font-bold tracking-[0.2em] text-[#FAF8F5]">
                COLYAHE
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4B580] font-sans">
                IDLE OMAR HUSSEIN
              </p>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-sans">
              Personal brand platform bridging high-end real-estate marketing across Nairobi with verified, transparent community Sadaqa initiatives.
            </p>

            <div className="pt-2 text-xs text-neutral-400">
              <span className="text-[#D4B580]">Location:</span> Nairobi, Kenya
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4B580] font-semibold block">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => handleNav('home')}
                className="text-left text-neutral-300 hover:text-white transition-colors py-1"
              >
                Home
              </button>
              <button
                onClick={() => handleNav('about')}
                className="text-left text-neutral-300 hover:text-white transition-colors py-1"
              >
                About
              </button>
              <button
                onClick={() => handleNav('real-estate')}
                className="text-left text-neutral-300 hover:text-white transition-colors py-1"
              >
                Real Estate
              </button>
              <button
                onClick={() => handleNav('sadaqa')}
                className="text-left text-neutral-300 hover:text-white transition-colors py-1"
              >
                Sadaqa
              </button>
              <button
                onClick={() => handleNav('media')}
                className="text-left text-neutral-300 hover:text-white transition-colors py-1"
              >
                Media
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="text-left text-neutral-300 hover:text-white transition-colors py-1"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Presence & Utilities */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4B580] font-semibold block">
              Follow The Journey
            </span>
            <div className="space-y-2 text-xs">
              <a
                href={config.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-neutral-300 hover:text-[#D4B580] transition-colors py-1 border-b border-white/10"
              >
                <span>TikTok (@idleomarhusein)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-neutral-300 hover:text-[#D4B580] transition-colors py-1 border-b border-white/10"
              >
                <span>Facebook (Idle Omar Hussein)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Tools */}
            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => setIsPhotoManagerOpen(true)}
                className="text-[11px] uppercase tracking-wider text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Camera className="w-3.5 h-3.5 text-[#B89358]" />
                <span>Upload Photos</span>
              </button>
              <span className="text-neutral-600">·</span>
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="text-[11px] uppercase tracking-wider text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Settings className="w-3.5 h-3.5 text-[#B89358]" />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {currentYear} Idle Omar Hussein. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <span>Nairobi, Kenya</span>
            <span aria-hidden="true">·</span>
            <span>Real Estate Marketing</span>
            <span aria-hidden="true">·</span>
            <span>Community Sadaqa</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B89358]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
