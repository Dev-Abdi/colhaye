export type PropertyCategory = 'all' | 'apartments' | 'villas' | 'land' | 'commercial';

export interface Property {
  id: string;
  title: string;
  category: 'apartments' | 'villas' | 'land' | 'commercial';
  location: string;
  neighborhood: string;
  price: string;
  priceRaw: number;
  currency: string;
  status: 'Available' | 'Under Offer' | 'Exclusive' | 'New Release';
  bedrooms?: number;
  bathrooms?: number;
  sqft?: string;
  landSize?: string;
  description: string;
  features: string[];
  imageUrl: string;
  featured: boolean;
  demoNotice: string;
}

export type SadaqaCategory = 'water' | 'food' | 'medical' | 'education' | 'orphans' | 'emergency';

export interface SadaqaCampaign {
  id: string;
  title: string;
  category: SadaqaCategory;
  categoryLabel: string;
  summary: string;
  detailedNeed: string;
  targetAmountKes: number;
  raisedAmountKes: number;
  donorsCount: number;
  location: string;
  status: 'Active' | 'Urgent' | 'Completed';
  transparencyPillars: {
    distributionType: string;
    reportingCycle: string;
    beneficiaryVerification: string;
  };
  imageUrl: string;
  demoNotice: string;
  inscription?: string;
  waqfDedicatedTo?: string;
  artifactImageId?: string;
  fieldBadge?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  category: 'Property Walkthrough' | 'Real Estate Insight' | 'Sadaqa Update' | 'Field Story';
  duration: string;
  date: string;
  thumbnailUrl: string;
  videoUrl?: string;
  description: string;
  platform: 'TikTok' | 'Facebook' | 'Video';
  externalUrl?: string;
}

export interface ServicePillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  idealFor: string;
}

export interface SiteConfig {
  name: string;
  nickname: string;
  location: string;
  whatsappNumber: string; // international format without + or spaces for wa.me, e.g. "254700000000"
  whatsappFormatted: string; // readable e.g. "+254 700 000 000"
  email: string;
  tiktokUrl: string;
  facebookUrl: string;
}

export interface UserUploadedImages {
  heroPortrait: string | null;
  aboutPortrait: string | null;
  fieldPortrait: string | null;
}
