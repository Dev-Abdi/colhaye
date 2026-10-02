import React, { useState, useEffect } from 'react';
import { useBrand } from '../context/BrandContext';
import { Menu, X, ArrowUpRight, Camera, Settings, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { activeView, setActiveView, openInquiry, setIsPhotoManagerOpen, setIsSettingsOpen, config } = useBrand();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; view: 'home' | 'about' | 'real-estate' | 'sadaqa' | 'media' | 'work' | 'contact' }[] = [
    { label: 'Home', view: 'home' },
    { label: 'About', view: 'about' },
    { label: 'Real Estate', view: 'real-estate' },
    { label: 'Sadaqa', view: 'sadaqa' },
    { label: 'Media', view: 'media' },
    { label: 'Work With Me', view: 'work' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: 'home' | 'about' | 'real-estate' | 'sadaqa' | 'media' | 'work' | 'contact') => {
    setActiveView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EBE4DC] shadow-[0_4px_24px_rgba(0,0,0,0.03)] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo & Formal Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B89358]"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] text-[#141414] group-hover:text-[#B89358] transition-colors">
                COLYAHE
              </span>
              <span className="hidden sm:inline-block text-[#B89358] text-xs">/</span>
              <span className="hidden sm:inline-block text-xs uppercase tracking-[0.2em] text-neutral-500 font-medium">
                IDLE OMAR HUSSEIN
              </span>
            </div>
            <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-400 font-sans">
              Nairobi, Kenya
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeView === link.view;
              return (
                <button
                  key={link.view}
                  onClick={() => handleNavClick(link.view)}
                  className={`text-xs uppercase tracking-[0.18em] transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#141414] font-semibold'
                      : 'text-neutral-600 hover:text-[#141414]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B89358]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions & Tools */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Upload / Manage Photos button */}
            <button
              onClick={() => setIsPhotoManagerOpen(true)}
              title="Upload / replace Idle Omar Hussein's portrait photos"
              className="p-2 text-neutral-500 hover:text-[#141414] hover:bg-[#EBE4DC]/60 transition-colors border border-transparent hover:border-[#DFD5C8]"
              aria-label="Manage portrait photos"
            >
              <Camera className="w-4 h-4" />
            </button>

            {/* Quick Config / Settings */}
            <button
              onClick={() => setIsSettingsOpen(true)}
              title="Configure Kenyan WhatsApp number & settings"
              className="p-2 text-neutral-500 hover:text-[#141414] hover:bg-[#EBE4DC]/60 transition-colors border border-transparent hover:border-[#DFD5C8]"
              aria-label="Site settings"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Prominent CTA */}
            <button
              onClick={() => openInquiry('general', 'Direct Inquiry', 'Initiate personal discussion with Idle Omar Hussein (Colyahe)')}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-[0.16em] font-medium bg-[#141414] text-[#FAF8F5] hover:bg-[#B89358] hover:text-[#141414] transition-all duration-200 active:scale-[0.98]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsPhotoManagerOpen(true)}
              className="p-2 text-neutral-600 hover:text-[#141414]"
              aria-label="Upload photo"
            >
              <Camera className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#141414] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B89358]"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Editorial Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#FAF8F5] pt-24 px-8 pb-10 flex flex-col justify-between overflow-y-auto lg:hidden">
          <div className="space-y-6">
            <div className="border-b border-[#EBE4DC] pb-4">
              <span className="text-[11px] tracking-[0.22em] uppercase text-[#B89358] font-medium">
                Menu Navigation
              </span>
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.view}
                  onClick={() => handleNavClick(link.view)}
                  className={`text-left font-serif text-3xl transition-colors ${
                    activeView === link.view
                      ? 'text-[#B89358] font-bold pl-2 border-l-2 border-[#B89358]'
                      : 'text-[#141414] hover:text-[#B89358]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[#EBE4DC] space-y-4">
            <div className="flex items-center justify-between text-xs text-neutral-500 uppercase tracking-widest">
              <span>Nairobi, Kenya</span>
              <a
                href={`https://wa.me/${config.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#141414] font-medium hover:text-[#B89358]"
              >
                <Phone className="w-3.5 h-3.5 text-[#B89358]" />
                <span>{config.whatsappFormatted}</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsPhotoManagerOpen(true);
                }}
                className="py-2.5 px-3 text-center text-xs tracking-wider uppercase border border-[#DFD5C8] text-[#141414] hover:bg-[#EBE4DC]"
              >
                Upload Photo
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSettingsOpen(true);
                }}
                className="py-2.5 px-3 text-center text-xs tracking-wider uppercase border border-[#DFD5C8] text-[#141414] hover:bg-[#EBE4DC]"
              >
                Settings
              </button>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openInquiry('general', 'Direct Inquiry', 'Initiate discussion with Idle Omar Hussein');
              }}
              className="w-full py-3.5 bg-[#141414] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium text-center"
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </>
  );
};
