import React from 'react';
import { SERVICE_PILLARS } from '../data/content';
import { ServicePillar } from '../types';
import { useBrand } from '../context/BrandContext';
import { ArrowRight, Check } from 'lucide-react';

export const WorkWithMe: React.FC = () => {
  const { openInquiry } = useBrand();

  const handleServiceInquiry = (service: ServicePillar) => {
    openInquiry(
      'collaboration',
      `Partnership: ${service.title}`,
      `Selected Pillar: ${service.number} - ${service.title} (${service.subtitle})`
    );
  };

  return (
    <section id="work-with-me" className="py-24 sm:py-32 bg-[#F4EFEB] text-[#141414] border-t border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DFD5C8] pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89358] font-medium font-sans">
              Strategic Collaboration
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.01em] font-normal text-[#141414]">
              WORK WITH COLYAHE
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-neutral-600">
              Four focused pillars of real estate representation, media influence, and community impact.
            </p>
          </div>

          <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
            Collaborating with verified property owners, developers, purposeful brands, and community donors across East Africa.
          </p>
        </div>

        {/* 4 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#FAF8F5] p-8 border border-[#EBE4DC] hover:border-[#B89358] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-baseline justify-between border-b border-[#EBE4DC] pb-4">
                  <span className="font-serif text-3xl text-[#B89358] font-light">
                    {pillar.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400">
                    Pillar
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#141414] group-hover:text-[#B89358] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#B89358] mt-1 font-medium">
                    {pillar.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                  {pillar.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 block">
                    Scope of Collaboration:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-700">
                    {pillar.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B89358] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 text-xs text-neutral-500 italic">
                  <span className="font-medium text-[#141414]">Ideal for:</span> {pillar.idealFor}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[#EBE4DC]">
                <button
                  onClick={() => handleServiceInquiry(pillar)}
                  className="w-full py-3 px-4 bg-[#141414] text-[#FAF8F5] group-hover:bg-[#B89358] group-hover:text-[#141414] text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
