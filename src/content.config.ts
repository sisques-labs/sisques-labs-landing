import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  // Files starting with "_" (e.g. _TEMPLATE.md) are ignored.
  loader: glob({ pattern: ["**/*.md", "!_*.md"], base: "./src/content/projects" }),
  schema: z.object({
    /** Display name (same in both languages unless overridden) */
    name: z.string(),
    category_es: z.string(),
    category_en: z.string(),
    /** One-line pitch */
    summary_es: z.string(),
    summary_en: z.string(),
    /** Tech / disciplines tags */
    tags: z.array(z.string()),
    year: z.string(),
    role_es: z.string(),
    role_en: z.string(),
    /** Outbound link (use "#" as placeholder) */
    url: z.string(),
    /** Accent color used on the card, e.g. "#FF7A45" */
    accent: z.string(),
    /** Lower shows first; ties broken by filename */
    order: z.number().default(0),
  }),
});

export const collections = { projects };
