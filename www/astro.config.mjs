import { defineConfig } from "astro/config";
import globals from "./src/plugins/globalSsrComponents.mjs";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), globals(), vue()],
  vite: {
    resolve: {
      preserveSymlinks: true, // required for dev to read contents of symlinked directory
    },
  },
});
