import { defineType } from "sanity";

export default defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "string",
      description: 'Main headline text (e.g. "AI Content Sounds Like AI.")',
    },
    {
      name: "headlineAccent",
      title: "Headline Accent",
      type: "string",
      description: 'Coloured part of headline (e.g. "Yours Won\'t.")',
    },
    {
      name: "paragraphs",
      title: "Body Paragraphs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "text", title: "Text", type: "text", rows: 3 },
            {
              name: "style",
              title: "Style",
              type: "string",
              options: {
                list: [
                  { title: "Normal", value: "normal" },
                  { title: "Italic", value: "italic" },
                  { title: "Bold", value: "bold" },
                ],
              },
              initialValue: "normal",
            },
          ],
          preview: {
            select: { title: "text" },
          },
        },
      ],
    },
    {
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
    },
  ],
});
