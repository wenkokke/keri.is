import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const ceramics = defineCollection({
  loader: file("./src/data/ceramics.yaml"),
  schema: z.object({
    id: z.number(),
    alt: z.string(),
    caption: z.string(),
    year: z.number(),
    highlight: z.boolean().default(false),
    src: z.string(),
    extras: z
      .array(
        z.object({
          alt: z.string().optional(),
          caption: z.string().optional(),
          src: z.string(),
        }),
      )
      .default([]),
  }),
});

export const collections = { ceramics };
