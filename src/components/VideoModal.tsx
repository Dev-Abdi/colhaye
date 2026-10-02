import React from 'react';
import { MediaItem } from '../types';
import { useBrand } from '../context/BrandContext';
import { X, ExternalLink, Play, Film } from 'lucide-react';

interface VideoModalProps {
  media: MediaItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ media, onClose }) => {
  const { config } = useBrand();

  if (!media) return null;

  const targetLink = media.externalUrl || (media.platform === 'TikTok' ? config.tiktokUrl : config.facebookUrl);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-[#18181B] text-[#FAF8F5] max-w-2xl w-full border border-white/15 overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/80 text-white hover:bg-[#B89358] hover:text-[#141414] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Display */}
        <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src={media.thumbnailUrl}
            alt={media.title}
            className="w-full h-full object-cover filter brightness-[0.6]"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <a
              href={targetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-[#B89358] text-[#141414] flex items-center justify-center hover:scale-110 transition-transform mb-4 shadow-xl"
              aria-label="Play video on social platform"
            >
              <Play className="w-7 h-7 fill-current ml-1" />
            </a>
            <span className="text-xs uppercase tracking-widest text-[#D4B580] font-medium">
              Click to Open Full Video on {media.platform}
            </span>
          </div>
        </div>

        {/* Meta Content */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between text-xs text-neutral-400">
            <span className="text-[#D4B580] uppercase tracking-wider">{media.category}</span>
            <span className="font-mono tabular-nums">{media.duration} · {media.date}</span>
          </div>

          <h3 className="font-serif text-2xl text-[#FAF8F5] leading-snug">
            {media.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
            {media.description}
          </p>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-400">
              Published by Idle Omar Hussein ({media.platform})
            </span>

            <a
              href={targetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 bg-[#FAF8F5] text-[#141414] hover:bg-[#B89358] hover:text-[#141414] text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <span>Watch on {media.platform}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
