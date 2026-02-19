import { defineType } from "sanity";

export default defineType({
  name: "footerSection",
  title: "Footer Section",
  type: "object",
  fields: [
    {
      name: "ctaHeadline",
      title: "CTA Section Headline",
      type: "string",
    },
    {
      name: "ctaHeadlineAccent",
      title: "CTA Section Headline Accent",
      type: "string",
    },
    {
      name: "options",
      title: "CTA Options",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "string" },
            { name: "ctaText", title: "Button Text", type: "string" },
            { name: "ctaUrl", title: "Button URL", type: "url" },
            {
              name: "isPrimary",
              title: "Primary Style",
              type: "boolean",
              initialValue: false,
            },
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    },
    {
      name: "closingHeadline",
      title: "Closing Headline",
      type: "string",
    },
    {
      name: "closingHeadlineAccent",
      title: "Closing Headline Accent",
      type: "string",
    },
    {
      name: "closingParagraphs",
      title: "Closing Paragraphs",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "closingBold",
      title: "Closing Bold Line",
      type: "string",
    },
    {
      name: "closingCtaText",
      title: "Closing CTA Text",
      type: "string",
    },
    {
      name: "closingCtaUrl",
      title: "Closing CTA URL",
      type: "url",
    },
    {
      name: "legalUrl",
      title: "Legal URL",
      type: "url",
    },
  ],
});
