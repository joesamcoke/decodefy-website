import { defineType } from "sanity";

export default defineType({
  name: "audienceSection",
  title: "Audience Section",
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
      name: "items",
      title: "Audience Items",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "afterText",
      title: "Text After List",
      type: "string",
    },
    {
      name: "closingLine",
      title: "Closing Line (bold)",
      type: "string",
    },
  ],
});
