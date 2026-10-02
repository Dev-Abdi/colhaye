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

const STORAGE_KEY_IMAGES = 'colyahe_brand_uploaded_images';
const STORAGE_KEY_CONFIG = 'colyahe_site_config';
const STORAGE_KEY_CAMPAIGN_IMAGES = 'colyahe_campaign_images';

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

  const [images, setImages] = useState<UserUploadedImages>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_IMAGES);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          heroPortrait: parsed.heroPortrait || 'image.png',
          aboutPortrait: parsed.aboutPortrait || 'image.png',
          fieldPortrait: parsed.fieldPortrait || null,
        };
      }
    } catch (e) {
      console.warn('Failed to parse images from storage', e);
    }
    return {
      heroPortrait: 'image.png',
      aboutPortrait: 'image.png',
      fieldPortrait: null,
    };
  });

  const [campaignImages, setCampaignImages] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CAMPAIGN_IMAGES);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse campaign images from storage', e);
    }
    return {};
  });

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

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_IMAGES, JSON.stringify(images));
    } catch (e) {
      console.warn('Could not save images to localStorage', e);
    }
  }, [images]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CAMPAIGN_IMAGES, JSON.stringify(campaignImages));
    } catch (e) {
      console.warn('Could not save campaign images to localStorage', e);
    }
  }, [campaignImages]);

  const updateConfig = (newConfig: Partial<SiteConfig>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  };

  const setImage = (slot: keyof UserUploadedImages, dataUrl: string | null) => {
    setImages((prev) => ({ ...prev, [slot]: dataUrl }));
  };

  const setCampaignImage = (campaignId: string, dataUrl: string) => {
    setCampaignImages((prev) => ({ ...prev, [campaignId]: dataUrl }));
  };

  const resetImages = () => {
    const empty = { heroPortrait: null, aboutPortrait: null, fieldPortrait: null };
    setImages(empty);
    setCampaignImages({});
    localStorage.removeItem(STORAGE_KEY_IMAGES);
    localStorage.removeItem(STORAGE_KEY_CAMPAIGN_IMAGES);
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
    const defaultMsg = `Hello Idle Omar (Colyahe), I am reaching out through your official personal brand website.`;
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
