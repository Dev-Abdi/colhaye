import React from 'react';
import { useBrand } from '../context/BrandContext';
import { ExternalLink, ArrowRight, Heart, Home, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { images, config, openInquiry } = useBrand();

  return (
    <div className="pt-28 pb-24 bg-[#FAF8F5] text-[#141414]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Editorial Top Title */}
        <div className="border-b border-[#DFD5C8] pb-8 space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B89358]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#B89358] font-medium font-sans">
              Editorial Profile · Nairobi, Kenya
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#141414]">
            IDLE OMAR HUSSEIN
          </h1>
          <p className="font-serif italic text-2xl sm:text-3xl text-neutral-600">
            Known to thousands as Colhaye.
          </p>
        </div>

        {/* Hero Grid: Portrait + Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait Slot */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] bg-[#EBE4DC] overflow-hidden border border-[#DFD5C8] shadow-lg">
              <img
                src={images.aboutPortrait || `${import.meta.env.BASE_URL}image.png`}
                alt="Idle Omar Hussein (Colhaye) - Editorial Portrait"
                className="w-full h-full object-cover object-top sm:object-center filter contrast-[1.02]"
              />
            </div>

            {/* Quick Caption */}
            <div className="pt-4 flex items-center justify-between text-xs text-neutral-500">
              <span>Official Portrait · Nairobi, Kenya</span>
              <span className="text-[#B89358]">Verified Official</span>
            </div>
          </div>

          {/* Editorial Story */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B89358] font-semibold">
                Personal Story & Background
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141414]">
                A Voice for Real Estate. A Heart for the Community.
              </h2>
            </div>

            <div className="prose text-neutral-700 space-y-4 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                Idle Omar Hussein (widely recognized as <strong>Colhaye</strong>) has carved out a unique position in Kenya's personal-brand landscape. Rather than operating as an anonymous corporate broker or a purely lifestyle content creator, he blends hands-on real-estate marketing with authentic community advocacy.
              </p>
              <p>
                His digital presence draws together property buyers, diaspora investors, families seeking dream homes, and donors wishing to participate in verified, transparent Sadaqa projects.
              </p>
            </div>

            {/* Explicit Editable Placeholder: Biography */}
            <div className="p-6 bg-[#FAF8F5] border border-dashed border-[#DFD5C8] space-y-2">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#B89358] font-semibold">
                <span>[ADD BIOGRAPHY]</span>
                <span className="text-[10px] text-neutral-400 lowercase font-normal italic">editable placeholder</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed italic">
                "Insert specific personal background, formative journey in Nairobi, values, and narrative details here once finalized. (No fictitious details have been invented per strict brand integrity guidelines)."
              </p>
            </div>

            {/* Explicit Editable Placeholder: Experience */}
            <div className="p-6 bg-[#FAF8F5] border border-dashed border-[#DFD5C8] space-y-2">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#B89358] font-semibold">
                <span>[ADD EXPERIENCE]</span>
                <span className="text-[10px] text-neutral-400 lowercase font-normal italic">editable placeholder</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed italic">
                "Insert specific real-estate milestones, key developments represented, advisory experience, or institutional partnerships here."
              </p>
            </div>

            {/* Explicit Editable Placeholder: Mission */}
            <div className="p-6 bg-[#FAF8F5] border border-dashed border-[#DFD5C8] space-y-2">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#B89358] font-semibold">
                <span>[ADD MISSION]</span>
                <span className="text-[10px] text-neutral-400 lowercase font-normal italic">editable placeholder</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed italic">
                "Insert formal mission statement for the Colhaye brand and long-term vision for community impact in Kenya."
              </p>
            </div>

            {/* Explicit Editable Placeholder: Achievements */}
            <div className="p-6 bg-[#FAF8F5] border border-dashed border-[#DFD5C8] space-y-2">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-[#B89358] font-semibold">
                <span>[ADD ACHIEVEMENTS IF APPLICABLE]</span>
                <span className="text-[10px] text-neutral-400 lowercase font-normal italic">editable placeholder</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed italic">
                "Reserved space for verified awards, recognitions, or keynote appearances."
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars in Detail */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#DFD5C8]">
          <div className="p-6 bg-[#F4EFEB] border border-[#EBE4DC] space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#B89358] font-semibold">
              <Home className="w-4 h-4" />
              <span>Real Estate Work</span>
            </div>
            <h3 className="font-serif text-xl text-[#141414]">Property Marketing & Advisory</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Active across Nairobi’s premier residential and commercial enclaves: Karen, Westlands, Kilimani, Lavington, and Riverside. Specializing in property video promotion, buyer connections, and verified land sourcing.
            </p>
          </div>

          <div className="p-6 bg-[#F4EFEB] border border-[#EBE4DC] space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#B89358] font-semibold">
              <Heart className="w-4 h-4" />
              <span>Sadaqa & Impact</span>
            </div>
            <h3 className="font-serif text-xl text-[#141414]">Community Responsibility</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Transparent grassroots mobilization addressing clean water boreholes, emergency hunger hampers, medical surgery clearances, and orphan school fees with 100% direct-receipt accountability.
            </p>
          </div>

          <div className="p-6 bg-[#F4EFEB] border border-[#EBE4DC] space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#B89358] font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Personal Brand</span>
            </div>
            <h3 className="font-serif text-xl text-[#141414]">Digital Influence</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Engaging thousands of followers through unfiltered property walkthroughs, market analyses, and authentic community stories on TikTok and Facebook.
            </p>
          </div>
        </div>

        {/* Connect & Social CTA Banner */}
        <div className="bg-[#141414] text-[#FAF8F5] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5]">
              Connect Directly with Idle Omar Hussein
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Open for real-estate representations, property marketing collaborations, and verified community campaigns.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={config.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-xs uppercase tracking-wider text-white flex items-center gap-2"
            >
              <span>TikTok</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={config.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-xs uppercase tracking-wider text-white flex items-center gap-2"
            >
              <span>Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => openInquiry('general', 'Personal Introduction', 'Direct message from About Page')}
              className="px-6 py-2.5 bg-[#FAF8F5] text-[#141414] hover:bg-[#B89358] text-xs uppercase tracking-wider font-semibold"
            >
              Start Conversation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
