import type { PortableTextBlock } from "@portabletext/types";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface HeroParagraph {
  text: string;
  style: "normal" | "italic" | "bold";
}

export interface HeroSection {
  headline: string;
  headlineAccent: string;
  paragraphs: HeroParagraph[];
  ctaText: string;
}

export interface VideoDescription {
  label: string;
  text: string;
}

export interface VideoSection {
  headline: string;
  headlineAccent: string;
  videoUrl: string;
  descriptions: VideoDescription[];
}

export interface TestimonialItem {
  quote: string;
  name: string;
  industry: string;
  image?: SanityImage;
  videoUrl: string;
  // Local image fallback (used in defaults)
  _localImage?: string;
}

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  headline: string;
  headlineAccent: string;
  image?: SanityImage;
  imageAlt: string;
  reversed: boolean;
  content: PortableTextBlock[];
  stats?: CaseStudyStat[];
  // Local image fallback (used in defaults)
  _localImage?: string;
}

export interface TextSection {
  headline: string;
  headlineAccent: string;
  content: PortableTextBlock[];
}

export interface TrainingSection {
  headline: string;
  headlineAccent: string;
  content: PortableTextBlock[];
  guaranteeBoxTitle: string;
  guaranteeBoxContent: string;
}

export interface UsageSection {
  headline: string;
  headlineAccent: string;
  examples: string[];
  afterText: string;
  adjustExamples: string;
  closingLine: string;
}

export interface ClientCard {
  name: string;
  result: string;
  image?: SanityImage;
  _localImage?: string;
}

export interface AudienceSection {
  headline: string;
  headlineAccent: string;
  items: string[];
  afterText: string;
  closingLine: string;
}

export interface WhatChangesSection {
  headline: string;
  headlineAccent: string;
  items: string[];
}

export interface FeatureCard {
  icon: string;
  title: string;
  desc: string;
}

export interface WhatYouGetSection {
  headline: string;
  headlineAccent: string;
  features: FeatureCard[];
  everythingNewTitle: string;
  everythingNewText: string;
  optionalLabel: string;
  optionalContent: string;
}

export interface TeamMember {
  name: string;
  desc: string;
  image?: SanityImage;
}

export interface PricingSection {
  headline: string;
  headlineAccent: string;
  setupPrice: string;
  setupLabel: string;
  monthlyPrice: string;
  monthlyLabel: string;
  urgencyText: string;
  ctaText: string;
  ctaUrl: string;
  comparisonLines: string[];
  capacityNote: string;
}

export interface FooterCTAOption {
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  isPrimary: boolean;
}

export interface FooterSection {
  ctaHeadline: string;
  ctaHeadlineAccent: string;
  options: FooterCTAOption[];
  closingHeadline: string;
  closingHeadlineAccent: string;
  closingParagraphs: string[];
  closingBold: string;
  closingCtaText: string;
  closingCtaUrl: string;
  legalUrl: string;
}

export interface LandingPageData {
  hero: HeroSection;
  video: VideoSection;
  testimonialsHeadline: string;
  testimonialsHeadlineAccent: string;
  testimonialsSubtitle: string;
  testimonials: TestimonialItem[];
  mattStory: CaseStudy;
  catherineStory: CaseStudy;
  willStory: CaseStudy;
  problem: TextSection;
  compass: TextSection;
  training: TrainingSection;
  usage: UsageSection;
  clientsCreateHeadline: string;
  clientsCreateHeadlineAccent: string;
  clientsCreateSubtitle: string;
  clientCards: ClientCard[];
  builtBetter: TextSection;
  audience: AudienceSection;
  whatChanges: WhatChangesSection;
  whatYouGet: WhatYouGetSection;
  teamHeadline: string;
  teamHeadlineAccent: string;
  teamMembers: TeamMember[];
  pricing: PricingSection;
  guarantee: TextSection;
  faqHeadline: string;
  faqHeadlineAccent: string;
  faqItems: { question: string; answer: string }[];
  footer: FooterSection;
}
