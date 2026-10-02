import React from 'react';
import { useBrand } from '../context/BrandContext';
import { ArrowRight, Camera, CheckCircle2 } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  const { images, setIsPhotoManagerOpen, setActiveView } = useBrand();

  const coreIdentities = [
    {
      title: 'Real Estate Marketer',
      desc: 'Bridging home seekers and visionary developers across Nairobi with transparent representation and strategic property positioning.',
    },
    {
      title: 'Content Creator & Influencer',
      desc: 'Bringing authentic, candid field coverage of Nairobi neighborhoods, architecture, and investment realities directly to social audiences.',
    },
    {
      title: 'Community Advocate',
      desc: 'Championing grassroots Sadaqa campaigns, water access, and direct aid for families in need with radical reporting and transparency.',
    },
    {
      title: 'Connector of People & Opportunities',
      desc: 'Cultivating trust between diaspora investors, local land owners, and community initiatives to create enduring real-world impact.',
    },
  ];

  return (
    <section id="personal-brand-intro" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#141414]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Photo Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] bg-[#EBE4DC] overflow-hidden border border-[#DFD5C8] shadow-md group">
              <img
                src={images.aboutPortrait || 'image.png'}
                alt="Idle Omar Hussein (Colyahe) - Nairobi Real Estate Marketer"
                className="w-full h-full object-cover object-top sm:object-center filter contrast-[1.03]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://aistudio.google.com/artifacts/image.png';
                }}
              />

              {/* Hover quick change control */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setIsPhotoManagerOpen(true)}
                  className="px-3 py-1.5 bg-black/75 backdrop-blur-xs text-white text-[11px] uppercase tracking-wider flex items-center gap-1.5"
                >
                  <Camera className="w-3 h-3 text-[#B89358]" />
                  <span>Change Portrait</span>
                </button>
              </div>
            </div>

            {/* Subtle decorative offset border to emulate high-end architectural print look */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#B89358]/40 -z-10 pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Editorial Narrative & Brand Statement */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89358] font-medium">
                Personal Brand Introduction
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.01em] font-normal text-[#141414] leading-[1.1]">
                More Than Marketing.
              </h2>
            </div>

            <p className="font-serif italic text-xl sm:text-2xl text-neutral-700 leading-relaxed font-light">
              "Building trust isn't a strategy—it is the foundation of every home we represent and every life we touch through Sadaqa."
            </p>

            <div className="space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
              <p>
                In a rapidly developing city like Nairobi, Idle Omar Hussein (Colyahe) bridges modern real-estate marketing with genuine personal accessibility. He is not a faceless corporate brokerage; he is an active marketer and community advocate whose word is his bond.
              </p>
              <p>
                Whether walking through high-potential developments in Karen and Westlands or spearheading verified community assistance drives, Idle Omar embodies a balanced vision: property opportunities that build prosperity, alongside community responsibility that uplifts people in need.
              </p>
            </div>

            {/* Core Brand Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {coreIdentities.map((item, idx) => (
                <div key={idx} className="p-4 bg-[#F4EFEB]/80 border border-[#EBE4DC]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B89358] shrink-0" />
                    <h3 className="font-medium text-sm text-[#141414]">{item.title}</h3>
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed pl-6">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA to Full About Page */}
            <div className="pt-4">
              <button
                onClick={() => {
                  setActiveView('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#141414] hover:text-[#B89358] transition-colors py-2 border-b border-[#141414] hover:border-[#B89358]"
              >
                <span>Discover My Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
