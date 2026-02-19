import { defineType } from "sanity";

export default defineType({
  name: "textSection",
  title: "Text Section",
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
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      description: "Rich text body content",
    },
  ],
});
