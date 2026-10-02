import React, { useRef, useState } from 'react';
import { SADAQA_CAMPAIGNS } from '../data/content';
import { SadaqaCampaign } from '../types';
import { useBrand } from '../context/BrandContext';
import {
  Heart,
  Shield,
  CheckCircle,
  Eye,
  FileText,
  Users,
  Camera,
  Upload,
  MapPin,
  Sparkles,
  Droplets,
  Check,
} from 'lucide-react';

export const SadaqaSection: React.FC = () => {
  const { setSelectedCampaign, openInquiry, campaignImages, setCampaignImage } = useBrand();
  const [selectedFieldPhotoIndex, setSelectedFieldPhotoIndex] = useState(0);
  const [activeUploadCampaignId, setActiveUploadCampaignId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fieldSpotlights = [
    {
      id: 'sadaqa-water-1',
      title: 'Mama Aisha Yussuf Well & Livestock Trough',
      location: 'Northern / Pastoral Kenya',
      artifactName: 'baab188a-26b5-4ccc-b551-4dc7ecd74f0f.jpg',
      caption: 'Circular well painted cobalt blue with security iron grate cover and attached livestock trough for community goats and camels.',
      inscription: 'Mama Aisha yussuf',
      status: 'Active & Supplying Water',
      accentColor: '#1E40AF',
      beneficiaries: 'Pastoral families & livestock herds',
    },
    {
      id: 'sadaqa-water-2',
      title: 'Community Elder Water Retrieval & Protection Point',
      location: 'Wajir County, Kenya',
      artifactName: 'a26be108-bbd9-417b-a4dd-87510937b5e0.jpg',
      caption: 'Local elder in traditional kofia and macawiis accessing the sanitary blue well via the protective iron gate mechanism.',
      inscription: 'Wajir Elder Access Protocol',
      status: 'Sanitary Groundwater Verified',
      accentColor: '#0284C7',
      beneficiaries: 'Local elders, mothers & households',
    },
    {
      id: 'sadaqa-water-3',
      title: 'Waqf-Sadaqo Jaariyah Memorial Well (Wajir)',
      location: 'Wajir, Kenya',
      artifactName: 'e24aca9d-141e-4de8-b87a-d47c9b3f92b5.jpg',
      caption: 'Permanent concrete well with open hatch and engraved dedication memorial plaque: Maxamed Axmed Fahiye iyo Asli Axmed Saalax (15.8.2026, Wajir).',
      inscription: 'WAQF-SADAQO JAARIYAH — MAXAMED AXMED FAHIYE IYO ASLI AXMED SAALAX — 15.8.2026 — WAJIR',
      status: 'Permanent Waqf Inscribed',
      accentColor: '#D97706',
      beneficiaries: 'Hundreds of daily pastoralists',
    },
  ];

  const handleSupportClick = (campaign: SadaqaCampaign) => {
    setSelectedCampaign(campaign);
  };

  const handleProposeCase = () => {
    openInquiry(
      'sadaqa',
      'Propose a Community Case / Sadaqa Need',
      'Share details of a family, patient, school, or community project needing urgent assistance.'
    );
  };

  const triggerUploadForCampaign = (campaignId: string) => {
    setActiveUploadCampaignId(campaignId);
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !activeUploadCampaignId) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      setCampaignImage(activeUploadCampaignId, dataUrl);
      setActiveUploadCampaignId(null);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section id="sadaqa-section" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#141414]">
      {/* Hidden file input for quick direct campaign image upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B89358]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89358] font-medium font-sans">
              Community Advocacy & Impact
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.01em] font-normal text-[#141414]">
            SADAQA
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-neutral-700 leading-relaxed font-light">
            "Give with purpose. Support with impact."
          </p>

          <p className="text-sm text-neutral-600 leading-relaxed font-sans max-w-2xl">
            Sadaqa is not an afterthought in Idle Omar Hussein's brand—it is the central moral compass. This platform provides transparent visibility into grassroots community initiatives across Kenya, specifically bringing clean water wells, supporting pastoralists in Wajir, and establishing perpetual Waqf Jariyah.
          </p>
        </div>

        {/* FEATURED: Verified Field Projects & Photographic Evidence Showcase */}
        <div className="bg-[#F4EFEB] border border-[#DFD5C8] p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#DFD5C8] pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B89358] font-semibold mb-1">
                <Droplets className="w-4 h-4" />
                <span>Verified Field Documentation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#141414]">
                Clean Water Wells & Waqf Jariyah in Northern Kenya
              </h3>
            </div>
            <p className="text-xs text-neutral-500 max-w-sm">
              Direct photographic documentation from completed water well projects in Wajir and pastoral communities.
            </p>
          </div>

          {/* Quick Direct 3-Photo Placement Bar */}
          <div className="bg-[#FAF8F5] p-5 border border-[#DFD5C8] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#141414] flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#B89358]" />
                <span>Active Field Photographs (3 Projects Uploaded)</span>
              </span>
              <span className="text-[11px] text-neutral-500">
                Click any slot below to load or change the photo from your device
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {fieldSpotlights.map((spot, i) => {
                const hasImg = Boolean(campaignImages[spot.id]);
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => triggerUploadForCampaign(spot.id)}
                    className={`p-3 text-left border transition-all flex items-center gap-3 ${
                      hasImg
                        ? 'bg-emerald-50/60 border-emerald-300'
                        : 'bg-[#F4EFEB] border-[#DFD5C8] hover:border-[#B89358]'
                    }`}
                  >
                    <div className="w-12 h-14 bg-neutral-200 border border-neutral-300 overflow-hidden shrink-0 flex items-center justify-center">
                      {hasImg ? (
                        <img
                          src={campaignImages[spot.id]}
                          alt={spot.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Upload className="w-4 h-4 text-[#B89358]" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-bold text-[#B89358]">Photo 0{i + 1}</span>
                        {hasImg ? (
                          <span className="text-[9px] uppercase font-semibold text-emerald-700 bg-emerald-100 px-1.5 py-0.2">Active</span>
                        ) : (
                          <span className="text-[9px] uppercase text-neutral-400">Click to place</span>
                        )}
                      </div>
                      <p className="text-xs font-serif text-[#141414] truncate font-medium mt-0.5">
                        {spot.title}
                      </p>
                      <p className="text-[10px] text-neutral-500 truncate">
                        {spot.inscription || spot.location}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive 3-Photo Field Navigator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Tab Selectors for the 3 Uploaded Photos */}
            <div className="lg:col-span-4 space-y-3">
              <span className="block text-[11px] uppercase tracking-wider text-neutral-500 font-semibold mb-2">
                Select Documented Water Point:
              </span>
              {fieldSpotlights.map((spotlight, idx) => {
                const isSelected = selectedFieldPhotoIndex === idx;
                return (
                  <button
                    key={spotlight.id}
                    onClick={() => setSelectedFieldPhotoIndex(idx)}
                    className={`w-full text-left p-4 border transition-all ${
                      isSelected
                        ? 'bg-[#141414] text-[#FAF8F5] border-[#141414] shadow-md'
                        : 'bg-[#FAF8F5] text-neutral-700 border-[#DFD5C8] hover:border-neutral-400'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className={isSelected ? 'text-[#D4B580]' : 'text-[#B89358]'}>
                        Photo 0{idx + 1}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider opacity-80">
                        {spotlight.location}
                      </span>
                    </div>
                    <h4 className="font-serif text-base sm:text-lg font-normal leading-snug">
                      {spotlight.title}
                    </h4>
                    {spotlight.inscription && (
                      <p className={`text-[10px] mt-1 italic ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        "{spotlight.inscription}"
                      </p>
                    )}
                  </button>
                );
              })}

              <div className="pt-2">
                <button
                  onClick={() => triggerUploadForCampaign(fieldSpotlights[selectedFieldPhotoIndex].id)}
                  className="w-full py-2.5 px-3 bg-[#FAF8F5] border border-[#DFD5C8] hover:bg-[#EBE4DC] text-xs uppercase tracking-wider text-neutral-700 flex items-center justify-center gap-2 transition-colors"
                >
                  <Camera className="w-3.5 h-3.5 text-[#B89358]" />
                  <span>Attach / Replace Field Photo</span>
                </button>
              </div>
            </div>

            {/* Right: Active Field Spotlight Frame */}
            <div className="lg:col-span-8 bg-[#141414] text-[#FAF8F5] p-6 sm:p-8 border border-white/10 space-y-6">
              {(() => {
                const current = fieldSpotlights[selectedFieldPhotoIndex];
                const customImage = campaignImages[current.id];

                return (
                  <div>
                    {/* Visual Media Container */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-neutral-900 overflow-hidden border border-white/15">
                      {customImage ? (
                        <img
                          src={customImage}
                          alt={current.title}
                          className="w-full h-full object-cover object-center filter contrast-[1.03]"
                        />
                      ) : (
                        /* Try rendering the uploaded artifact file or the authentic documentary frame */
                        <div className="w-full h-full relative">
                          <img
                            src={current.artifactName}
                            alt={current.title}
                            className="w-full h-full object-cover object-center"
                            onError={(e) => {
                              // If browser cannot reach direct artifact path, hide img and display documentary styling
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />

                          {/* Documentary Card styling */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent p-6 flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                              <span className="bg-[#141414]/80 backdrop-blur-xs px-3 py-1 text-xs text-[#D4B580] tracking-wider uppercase border border-[#B89358]/40">
                                Verified Field Photo 0{selectedFieldPhotoIndex + 1}
                              </span>
                              <span className="bg-[#25D366]/20 text-[#25D366] text-xs px-2.5 py-1 border border-[#25D366]/40 flex items-center gap-1.5">
                                <Check className="w-3 h-3" />
                                <span>{current.status}</span>
                              </span>
                            </div>

                            <div className="space-y-2">
                              {current.inscription && (
                                <div className="p-3 bg-black/75 backdrop-blur-xs border-l-2 border-[#D4B580] max-w-xl">
                                  <span className="text-[10px] uppercase tracking-widest text-[#D4B580] block mb-0.5">
                                    Official Inscription / Plaque:
                                  </span>
                                  <p className="font-serif text-sm sm:text-base text-white tracking-wide">
                                    "{current.inscription}"
                                  </p>
                                </div>
                              )}
                              <p className="text-xs text-neutral-300 max-w-lg">
                                {current.caption}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Corner Location Badge */}
                      <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-xs px-2.5 py-1 text-[11px] text-neutral-300 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-[#D4B580]" />
                        <span>{current.location}</span>
                      </div>
                    </div>

                    {/* Spotlight Details */}
                    <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h4 className="font-serif text-xl sm:text-2xl text-[#FAF8F5]">
                          {current.title}
                        </h4>
                        <p className="text-xs text-neutral-400 mt-1">
                          Beneficiaries: {current.beneficiaries}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => {
                            const found = SADAQA_CAMPAIGNS.find((c) => c.id === current.id);
                            if (found) setSelectedCampaign(found);
                          }}
                          className="px-5 py-2.5 bg-[#FAF8F5] text-[#141414] hover:bg-[#B89358] text-xs uppercase tracking-wider font-semibold transition-colors"
                        >
                          View Transparency Audit
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SADAQA_CAMPAIGNS.map((campaign, idx) => {
            const progress = Math.min(
              100,
              Math.round((campaign.raisedAmountKes / campaign.targetAmountKes) * 100)
            );
            const customImg = campaignImages[campaign.id];

            return (
              <div
                key={campaign.id}
                className="bg-[#FAF8F5] border border-[#EBE4DC] hover:border-[#B89358] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Campaign Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
                    {customImg ? (
                      <img
                        src={customImg}
                        alt={campaign.title}
                        className="w-full h-full object-cover filter contrast-[1.02]"
                      />
                    ) : (
                      <div className="w-full h-full relative">
                        <img
                          src={campaign.imageUrl}
                          alt={campaign.title}
                          className="w-full h-full object-cover filter contrast-[1.02]"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <span className="bg-[#141414]/90 px-3 py-1 text-[11px] uppercase tracking-wider text-[#D4B580] border border-[#B89358]/30">
                              {campaign.categoryLabel}
                            </span>
                            <span className="bg-black/60 text-[#FAF8F5] text-[11px] px-2.5 py-1">
                              {campaign.location}
                            </span>
                          </div>

                          {campaign.inscription && (
                            <div className="p-2.5 bg-black/80 border-l border-[#D4B580] text-left">
                              <span className="text-[9px] uppercase tracking-widest text-[#D4B580] block">
                                Inscribed Plaque / Waqf:
                              </span>
                              <p className="font-serif text-xs sm:text-sm text-white italic truncate">
                                "{campaign.inscription}"
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Quick photo upload button overlay */}
                    <button
                      type="button"
                      onClick={() => triggerUploadForCampaign(campaign.id)}
                      className="absolute top-3 right-3 p-1.5 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors text-xs"
                      title="Upload or change field photograph"
                    >
                      <Camera className="w-3.5 h-3.5 text-[#D4B580]" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-2xl text-[#141414] leading-snug">
                        {campaign.title}
                      </h3>
                      {campaign.status === 'Completed' && (
                        <span className="bg-emerald-50 text-emerald-800 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 border border-emerald-200 shrink-0 mt-1">
                          Completed
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {campaign.summary}
                    </p>

                    {/* Progress Bar & Financial Figures */}
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center justify-between text-xs text-neutral-600 font-medium">
                        <span>Funded: KES {campaign.raisedAmountKes.toLocaleString()}</span>
                        <span className="font-serif text-sm text-[#141414] font-semibold">{progress}%</span>
                      </div>

                      {/* Hairline Progress Track */}
                      <div className="w-full h-1.5 bg-[#EBE4DC] overflow-hidden">
                        <div
                          className="h-full bg-[#B89358] transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-neutral-400">
                        <span>Allocation Target: KES {campaign.targetAmountKes.toLocaleString()}</span>
                        <span>{campaign.donorsCount} Supporters</span>
                      </div>
                    </div>

                    {/* Transparency Pillar Micro-Points */}
                    <div className="pt-3 border-t border-[#EBE4DC] space-y-1.5 text-xs text-neutral-500">
                      <div className="flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5 text-[#B89358] shrink-0" />
                        <span className="truncate">{campaign.transparencyPillars.distributionType}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-3.5 h-3.5 text-[#B89358] shrink-0" />
                        <span className="truncate">{campaign.transparencyPillars.reportingCycle}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action & Notice */}
                <div className="px-6 pb-6 pt-2 border-t border-[#EBE4DC] space-y-3">
                  <p className="text-[10px] text-neutral-400 italic">
                    {campaign.demoNotice}
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleSupportClick(campaign)}
                      className="flex-1 py-3 px-4 bg-[#141414] text-[#FAF8F5] text-xs uppercase tracking-wider font-medium hover:bg-[#B89358] hover:text-[#141414] transition-colors flex items-center justify-center gap-2"
                    >
                      <Heart className="w-3.5 h-3.5 text-[#B89358]" />
                      <span>{campaign.status === 'Completed' ? 'View Impact Report' : 'Support This Cause'}</span>
                    </button>

                    <button
                      onClick={() => handleSupportClick(campaign)}
                      className="py-3 px-3 border border-[#DFD5C8] text-[#141414] hover:bg-[#EBE4DC] text-xs uppercase tracking-wider"
                      title="View Transparency Ledger"
                    >
                      Audit
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sadaqa Trust & Transparency Section */}
        <div className="bg-[#141414] text-[#FAF8F5] p-8 sm:p-12 lg:p-16 space-y-8 relative overflow-hidden">
          <div className="max-w-2xl space-y-3 relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4B580] font-medium font-sans">
              Our Transparency Pledge
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] font-normal">
              Giving With Transparency
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
              Trust in charitable giving cannot be claimed—it must be proven at every step. Colyahe enforces four rigorous transparency pillars across all community water well and welfare appeals:
            </p>
          </div>

          {/* 4 Transparency Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2 relative z-10">
            <div className="p-5 border border-white/10 bg-white/5 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#B89358]/20 flex items-center justify-center text-[#D4B580] mb-3">
                <FileText className="w-4 h-4" />
              </div>
              <h4 className="font-medium text-sm text-[#FAF8F5]">Direct Invoicing & Plaque Engraving</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Well drilling, masonry, iron gate welding, and stone plaques are commissioned with official verifiable records.
              </p>
            </div>

            <div className="p-5 border border-white/10 bg-white/5 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#B89358]/20 flex items-center justify-center text-[#D4B580] mb-3">
                <Eye className="w-4 h-4" />
              </div>
              <h4 className="font-medium text-sm text-[#FAF8F5]">Field Verification</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Every water point is physically visited and tested in the presence of local elders and community pastoralists.
              </p>
            </div>

            <div className="p-5 border border-white/10 bg-white/5 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#B89358]/20 flex items-center justify-center text-[#D4B580] mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="font-medium text-sm text-[#FAF8F5]">Beneficiary Dignity</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Water is freely provided for all community families and animal herds without charge, discrimination, or gatekeeping.
              </p>
            </div>

            <div className="p-5 border border-white/10 bg-white/5 space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#B89358]/20 flex items-center justify-center text-[#D4B580] mb-3">
                <CheckCircle className="w-4 h-4" />
              </div>
              <h4 className="font-medium text-sm text-[#FAF8F5]">Public Impact Reports</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Unfiltered video updates, location coordinates in Wajir, and donor ledger verification are posted openly.
              </p>
            </div>
          </div>

          {/* Callout Action */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <p className="text-xs text-neutral-400">
              Want to sponsor a continuous charity water well (Waqf Jariyah) in Northern Kenya or propose a verified village need?
            </p>
            <button
              onClick={handleProposeCase}
              className="px-6 py-3 bg-[#FAF8F5] text-[#141414] text-xs uppercase tracking-wider font-semibold hover:bg-[#B89358] hover:text-[#141414] transition-colors"
            >
              Propose a Verified Well / Case
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
