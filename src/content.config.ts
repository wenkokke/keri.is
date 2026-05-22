import { defineCollection } from "astro:content";
import { file } from "astro/loaders";

const ceramics = defineCollection({
  loader: file("./src/data/ceramics.yaml"),
});

export const collections = { ceramics };
