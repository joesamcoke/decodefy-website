import { defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team Member",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "desc",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    },
  ],
  preview: {
    select: { title: "name" },
  },
});
