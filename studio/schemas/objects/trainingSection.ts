import { defineType } from "sanity";

export default defineType({
  name: "trainingSection",
  title: "Training Section",
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
    },
    {
      name: "guaranteeBoxTitle",
      title: "Guarantee Box Title",
      type: "string",
    },
    {
      name: "guaranteeBoxContent",
      title: "Guarantee Box Content",
      type: "text",
      rows: 3,
    },
  ],
});
