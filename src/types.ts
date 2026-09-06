export type EventCategory = 'All' | 'Concert' | 'Corporate' | 'Festival' | 'Outdoor';

export interface Project {
  id: string;
  slug: string;
  title: string;
  year: string;
  location: string;
  scope: string;
  category: 'Concert' | 'Corporate' | 'Festival' | 'Outdoor';
  stageSize?: string;
  description: string;
  image: string;
  gallery: string[];
  highlights: string[];
  technicalSpecs?: {
    label: string;
    value: string;
  }[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  titleKm?: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  gallery: string[];
  features: string[];
  equipmentHighlights: string[];
}

export interface WhyUsStrength {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  iconName: string;
}

export interface ProductionStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export type BlogCategory = 'All' | 'Event Guides' | 'LED Knowledge' | 'Production Tips';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Event Guides' | 'LED Knowledge' | 'Production Tips';
  date: string;
  readTime: string;
  featuredImage: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export interface MediaItem {
  id: string;
  type: 'video' | 'gallery' | 'bts';
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  videoUrl?: string;
  videoPreviewUrl?: string;
  description?: string;
  btsScope?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  externalUrl: string;
  platformLabel: string;
}

export interface EventInquiry {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  estimatedAttendance: string;
  servicesRequired: string[];
  projectDetails: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'In Progress' | 'Completed' | 'Archived';
}
