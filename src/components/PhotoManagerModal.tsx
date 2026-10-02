import React, { useRef, useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { X, Upload, Camera, Trash2, CheckCircle2, Info } from 'lucide-react';
import { UserUploadedImages } from '../types';

export const PhotoManagerModal: React.FC = () => {
  const { isPhotoManagerOpen, setIsPhotoManagerOpen, images, setImage, resetImages } = useBrand();
  const [activeSlot, setActiveSlot] = useState<keyof UserUploadedImages>('heroPortrait');
  const [urlInput, setUrlInput] = useState('');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isPhotoManagerOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      setImage(activeSlot, dataUrl);
      setSuccessMessage(`Photograph successfully assigned to ${slotLabels[activeSlot]}!`);
      setTimeout(() => setSuccessMessage(null), 3000);
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;
    setImage(activeSlot, urlInput.trim());
    setUrlInput('');
    setSuccessMessage(`Image URL assigned to ${slotLabels[activeSlot]}!`);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleRemovePhoto = (slot: keyof UserUploadedImages) => {
    setImage(slot, null);
    setSuccessMessage(`Cleared photo for ${slotLabels[slot]}`);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const slotLabels: Record<keyof UserUploadedImages, string> = {
    heroPortrait: 'Hero Primary Portrait',
    aboutPortrait: 'About / Story Portrait',
    fieldPortrait: 'Field & Media Photo',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-[#FAF8F5] text-[#141414] max-w-2xl w-full border border-[#DFD5C8] shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#EBE4DC] flex items-center justify-between bg-[#F4EFEB]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#141414] text-[#FAF8F5] flex items-center justify-center">
              <Camera className="w-4 h-4 text-[#D4B580]" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-[#141414]">Photo Manager</h3>
              <p className="text-xs text-neutral-500">
                Upload or change real photographs of Idle Omar Hussein (Colyahe)
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsPhotoManagerOpen(false)}
            className="p-2 text-neutral-500 hover:text-[#141414] hover:bg-[#EBE4DC] transition-colors"
            aria-label="Close photo manager"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="p-3.5 bg-[#FAF8F5] border border-[#EBE4DC] flex items-start gap-2.5 text-xs text-neutral-600">
            <Info className="w-4 h-4 text-[#B89358] shrink-0 mt-0.5" />
            <span>
              Your uploaded images will immediately populate the website and be preserved in your browser. No AI portraits are generated.
            </span>
          </div>

          {/* Slot Tabs */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-700 font-medium mb-2">
              Select Placement Slot:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {(Object.keys(slotLabels) as Array<keyof UserUploadedImages>).map((slot) => {
                const isSelected = activeSlot === slot;
                const hasImage = Boolean(images[slot]);
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setActiveSlot(slot)}
                    className={`p-3 text-left border transition-all ${
                      isSelected
                        ? 'bg-[#141414] text-[#FAF8F5] border-[#141414]'
                        : 'bg-[#F4EFEB] text-neutral-700 border-[#DFD5C8] hover:border-neutral-400'
                    }`}
                  >
                    <div className="text-xs font-semibold">{slotLabels[slot]}</div>
                    <div className="text-[10px] mt-1 opacity-70">
                      {hasImage ? '✓ Photo Active' : 'Slot Empty'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Preview of Current Slot */}
          <div className="border border-[#DFD5C8] p-4 bg-[#F4EFEB] flex flex-col sm:flex-row items-center gap-6">
            <div className="w-28 h-36 bg-neutral-200 overflow-hidden shrink-0 border border-neutral-300 flex items-center justify-center">
              {images[activeSlot] ? (
                <img
                  src={images[activeSlot]!}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-2">
                  <Camera className="w-6 h-6 text-neutral-400 mx-auto mb-1" />
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Empty</span>
                </div>
              )}
            </div>

            <div className="flex-1 space-y-2 text-center sm:text-left">
              <h4 className="font-serif text-lg text-[#141414]">{slotLabels[activeSlot]}</h4>
              <p className="text-xs text-neutral-500">
                {images[activeSlot]
                  ? 'Real photograph is actively rendered in this section.'
                  : 'Currently showing refined editorial placeholder frame.'}
              </p>

              {images[activeSlot] && (
                <button
                  type="button"
                  onClick={() => handleRemovePhoto(activeSlot)}
                  className="inline-flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 pt-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Remove this photo</span>
                </button>
              )}
            </div>
          </div>

          {/* Upload Method 1: File Upload */}
          <div className="space-y-3">
            <span className="block text-xs uppercase tracking-wider text-neutral-700 font-semibold">
              Option 1: Upload Image File from your device
            </span>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full py-4 px-4 border-2 border-dashed border-[#B89358] bg-[#FAF8F5] hover:bg-[#F4EFEB] text-xs uppercase tracking-wider font-semibold text-[#141414] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Upload className="w-4 h-4 text-[#B89358]" />
              <span>Choose Photo for {slotLabels[activeSlot]}</span>
            </button>
          </div>

          {/* Upload Method 2: Image URL */}
          <div className="space-y-3 pt-2 border-t border-[#EBE4DC]">
            <span className="block text-xs uppercase tracking-wider text-neutral-700 font-semibold">
              Option 2: Paste Direct Image Web Address (URL)
            </span>
            <form onSubmit={handleUrlSubmit} className="flex gap-2">
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://example.com/idle-omar.jpg"
                className="flex-1 p-2.5 bg-[#FAF8F5] border border-[#DFD5C8] text-xs text-[#141414] focus:outline-none focus:border-[#B89358]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#141414] text-[#FAF8F5] text-xs uppercase tracking-wider font-medium hover:bg-[#B89358] hover:text-[#141414] transition-colors"
              >
                Apply
              </button>
            </form>
          </div>

          {/* Feedback message */}
          {successMessage && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F4EFEB] border-t border-[#DFD5C8] flex items-center justify-between">
          <button
            type="button"
            onClick={resetImages}
            className="text-xs text-neutral-500 hover:text-red-600 transition-colors"
          >
            Reset All Photos
          </button>

          <button
            type="button"
            onClick={() => setIsPhotoManagerOpen(false)}
            className="px-6 py-2 bg-[#141414] text-[#FAF8F5] text-xs uppercase tracking-wider font-medium hover:bg-[#B89358] hover:text-[#141414] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
