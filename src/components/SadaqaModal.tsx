import React, { useState } from 'react';
import { SadaqaCampaign } from '../types';
import { useBrand } from '../context/BrandContext';
import { X, ShieldCheck, Heart, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';

interface SadaqaModalProps {
  campaign: SadaqaCampaign | null;
  onClose: () => void;
}

export const SadaqaModal: React.FC<SadaqaModalProps> = ({ campaign, onClose }) => {
  const { generateWhatsAppLink, config } = useBrand();
  const [supporterName, setSupporterName] = useState('');
  const [pledgeAmount, setPledgeAmount] = useState('');
  const [supportType, setSupportType] = useState<'financial' | 'in-kind' | 'corporate'>('financial');
  const [submitted, setSubmitted] = useState(false);

  if (!campaign) return null;

  const currentImage = campaign.imageUrl;

  const progress = Math.min(
    100,
    Math.round((campaign.raisedAmountKes / campaign.targetAmountKes) * 100)
  );

  const handleWhatsAppSupport = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Assalamu Alaikum / Hello Idle Omar (Colhaye),\nI would like to support the Sadaqa initiative: "${campaign.title}" (${campaign.categoryLabel} in ${campaign.location}).\nName: ${supporterName || 'Anonymous Supporter'}\nPledge/Contribution: KES ${pledgeAmount || 'Direct Support'}\nSupport Type: ${supportType}.\nPlease provide verified bank/M-Pesa details and ongoing distribution reporting.`;
    window.open(generateWhatsAppLink(msg), '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div className="relative bg-[#FAF8F5] text-[#141414] max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-[#DFD5C8] shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-[#141414] text-[#FAF8F5] hover:bg-[#B89358] hover:text-[#141414] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-900">
          <img
            src={currentImage}
            alt={campaign.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F5] space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#D4B580]">
              {campaign.categoryLabel} · {campaign.location}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5]">
              {campaign.title}
            </h2>
            {campaign.inscription && (
              <div className="p-2.5 bg-black/80 backdrop-blur-xs border-l-2 border-[#D4B580] max-w-xl">
                <span className="text-[9px] uppercase tracking-widest text-[#D4B580] block">
                  Official Inscription / Plaque:
                </span>
                <p className="font-serif text-sm text-white italic">
                  "{campaign.inscription}"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Progress Breakdown */}
          <div className="p-4 bg-[#F4EFEB] border border-[#EBE4DC] space-y-2">
            <div className="flex items-center justify-between text-xs text-neutral-600 font-medium">
              <span>Raised: KES {campaign.raisedAmountKes.toLocaleString()}</span>
              <span className="font-serif text-base text-[#141414] font-semibold">{progress}% Complete</span>
            </div>
            <div className="w-full h-2 bg-[#DFD5C8] overflow-hidden">
              <div className="h-full bg-[#B89358]" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span>Target: KES {campaign.targetAmountKes.toLocaleString()}</span>
              <span>{campaign.donorsCount} Confirmed Contributions</span>
            </div>
          </div>

          {/* Detailed Need Description */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl text-[#141414]">Cause Overview</h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
              {campaign.detailedNeed}
            </p>
          </div>

          {/* Transparency Architecture */}
          <div className="p-4 bg-[#FAF8F5] border border-[#EBE4DC] space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#B89358] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Transparency Architecture</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-600">
              <div className="p-2.5 bg-[#F4EFEB] border border-[#EBE4DC]">
                <span className="block font-medium text-[#141414] mb-1">Fund Routing:</span>
                <span>{campaign.transparencyPillars.distributionType}</span>
              </div>
              <div className="p-2.5 bg-[#F4EFEB] border border-[#EBE4DC]">
                <span className="block font-medium text-[#141414] mb-1">Audit Cadence:</span>
                <span>{campaign.transparencyPillars.reportingCycle}</span>
              </div>
              <div className="p-2.5 bg-[#F4EFEB] border border-[#EBE4DC]">
                <span className="block font-medium text-[#141414] mb-1">Case Vetting:</span>
                <span>{campaign.transparencyPillars.beneficiaryVerification}</span>
              </div>
            </div>
          </div>

          {/* Action / Pledge Form */}
          <form onSubmit={handleWhatsAppSupport} className="p-6 bg-[#F4EFEB] border border-[#DFD5C8] space-y-4">
            <div className="border-b border-[#DFD5C8] pb-3">
              <h4 className="font-serif text-lg text-[#141414]">Direct Support & Verification Inquiry</h4>
              <p className="text-xs text-neutral-500">
                Contributions are coordinated with direct recipient verification. Connect with Idle Omar on WhatsApp to receive the verified campaign ledger and distribution schedule.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  value={supporterName}
                  onChange={(e) => setSupporterName(e.target.value)}
                  placeholder="Anonymous or Your Name"
                  className="w-full p-2.5 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">
                  Pledge Amount (KES)
                </label>
                <input
                  type="text"
                  value={pledgeAmount}
                  onChange={(e) => setPledgeAmount(e.target.value)}
                  placeholder="e.g. 10,000"
                  className="w-full p-2.5 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-neutral-600 mb-1">
                Support Mechanism
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['financial', 'in-kind', 'corporate'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSupportType(type)}
                    className={`p-2 text-xs capitalize text-center border transition-all ${
                      supportType === type
                        ? 'bg-[#141414] text-[#FAF8F5] border-[#141414]'
                        : 'bg-[#FAF8F5] text-neutral-700 border-[#DFD5C8]'
                    }`}
                  >
                    {type === 'financial' ? 'Cash/M-Pesa' : type === 'in-kind' ? 'In-Kind Supplies' : 'Corporate CSR'}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp for Verified Donation</span>
            </button>

            {submitted && (
              <p className="text-xs text-emerald-700 text-center font-medium">
                Opening WhatsApp inquiry directly to Idle Omar Hussein.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
