import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vitePreact from "@preact/preset-vite";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
	site: process.env.URL,
	integrations: [
		tailwind({
			// Disable injecting a basic `base.css` import on every page.
			config: { applyBaseStyles: false },
		}),
		preact(),
	],
	vite: {
		ssr: { noExternal: ["node-html-parser"] },
		plugins: [vitePreact()],
		resolve: {
			preserveSymlinks: true, // required for dev to read contents of symlinked directory
		},
	},
});
