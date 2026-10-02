import React, { useState } from 'react';
import { Property, PropertyCategory } from '../types';
import { PROPERTIES_SHOWCASE } from '../data/content';
import { PropertyCard } from './PropertyCard';
import { useBrand } from '../context/BrandContext';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';

export const RealEstateSection: React.FC = () => {
  const { setSelectedProperty, setActiveView } = useBrand();
  const [selectedCategory, setSelectedCategory] = useState<PropertyCategory>('all');

  const categories: { label: string; value: PropertyCategory }[] = [
    { label: 'All Opportunities', value: 'all' },
    { label: 'Villas & Mansions', value: 'villas' },
    { label: 'Luxury Apartments', value: 'apartments' },
    { label: 'Prime Land', value: 'land' },
    { label: 'Commercial Spaces', value: 'commercial' },
  ];

  const filteredProperties = selectedCategory === 'all'
    ? PROPERTIES_SHOWCASE
    : PROPERTIES_SHOWCASE.filter((p) => p.category === selectedCategory);

  return (
    <section id="real-estate-section" className="py-24 sm:py-32 bg-[#F4EFEB] text-[#141414] border-t border-b border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DFD5C8] pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89358] font-medium font-sans">
              Property Representation & Marketing
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.01em] font-normal text-[#141414]">
              REAL ESTATE
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-neutral-600">
              Property opportunities across Nairobi and beyond.
            </p>
          </div>

          <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
            Representing premier developments, family estates, and strategic investment land in Karen, Westlands, Kilimani, Runda, and Riverside.
          </p>
        </div>

        {/* Filter Navigation (Interactive button tabs allowed per constitutional guidelines) */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-neutral-400 mr-2 flex items-center gap-1.5 hidden sm:flex">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#B89358]" />
            <span>Filter:</span>
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium transition-all ${
                  isActive
                    ? 'bg-[#141414] text-[#FAF8F5]'
                    : 'bg-[#FAF8F5] text-neutral-700 hover:bg-[#EBE4DC] border border-[#DFD5C8]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onViewDetails={(prop) => setSelectedProperty(prop)}
            />
          ))}
        </div>

        {/* Bottom Banner & Explore All CTA */}
        <div className="pt-8 border-t border-[#DFD5C8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-neutral-500 max-w-md">
            <span className="font-semibold text-[#141414]">Looking for off-market or specific neighborhood inventory?</span>
            <br />
            Idle Omar Hussein provides tailored property reconnaissance for local and diaspora buyers.
          </div>

          <button
            onClick={() => {
              setActiveView('real-estate');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-3 px-6 py-3 bg-[#141414] text-[#FAF8F5] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#B89358] hover:text-[#141414] transition-all"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
