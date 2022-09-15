import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import vitePreact from "@preact/preset-vite";
import preact from "@astrojs/preact";
import storyblok from "@storyblok/astro";

// https://astro.build/config
export default defineConfig({
	site: process.env.URL,
	integrations: [
		sitemap(),
		tailwind({
			// Disable injecting a basic `base.css` import on every page.
			config: {
				applyBaseStyles: false,
			},
		}),
		vue(),
		preact(),
		storyblok({
			accessToken: "OsvNv534kS2nivAAj1EPVgtt",
			apiOptions: {
				cache: { clear: "auto", type: "memory" },
			},
			bridge: true,
			components: {
				page: "storyblok/Page",
				feature: "storyblok/Feature",
				grid: "storyblok/Grid",
				teaser: "storyblok/Teaser",
				vue_counter: "storyblok/VueCounter",
				svelte_counter: "storyblok/SvelteCounter",
				react_counter: "storyblok/ReactCounter",
			},
		}),
	],
	vite: {
		plugins: [vitePreact()],
		resolve: {
			// required for dev to read contents of symlinked directory
			preserveSymlinks: true,
		},
	},
});
