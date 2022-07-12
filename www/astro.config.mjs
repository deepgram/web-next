import { defineConfig } from "astro/config";
import globals from "./src/plugins/globalSsrComponents.mjs";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [
    globals(),
    tailwind({
      // Disable injecting a basic `base.css` import on every page.
      config: { applyBaseStyles: false },
    }),
    vue(),
  ],
  vite: {
    resolve: {
      preserveSymlinks: true, // required for dev to read contents of symlinked directory
    },
  },
});
