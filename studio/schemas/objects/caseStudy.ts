import { defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
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
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "imageAlt",
      title: "Image Alt Text",
      type: "string",
    },
    {
      name: "reversed",
      title: "Reverse Layout",
      type: "boolean",
      description: "Image on the right instead of left",
      initialValue: false,
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      description: "Rich text content with paragraphs and blockquotes",
    },
    {
      name: "stats",
      title: "Stats (optional)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
    },
  ],
});
