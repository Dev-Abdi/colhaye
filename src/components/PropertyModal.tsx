import React, { useState } from 'react';
import { Property } from '../types';
import { useBrand } from '../context/BrandContext';
import { X, MapPin, Check, MessageCircle, Calendar, Send, ShieldCheck } from 'lucide-react';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
  const { generateWhatsAppLink, config } = useBrand();
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadMessage, setLeadMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!property) return null;

  const handleWhatsAppDirect = () => {
    const msg = `Hello Idle Omar (Colhaye), I am interested in "${property.title}" located in ${property.location} (Listed at ${property.price}). Could you provide detailed floor plans, viewing schedule, and availability?`;
    window.open(generateWhatsAppLink(msg), '_blank');
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadPhone) return;

    // Direct WhatsApp hand-off prefilled with user's details for real-world lead conversion
    const fullLeadMsg = `Viewing Inquiry for "${property.title}" (${property.location})\nName: ${leadName}\nPhone: ${leadPhone}\nNotes: ${leadMessage || 'Please arrange a private viewing.'}`;
    window.open(generateWhatsAppLink(fullLeadMsg), '_blank');
    setFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div className="relative bg-[#FAF8F5] text-[#141414] max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-[#DFD5C8] shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#141414] text-[#FAF8F5] hover:bg-[#B89358] hover:text-[#141414] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative h-64 sm:h-96 w-full overflow-hidden bg-neutral-900">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-[#FAF8F5]">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4B580] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{property.location}</span>
                <span aria-hidden="true">·</span>
                <span>{property.neighborhood}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#FAF8F5]">
                {property.title}
              </h2>
            </div>
            <div className="font-serif text-2xl sm:text-3xl text-[#D4B580]">
              {property.price}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Key Specifications (Unboxed zero-pill layout) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#EBE4DC] text-center sm:text-left">
            {property.bedrooms && (
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-neutral-400">Bedrooms</span>
                <span className="font-serif text-xl sm:text-2xl text-[#141414]">{property.bedrooms} En-Suite</span>
              </div>
            )}
            {property.bathrooms && (
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-neutral-400">Bathrooms</span>
                <span className="font-serif text-xl sm:text-2xl text-[#141414]">{property.bathrooms} Baths</span>
              </div>
            )}
            {property.sqft && (
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-neutral-400">Total Area</span>
                <span className="font-serif text-xl sm:text-2xl text-[#141414]">{property.sqft}</span>
              </div>
            )}
            {property.landSize && (
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-neutral-400">Parcel Size</span>
                <span className="font-serif text-xl sm:text-2xl text-[#141414]">{property.landSize}</span>
              </div>
            )}
          </div>

          {/* Description & Features */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-serif text-2xl text-[#141414] mb-3">About The Property</h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-sans">
                  {property.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#B89358] font-semibold mb-3">
                  Highlights & Key Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                  {property.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#B89358] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#F4EFEB] border border-[#EBE4DC] space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#141414] font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#B89358]" />
                  <span>Colhaye Verification Guarantee</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Every property presented by Idle Omar Hussein undergoes thorough title verification, ownership vetting, and municipal zoning compliance reviews prior to promotion.
                </p>
              </div>
            </div>

            {/* Right Column: Lead Inquiries & WhatsApp */}
            <div className="lg:col-span-5 bg-[#F4EFEB] p-6 border border-[#DFD5C8] space-y-6">
              <div className="border-b border-[#DFD5C8] pb-4">
                <h3 className="font-serif text-xl text-[#141414]">Inquire With Colhaye</h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Connect directly with Idle Omar Hussein for private viewings and offer negotiations.
                </p>
              </div>

              {/* Direct WhatsApp Action */}
              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-3 px-4 bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Colhaye Directly</span>
              </button>

              <div className="text-center">
                <span className="text-[11px] uppercase tracking-widest text-neutral-400">or submit viewing details</span>
              </div>

              {/* Lead Form */}
              <form onSubmit={handleLeadSubmit} className="space-y-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="e.g. Amina Hassan"
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="e.g. +254 712 345 678"
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">
                    Preferred Date & Notes
                  </label>
                  <textarea
                    rows={2}
                    value={leadMessage}
                    onChange={(e) => setLeadMessage(e.target.value)}
                    placeholder="Interested in weekend viewing or financing options..."
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#141414] text-[#FAF8F5] text-xs uppercase tracking-[0.16em] hover:bg-[#B89358] hover:text-[#141414] transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Private Viewing</span>
                </button>
              </form>

              {formSubmitted && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 text-center">
                  Viewing request opened via WhatsApp. Idle Omar will respond shortly!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
