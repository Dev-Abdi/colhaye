import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { MessageCircle, Mail, MapPin, Send, Phone, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { config, generateWhatsAppLink } = useBrand();

  const [inquiryType, setInquiryType] = useState<
    'Real Estate' | 'Property Marketing' | 'Sadaqa / Community' | 'Collaboration' | 'General Inquiry'
  >('Real Estate');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submittedViaClient, setSubmittedViaClient] = useState(false);

  const inquiryOptions = [
    'Real Estate',
    'Property Marketing',
    'Sadaqa / Community',
    'Collaboration',
    'General Inquiry',
  ] as const;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) return;

    // Direct WhatsApp formulation: instant real connection for Kenyan real estate
    const fullMsg = `Official Inquiry via Colyahe Website\nType: ${inquiryType}\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\n\nMessage:\n${message}`;
    window.open(generateWhatsAppLink(fullMsg), '_blank');
    setSubmittedViaClient(true);
  };

  const handleWhatsAppQuickClick = () => {
    const quickMsg = `Hello Idle Omar (Colyahe), I am reaching out to discuss: ${inquiryType}.`;
    window.open(generateWhatsAppLink(quickMsg), '_blank');
  };

  return (
    <section id="contact-section" className="py-24 sm:py-32 bg-[#FAF8F5] text-[#141414] border-t border-[#EBE4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B89358]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89358] font-medium font-sans">
              Direct Representation & Inquiries
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.01em] font-normal text-[#141414]">
            LET'S CONNECT.
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-neutral-600">
            Direct access to Idle Omar Hussein (Colyahe).
          </p>

          <p className="text-sm text-neutral-600 leading-relaxed font-sans max-w-2xl">
            Whether you want to market a premier Nairobi development, view a listed villa, propose a verified community Sadaqa case, or explore a strategic brand partnership, start a direct conversation below.
          </p>
        </div>

        {/* Contact Suite: Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Coordinates & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-[#F4EFEB] border border-[#EBE4DC] space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B89358] font-semibold block">
                Direct Channels
              </span>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#141414] text-[#FAF8F5] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#D4B580]" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-neutral-400">Location Base</span>
                    <span className="font-medium text-sm text-[#141414]">Nairobi, Kenya</span>
                    <p className="text-xs text-neutral-500 mt-0.5">Operating across Karen, Westlands, Kilimani, Runda & beyond</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#141414] text-[#FAF8F5] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#D4B580]" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-neutral-400">Direct Telephone / WhatsApp</span>
                    <a
                      href={`https://wa.me/${config.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-sm text-[#141414] hover:text-[#B89358] transition-colors"
                    >
                      {config.whatsappFormatted}
                    </a>
                    <p className="text-xs text-neutral-500 mt-0.5">Official Kenyan mobile line</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#141414] text-[#FAF8F5] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#D4B580]" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-neutral-400">Email Correspondence</span>
                    <a
                      href={`mailto:${config.email}`}
                      className="font-medium text-sm text-[#141414] hover:text-[#B89358] transition-colors"
                    >
                      {config.email}
                    </a>
                    <p className="text-xs text-neutral-500 mt-0.5">Formal proposals & investor inquiries</p>
                  </div>
                </div>
              </div>

              {/* Fast WhatsApp CTA Card */}
              <div className="pt-4 border-t border-[#DFD5C8] space-y-3">
                <span className="text-xs uppercase tracking-wider text-neutral-600 font-medium block">
                  Fastest Response via WhatsApp:
                </span>
                <button
                  type="button"
                  onClick={handleWhatsAppQuickClick}
                  className="w-full py-3 px-4 bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Colyahe Directly</span>
                </button>
                <p className="text-[11px] text-neutral-400 text-center">
                  Available for phone calls and WhatsApp messages during business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Inquiry Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-8 sm:p-10 border border-[#EBE4DC] space-y-6">
            <div className="border-b border-[#EBE4DC] pb-4">
              <h3 className="font-serif text-2xl text-[#141414]">Send an Inquiry</h3>
              <p className="text-xs text-neutral-500 mt-1">
                Fill out the form below. Your request will open immediately for direct confirmation with Idle Omar Hussein.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Inquiry Type Selector (Segmented buttons adhering to design constitution) */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-700 font-medium mb-2">
                  Select Inquiry Type *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {inquiryOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setInquiryType(opt)}
                      className={`p-2.5 text-xs text-center border transition-all ${
                        inquiryType === opt
                          ? 'bg-[#141414] text-[#FAF8F5] border-[#141414]'
                          : 'bg-[#F4EFEB] text-neutral-700 border-[#DFD5C8] hover:border-[#141414]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-700 font-medium mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Hassan Mohamed"
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-700 font-medium mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +254 712 345 678"
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-700 font-medium mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. hassan@example.com"
                  className="w-full p-3 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-700 font-medium mb-1">
                  Message / Details of Your Inquiry *
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe the property opportunity, partnership idea, or community initiative you would like to discuss..."
                  className="w-full p-3 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
                />
              </div>

              {/* Note on form persistence (Truthful handling per prompt) */}
              <div className="text-[11px] text-neutral-400 italic">
                * Note: Submitting opens a direct communication line via WhatsApp to ensure your message is received immediately and not lost in an unmonitored inbox.
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#141414] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#B89358] hover:text-[#141414] transition-all flex items-center justify-center gap-2"
              >
                <span>Submit & Connect with Colyahe</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              {submittedViaClient && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Your inquiry has been formulated and sent to WhatsApp. Colyahe will follow up shortly!
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
