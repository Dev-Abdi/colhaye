import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { X, CheckCircle2, Phone, Mail, Link as LinkIcon, Settings } from 'lucide-react';

export const SettingsModal: React.FC = () => {
  const { isSettingsOpen, setIsSettingsOpen, config, updateConfig } = useBrand();

  const [whatsappNumber, setWhatsappNumber] = useState(config.whatsappNumber);
  const [whatsappFormatted, setWhatsappFormatted] = useState(config.whatsappFormatted);
  const [email, setEmail] = useState(config.email);
  const [tiktokUrl, setTiktokUrl] = useState(config.tiktokUrl);
  const [facebookUrl, setFacebookUrl] = useState(config.facebookUrl);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isSettingsOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateConfig({
      whatsappNumber: whatsappNumber.replace(/[^0-9]/g, ''),
      whatsappFormatted,
      email,
      tiktokUrl,
      facebookUrl,
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsSettingsOpen(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-[#FAF8F5] text-[#141414] max-w-lg w-full border border-[#DFD5C8] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-[#EBE4DC] flex items-center justify-between bg-[#F4EFEB]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#141414] text-[#FAF8F5] flex items-center justify-center">
              <Settings className="w-4 h-4 text-[#D4B580]" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-[#141414]">Site Settings & Contact</h3>
              <p className="text-xs text-neutral-500">
                Update Kenyan phone number and direct coordinates
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsSettingsOpen(false)}
            className="p-2 text-neutral-500 hover:text-[#141414] transition-colors"
            aria-label="Close settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 sm:p-8 space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 font-semibold mb-1">
              WhatsApp Clean Digits (For wa.me link)
            </label>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="254700000000"
                className="flex-1 p-2.5 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
              />
            </div>
            <p className="text-[10px] text-neutral-400 mt-1">
              Enter international format without '+' or spaces, e.g. 254712345678
            </p>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 font-semibold mb-1">
              Formatted Display Phone
            </label>
            <input
              type="text"
              value={whatsappFormatted}
              onChange={(e) => setWhatsappFormatted(e.target.value)}
              placeholder="+254 700 000 000"
              className="w-full p-2.5 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 font-semibold mb-1">
              Official Email
            </label>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-neutral-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contact@colyahe.com"
                className="flex-1 p-2.5 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 font-semibold mb-1">
              TikTok Profile URL
            </label>
            <div className="flex items-center gap-2">
              <LinkIcon className="w-4 h-4 text-neutral-400" />
              <input
                type="url"
                value={tiktokUrl}
                onChange={(e) => setTiktokUrl(e.target.value)}
                placeholder="https://www.tiktok.com/@idleomarhusein"
                className="flex-1 p-2.5 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 font-semibold mb-1">
              Facebook Profile URL
            </label>
            <div className="flex items-center gap-2">
              <LinkIcon className="w-4 h-4 text-neutral-400" />
              <input
                type="url"
                value={facebookUrl}
                onChange={(e) => setFacebookUrl(e.target.value)}
                placeholder="https://www.facebook.com/..."
                className="flex-1 p-2.5 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
              />
            </div>
          </div>

          {savedSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Settings updated successfully!</span>
            </div>
          )}

          <div className="pt-4 border-t border-[#EBE4DC] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsSettingsOpen(false)}
              className="px-4 py-2 border border-[#DFD5C8] text-xs uppercase tracking-wider text-neutral-600 hover:bg-[#EBE4DC]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#141414] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold hover:bg-[#B89358] hover:text-[#141414] transition-colors"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
