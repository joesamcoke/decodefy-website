import { defineType } from "sanity";

export default defineType({
  name: "usageSection",
  title: "Usage Section",
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
      name: "examples",
      title: "Example Prompts",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "afterText",
      title: "Text After Examples",
      type: "string",
    },
    {
      name: "adjustExamples",
      title: "Adjust Examples Text",
      type: "string",
    },
    {
      name: "closingLine",
      title: "Closing Line",
      type: "string",
    },
  ],
});
