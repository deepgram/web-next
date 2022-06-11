import { defineConfig } from "astro/config";
// import netlify from "@astrojs/netlify";
// import deno from "@astrojs/deno";

import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  // adapter: deno(),
});
