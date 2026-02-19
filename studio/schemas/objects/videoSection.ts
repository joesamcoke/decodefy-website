import { defineType } from "sanity";

export default defineType({
  name: "videoSection",
  title: "Video Section",
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
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "URL to the demo video file",
    },
    {
      name: "descriptions",
      title: "Description Lines",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "text", title: "Text", type: "string" },
          ],
          preview: {
            select: { title: "label", subtitle: "text" },
          },
        },
      ],
    },
  ],
});
