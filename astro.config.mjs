// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages (project site). Served at https://sisques-labs.github.io/sisques-labs-landing/
  // If you set up a custom domain, change `site` to it and set `base: "/"`.
  site: "https://sisques-labs.github.io",
  base: "/sisques-labs-landing",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
