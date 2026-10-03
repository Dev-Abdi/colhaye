import React from 'react';
import { useBrand } from '../context/BrandContext';
import { ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { config, setActiveView } = useBrand();
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
                COLHAYE
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

          {/* Social Presence */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4B580] font-semibold block">
              Follow The Journey
            </span>
            <div className="space-y-2.5">
              <a
                href={config.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 bg-white/5 hover:bg-[#D4B580]/15 border border-white/10 hover:border-[#D4B580]/40 text-neutral-200 hover:text-white transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-sm bg-black/60 flex items-center justify-center text-white group-hover:text-[#D4B580] transition-colors">
                    {/* TikTok SVG Icon */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.67 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.33V9.05c1.47 1.05 3.27 1.68 5.22 1.72V7.32a4.85 4.85 0 0 1-1.31-.63z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-medium">TikTok</span>
                    <span className="text-[10px] text-neutral-400 group-hover:text-neutral-300">@idleomarhusein</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#D4B580] transition-colors" />
              </a>

              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 bg-white/5 hover:bg-[#D4B580]/15 border border-white/10 hover:border-[#D4B580]/40 text-neutral-200 hover:text-white transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-sm bg-[#1877F2]/20 flex items-center justify-center text-[#1877F2] group-hover:text-white transition-colors">
                    {/* Facebook SVG Icon */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-medium">Facebook</span>
                    <span className="text-[10px] text-neutral-400 group-hover:text-neutral-300">Idle Omar Hussein</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#D4B580] transition-colors" />
              </a>
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
