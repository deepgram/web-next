import { defineConfig } from "astro/config";
import globals from "./src/plugins/globalSsrComponents.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [globals()],
});
