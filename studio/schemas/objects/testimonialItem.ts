import { defineType } from "sanity";

export default defineType({
  name: "testimonialItem",
  title: "Testimonial",
  type: "object",
  fields: [
    {
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 2,
    },
    {
      name: "name",
      title: "Name & Title",
      type: "string",
    },
    {
      name: "industry",
      title: "Industry Label",
      type: "string",
      description: "Uppercase label above the quote",
    },
    {
      name: "image",
      title: "Poster Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "videoUrl",
      title: "Video URL",
      type: "url",
    },
  ],
  preview: {
    select: { title: "name", subtitle: "industry" },
  },
});
