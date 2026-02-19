import { defineType } from "sanity";

export default defineType({
  name: "whatChangesSection",
  title: "What Changes Section",
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
      title: "Change Items",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});
