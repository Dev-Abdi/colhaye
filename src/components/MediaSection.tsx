import React from 'react';
import { MEDIA_FIELD_ITEMS } from '../data/content';
import { MediaItem } from '../types';
import { useBrand } from '../context/BrandContext';
import { Play, ArrowUpRight, Film, ExternalLink } from 'lucide-react';

export const MediaSection: React.FC = () => {
  const { setSelectedMedia, config } = useBrand();

  const handlePlayMedia = (item: MediaItem) => {
    setSelectedMedia(item);
  };

  return (
    <section id="media-section" className="py-24 sm:py-32 bg-[#141414] text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4B580] font-medium font-sans">
              Video & Content Archive
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.01em] font-normal text-[#FAF8F5]">
              FROM THE FIELD
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-neutral-400">
              Unfiltered property tours, real estate guidance, and verified community moments.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={config.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-xs tracking-wider uppercase text-[#FAF8F5] transition-colors"
            >
              <span>Watch on TikTok</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={config.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-xs tracking-wider uppercase text-[#FAF8F5] transition-colors"
            >
              <span>Facebook Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEDIA_FIELD_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => handlePlayMedia(item)}
              className="group cursor-pointer bg-[#1C1C1C] border border-white/10 hover:border-[#B89358] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  {/* Subtle Dark Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#141414]/80 backdrop-blur-xs border border-white/30 flex items-center justify-center text-[#D4B580] group-hover:scale-110 group-hover:bg-[#B89358] group-hover:text-[#141414] group-hover:border-[#B89358] transition-all">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Duration & Category Badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-neutral-300">
                    <span className="bg-black/60 px-2 py-0.5 tracking-wider uppercase text-[10px]">
                      {item.category}
                    </span>
                    <span className="font-mono tabular-nums bg-black/60 px-1.5 py-0.5">
                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4B580]">
                    {item.date}
                  </span>
                  <h3 className="font-serif text-lg text-[#FAF8F5] group-hover:text-[#D4B580] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 flex items-center justify-between text-xs text-neutral-400 border-t border-white/5 mt-2">
                <span className="text-[11px] tracking-wider uppercase">Platform: {item.platform}</span>
                <span className="text-[#D4B580] flex items-center gap-1 group-hover:translate-x-1 transition-transform text-xs">
                  <span>Watch Video</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
