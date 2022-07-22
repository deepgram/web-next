import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			// Disable injecting a basic `base.css` import on every page.
			config: { applyBaseStyles: false },
		}),
	],
	vite: {
		resolve: {
			preserveSymlinks: true, // required for dev to read contents of symlinked directory
		},
	},
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
