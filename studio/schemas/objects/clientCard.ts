import { defineType } from "sanity";

export default defineType({
  name: "clientCard",
  title: "Client Card",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "result",
      title: "Result",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
  preview: {
    select: { title: "name", subtitle: "result" },
  },
});
