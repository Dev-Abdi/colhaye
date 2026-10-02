import React from 'react';
import { useBrand } from '../context/BrandContext';
import { ExternalLink, Video, Share2, Compass, ArrowUpRight } from 'lucide-react';

export const SocialSection: React.FC = () => {
  const { config } = useBrand();

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] text-[#141414] border-t border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B89358] font-medium font-sans">
            Digital Presence & Reach
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.01em] font-normal text-[#141414]">
            FOLLOW THE JOURNEY
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-neutral-600">
            Real stories. Authentic property insights. Transparent community impact.
          </p>
        </div>

        {/* Social Platforms Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* TikTok Platform Card */}
          <div className="bg-[#FAF8F5] p-8 border border-[#EBE4DC] hover:border-[#B89358] transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#141414] text-[#FAF8F5] flex items-center justify-center font-bold text-base">
                    TT
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#141414]">TikTok</h3>
                    <span className="text-xs text-neutral-500">@idleomarhusein</span>
                  </div>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#B89358] font-medium">
                  Video Hub
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                Follow for daily fast-paced Nairobi property tours, real-estate investment breakdowns, candid behind-the-scenes moments, and live field documentation of community Sadaqa distributions.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-neutral-500">
                <span>· Property Tours</span>
                <span>· Nairobi Market Realities</span>
                <span>· Sadaqa Field Updates</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#EBE4DC]">
              <a
                href={config.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#141414] text-[#FAF8F5] group-hover:bg-[#B89358] group-hover:text-[#141414] text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Follow on TikTok</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Facebook Platform Card */}
          <div className="bg-[#FAF8F5] p-8 border border-[#EBE4DC] hover:border-[#B89358] transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold text-base">
                    fb
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#141414]">Facebook</h3>
                    <span className="text-xs text-neutral-500">Idle Omar Hussein</span>
                  </div>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#B89358] font-medium">
                  Community Hub
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                Connect for long-form market analysis, formal property release announcements, community dialogues, and extended photographic documentation of ongoing Sadaqa initiatives across Kenya.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-neutral-500">
                <span>· Detailed Listings</span>
                <span>· Long-form Commentary</span>
                <span>· Community Dialogue</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#EBE4DC]">
              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#141414] text-[#FAF8F5] group-hover:bg-[#B89358] group-hover:text-[#141414] text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Connect on Facebook</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
