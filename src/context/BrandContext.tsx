import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteConfig, UserUploadedImages, Property, SadaqaCampaign, MediaItem } from '../types';
import { SITE_CONFIG, PROPERTIES_SHOWCASE, SADAQA_CAMPAIGNS } from '../data/content';

interface BrandContextType {
  config: SiteConfig;
  updateConfig: (newConfig: Partial<SiteConfig>) => void;
  images: UserUploadedImages;
  setImage: (slot: keyof UserUploadedImages, dataUrl: string | null) => void;
  resetImages: () => void;
  campaignImages: Record<string, string>;
  setCampaignImage: (campaignId: string, dataUrl: string) => void;
  // Modals & Navigation state
  activeView: 'home' | 'about' | 'real-estate' | 'sadaqa' | 'media' | 'work' | 'contact';
  setActiveView: (view: 'home' | 'about' | 'real-estate' | 'sadaqa' | 'media' | 'work' | 'contact') => void;
  selectedProperty: Property | null;
  setSelectedProperty: (prop: Property | null) => void;
  selectedCampaign: SadaqaCampaign | null;
  setSelectedCampaign: (campaign: SadaqaCampaign | null) => void;
  selectedMedia: MediaItem | null;
  setSelectedMedia: (media: MediaItem | null) => void;
  isPhotoManagerOpen: boolean;
  setIsPhotoManagerOpen: (open: boolean) => void;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
  isInquiryModalOpen: boolean;
  setIsInquiryModalOpen: (open: boolean) => void;
  inquiryContext: {
    type: 'property' | 'sadaqa' | 'collaboration' | 'general';
    title?: string;
    details?: string;
  };
  openInquiry: (type: 'property' | 'sadaqa' | 'collaboration' | 'general', title?: string, details?: string) => void;
  generateWhatsAppLink: (customMessage?: string) => string;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

const STORAGE_KEY_IMAGES = 'colhaye_brand_uploaded_images';
const STORAGE_KEY_CONFIG = 'colhaye_site_config';
const STORAGE_KEY_CAMPAIGN_IMAGES = 'colhaye_campaign_images';

export const BrandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CONFIG);
      if (saved) return { ...SITE_CONFIG, ...JSON.parse(saved) };
    } catch (e) {
      console.warn('Failed to parse site config from storage', e);
    }
    return SITE_CONFIG;
  });

  const defaultImage = `${import.meta.env.BASE_URL}image.png`;

  const [images] = useState<UserUploadedImages>({
    heroPortrait: defaultImage,
    aboutPortrait: defaultImage,
    fieldPortrait: null,
  });

  const [campaignImages] = useState<Record<string, string>>({});

  const [activeView, setActiveView] = useState<'home' | 'about' | 'real-estate' | 'sadaqa' | 'media' | 'work' | 'contact'>('home');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<SadaqaCampaign | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isPhotoManagerOpen, setIsPhotoManagerOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquiryContext, setInquiryContext] = useState<{
    type: 'property' | 'sadaqa' | 'collaboration' | 'general';
    title?: string;
    details?: string;
  }>({ type: 'general' });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(config));
    } catch (e) {
      console.warn('Could not save config to localStorage', e);
    }
  }, [config]);

  const updateConfig = (newConfig: Partial<SiteConfig>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  };

  const setImage = () => {
    // Images are officially locked and immutable
  };

  const setCampaignImage = () => {
    // Campaign images are officially locked and immutable
  };

  const resetImages = () => {
    // No-op - official portraits preserved
  };

  const openInquiry = (
    type: 'property' | 'sadaqa' | 'collaboration' | 'general',
    title?: string,
    details?: string
  ) => {
    setInquiryContext({ type, title, details });
    setIsInquiryModalOpen(true);
  };

  const generateWhatsAppLink = (customMessage?: string) => {
    const defaultMsg = `Hello Idle Omar (Colhaye), I am reaching out through your official personal brand website.`;
    const message = customMessage || defaultMsg;
    return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <BrandContext.Provider
      value={{
        config,
        updateConfig,
        images,
        setImage,
        resetImages,
        campaignImages,
        setCampaignImage,
        activeView,
        setActiveView,
        selectedProperty,
        setSelectedProperty,
        selectedCampaign,
        setSelectedCampaign,
        selectedMedia,
        setSelectedMedia,
        isPhotoManagerOpen,
        setIsPhotoManagerOpen,
        isSettingsOpen,
        setIsSettingsOpen,
        isInquiryModalOpen,
        setIsInquiryModalOpen,
        inquiryContext,
        openInquiry,
        generateWhatsAppLink,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
};
