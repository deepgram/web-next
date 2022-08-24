import { defineConfig } from "astro/config";
import globals from "./src/plugins/globalSsrComponents.mjs";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
// import autolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
	site: process.env.URL,
	integrations: [
		globals(),
		tailwind({
			// Disable injecting a basic `base.css` import on every page.
			config: { applyBaseStyles: false },
		}),
		vue(),
	],
	markdown: {
		rehypePlugins: ["rehype-autolink-headings"],
		// rehypePlugins: [autolinkHeadings],
		// rehypePlugins: [["rehype-autolink-headings", { behavior: "prepend" }]],
		// or rehypePlugins: [[autolinkHeadings, { behavior: "prepend" }]],
	},
	vite: {
		resolve: {
			preserveSymlinks: true, // required for dev to read contents of symlinked directory
		},
	},
});
