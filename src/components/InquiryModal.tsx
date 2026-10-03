import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { X, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export const InquiryModal: React.FC = () => {
  const { isInquiryModalOpen, setIsInquiryModalOpen, inquiryContext, generateWhatsAppLink } = useBrand();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [sent, setSent] = useState(false);

  if (!isInquiryModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const formattedMsg = `Inquiry with Idle Omar Hussein (Colhaye)\nSubject: ${inquiryContext.title || 'General Connection'}\nContext: ${inquiryContext.details || ''}\nFrom: ${name}\nPhone: ${phone}\nEmail: ${email || 'None'}\nMessage: ${notes || 'Looking forward to speaking with you.'}`;
    window.open(generateWhatsAppLink(formattedMsg), '_blank');
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setIsInquiryModalOpen(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-[#FAF8F5] text-[#141414] max-w-lg w-full border border-[#DFD5C8] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#EBE4DC] flex items-center justify-between bg-[#F4EFEB]">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#B89358] font-semibold">
              Direct Inquiry
            </span>
            <h3 className="font-serif text-2xl text-[#141414] mt-0.5">
              {inquiryContext.title || "Let's Connect"}
            </h3>
          </div>

          <button
            onClick={() => setIsInquiryModalOpen(false)}
            className="p-2 text-neutral-500 hover:text-[#141414] transition-colors"
            aria-label="Close inquiry dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
          {inquiryContext.details && (
            <div className="p-3 bg-[#FAF8F5] border border-[#EBE4DC] text-xs text-neutral-600">
              <span className="font-medium text-[#141414]">Reference: </span>
              {inquiryContext.details}
            </div>
          )}

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 font-semibold mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Fatima Ali"
              className="w-full p-2.5 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 font-semibold mb-1">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +254 712 345 678"
              className="w-full p-2.5 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 font-semibold mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. fatima@example.com"
              className="w-full p-2.5 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 font-semibold mb-1">
              Message or Specific Requirement
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tell Idle Omar what you have in mind..."
              className="w-full p-2.5 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 bg-[#141414] text-[#FAF8F5] hover:bg-[#B89358] hover:text-[#141414] text-xs uppercase tracking-[0.16em] font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Connect via WhatsApp Now</span>
            </button>
          </div>

          {sent && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Redirecting to WhatsApp to send message...</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
