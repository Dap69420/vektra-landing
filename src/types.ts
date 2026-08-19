export type Theme = 'light' | 'dark' | 'system';

export type DemoStatus = 'in_queue' | 'shortlist' | 'approved' | 'shipped';

export interface DemoItem {
  id: string;
  title: string;
  artist: string;
  label: string;
  genre: string;
  submittedAt: string;
  status: DemoStatus;
  bpm?: number;
  duration?: string;
  audioPreviewUrl?: string;
  notes?: string;
  feedback?: string;
}

export interface LabelStat {
  label: string;
  value: string;
  change?: string;
  description: string;
}

export interface FeatureBlock {
  title: string;
  tagline: string;
  description: string;
  icon: string;
  linkText?: string;
  linkUrl?: string;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'artists' | 'labels' | 'discord' | 'security';
}
