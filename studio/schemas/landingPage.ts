import { defineType } from "sanity";

export default defineType({
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "video", title: "Video" },
    { name: "testimonials", title: "Testimonials" },
    { name: "caseStudies", title: "Case Studies" },
    { name: "problem", title: "Why AI Sounds Like AI" },
    { name: "compass", title: "Master Brand Compass" },
    { name: "training", title: "Training" },
    { name: "usage", title: "Tell It What You Need" },
    { name: "clientsCreate", title: "What Clients Create" },
    { name: "builtBetter", title: "Built To Get Better" },
    { name: "audience", title: "Who This Is For" },
    { name: "whatChanges", title: "What Changes" },
    { name: "whatYouGet", title: "What You Get" },
    { name: "team", title: "Team" },
    { name: "pricing", title: "Pricing" },
    { name: "guarantee", title: "Guarantee" },
    { name: "faq", title: "FAQ" },
    { name: "footer", title: "Footer & CTAs" },
  ],
  fields: [
    // Hero
    {
      name: "hero",
      title: "Hero Section",
      type: "heroSection",
      group: "hero",
    },

    // Video
    {
      name: "video",
      title: "Video Section",
      type: "videoSection",
      group: "video",
    },

    // Testimonials
    {
      name: "testimonialsHeadline",
      title: "Testimonials Headline",
      type: "string",
      group: "testimonials",
    },
    {
      name: "testimonialsHeadlineAccent",
      title: "Testimonials Headline Accent",
      type: "string",
      group: "testimonials",
    },
    {
      name: "testimonialsSubtitle",
      title: "Testimonials Subtitle",
      type: "string",
      group: "testimonials",
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "testimonialItem" }],
      group: "testimonials",
    },

    // Case Studies
    {
      name: "mattStory",
      title: "Matt's Story",
      type: "caseStudy",
      group: "caseStudies",
    },
    {
      name: "catherineStory",
      title: "Catherine's Story",
      type: "caseStudy",
      group: "caseStudies",
    },
    {
      name: "willStory",
      title: "Will's Story",
      type: "caseStudy",
      group: "caseStudies",
    },

    // Problem
    {
      name: "problem",
      title: "Why AI Sounds Like AI",
      type: "textSection",
      group: "problem",
    },

    // Compass
    {
      name: "compass",
      title: "Master Brand Compass",
      type: "textSection",
      group: "compass",
    },

    // Training
    {
      name: "training",
      title: "Training Section",
      type: "trainingSection",
      group: "training",
    },

    // Usage
    {
      name: "usage",
      title: "Tell It What You Need",
      type: "usageSection",
      group: "usage",
    },

    // Clients Create
    {
      name: "clientsCreateHeadline",
      title: "What Clients Create Headline",
      type: "string",
      group: "clientsCreate",
    },
    {
      name: "clientsCreateHeadlineAccent",
      title: "What Clients Create Headline Accent",
      type: "string",
      group: "clientsCreate",
    },
    {
      name: "clientsCreateSubtitle",
      title: "What Clients Create Subtitle",
      type: "string",
      group: "clientsCreate",
    },
    {
      name: "clientCards",
      title: "Client Cards",
      type: "array",
      of: [{ type: "clientCard" }],
      group: "clientsCreate",
    },

    // Built Better
    {
      name: "builtBetter",
      title: "Built To Get Better",
      type: "textSection",
      group: "builtBetter",
    },

    // Audience
    {
      name: "audience",
      title: "Who This Is For",
      type: "audienceSection",
      group: "audience",
    },

    // What Changes
    {
      name: "whatChanges",
      title: "What Changes",
      type: "whatChangesSection",
      group: "whatChanges",
    },

    // What You Get
    {
      name: "whatYouGet",
      title: "What You Get",
      type: "whatYouGetSection",
      group: "whatYouGet",
    },

    // Team
    {
      name: "teamHeadline",
      title: "Team Headline",
      type: "string",
      group: "team",
    },
    {
      name: "teamHeadlineAccent",
      title: "Team Headline Accent",
      type: "string",
      group: "team",
    },
    {
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [{ type: "teamMember" }],
      group: "team",
    },

    // Pricing
    {
      name: "pricing",
      title: "Pricing",
      type: "pricingSection",
      group: "pricing",
    },

    // Guarantee
    {
      name: "guarantee",
      title: "Guarantee",
      type: "textSection",
      group: "guarantee",
    },

    // FAQ
    {
      name: "faqHeadline",
      title: "FAQ Headline",
      type: "string",
      group: "faq",
    },
    {
      name: "faqHeadlineAccent",
      title: "FAQ Headline Accent",
      type: "string",
      group: "faq",
    },
    {
      name: "faqItems",
      title: "FAQ Items",
      type: "array",
      of: [{ type: "faqItem" }],
      group: "faq",
    },

    // Footer
    {
      name: "footer",
      title: "Footer & CTAs",
      type: "footerSection",
      group: "footer",
    },
  ],
  preview: {
    prepare() {
      return { title: "Landing Page" };
    },
  },
});
