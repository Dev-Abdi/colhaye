import React from 'react';
import { Property } from '../types';
import { useBrand } from '../context/BrandContext';
import { MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewDetails }) => {
  const { generateWhatsAppLink, openInquiry } = useBrand();

  const handleWhatsAppInquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = `Hello Idle Omar (Colyahe), I am interested in asking about this property: "${property.title}" in ${property.location} (Listed at ${property.price}). Could you provide more details?`;
    window.open(generateWhatsAppLink(msg), '_blank');
  };

  const handleBookViewing = (e: React.MouseEvent) => {
    e.stopPropagation();
    openInquiry(
      'property',
      `Viewing Request: ${property.title}`,
      `Property: ${property.title} (${property.location} - ${property.price})`
    );
  };

  return (
    <article
      onClick={() => onViewDetails(property)}
      className="group cursor-pointer bg-[#FAF8F5] border border-[#EBE4DC] hover:border-[#B89358]/70 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Minimal status label on image corner - clean text, unboxed or minimal badge */}
          <div className="absolute top-3 left-3 bg-[#141414]/85 backdrop-blur-xs px-2.5 py-1 text-[11px] tracking-wider uppercase text-[#FAF8F5]">
            {property.status}
          </div>

          <div className="absolute bottom-3 right-3 bg-[#141414]/90 backdrop-blur-xs px-3 py-1 text-xs font-serif text-[#D4B580]">
            {property.price}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 space-y-3">
          {/* Location & Category kicker */}
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 uppercase tracking-widest font-sans">
            <MapPin className="w-3.5 h-3.5 text-[#B89358] shrink-0" />
            <span>{property.location}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-2xl font-normal text-[#141414] group-hover:text-[#B89358] transition-colors leading-snug">
            {property.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
            {property.description}
          </p>

          {/* Unboxed Metadata Specs with clean typographic separators (Zero-pill discipline) */}
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-neutral-500 border-t border-[#EBE4DC]/80">
            {property.bedrooms && (
              <span>{property.bedrooms} Beds</span>
            )}
            {property.bathrooms && (
              <>
                <span aria-hidden="true" className="text-neutral-300">·</span>
                <span>{property.bathrooms} Baths</span>
              </>
            )}
            {property.sqft && (
              <>
                <span aria-hidden="true" className="text-neutral-300">·</span>
                <span>{property.sqft}</span>
              </>
            )}
            {property.landSize && (
              <>
                <span aria-hidden="true" className="text-neutral-300">·</span>
                <span>{property.landSize}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Card Actions & Demo Notice */}
      <div className="px-6 pb-6 pt-2 border-t border-[#EBE4DC]/60 space-y-3">
        {/* Subtle Demo Notice */}
        <p className="text-[10px] text-neutral-400 italic">
          {property.demoNotice}
        </p>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleBookViewing}
            className="w-full py-2.5 px-2 bg-[#141414] text-[#FAF8F5] text-[11px] uppercase tracking-wider hover:bg-[#B89358] hover:text-[#141414] transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Book Viewing</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>

          <button
            type="button"
            onClick={handleWhatsAppInquiry}
            className="w-full py-2.5 px-2 border border-[#DFD5C8] text-[#141414] text-[11px] uppercase tracking-wider hover:bg-[#EBE4DC] transition-colors flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-3 h-3 text-[#25D366]" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </article>
  );
};
