import { defineConfig } from "astro/config";
import globals from "./src/plugins/globalSsrComponents.mjs";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [globals(), tailwind()],
  vite: {
    resolve: {
      preserveSymlinks: true, // required for dev to read contents of symlinked directory
    },
  },
});
