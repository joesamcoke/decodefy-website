import { defineType } from "sanity";

export default defineType({
  name: "whatYouGetSection",
  title: "What You Get Section",
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
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Users", value: "Users" },
                  { title: "Zap", value: "Zap" },
                  { title: "BookOpen", value: "BookOpen" },
                  { title: "Sparkles", value: "Sparkles" },
                  { title: "Headphones", value: "HeadphonesIcon" },
                ],
              },
            },
            { name: "title", title: "Title", type: "string" },
            { name: "desc", title: "Description", type: "string" },
          ],
          preview: {
            select: { title: "title", subtitle: "desc" },
          },
        },
      ],
    },
    {
      name: "everythingNewTitle",
      title: "Everything New Box Title",
      type: "string",
    },
    {
      name: "everythingNewText",
      title: "Everything New Box Text",
      type: "string",
    },
    {
      name: "optionalLabel",
      title: "Optional Section Label",
      type: "string",
    },
    {
      name: "optionalContent",
      title: "Optional Section Content",
      type: "text",
      rows: 2,
    },
  ],
});
