import { defineType } from "sanity";

export default defineType({
  name: "pricingSection",
  title: "Pricing Section",
  type: "object",
  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "headlineAccent",
      title: "Headline Accent",
      type: "string",
    },
    {
      name: "setupPrice",
      title: "Setup Price",
      type: "string",
      description: 'e.g. "£497"',
    },
    {
      name: "setupLabel",
      title: "Setup Label",
      type: "string",
    },
    {
      name: "monthlyPrice",
      title: "Monthly Price",
      type: "string",
      description: 'e.g. "£100"',
    },
    {
      name: "monthlyLabel",
      title: "Monthly Label",
      type: "string",
    },
    {
      name: "urgencyText",
      title: "Urgency Text",
      type: "string",
      description: 'e.g. "Moving to £197/month soon..."',
    },
    {
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
    },
    {
      name: "ctaUrl",
      title: "CTA Button URL",
      type: "url",
    },
    {
      name: "comparisonLines",
      title: "Comparison Lines",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "capacityNote",
      title: "Capacity Note",
      type: "string",
    },
  ],
});
