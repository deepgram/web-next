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
			accessToken: "yr1Aq22RabLVKwS0FwpQaAtt",
			apiOptions: {
				cache: { clear: "auto", type: "memory" },
				region: "us",
			},
			bridge: true,
			components: {
				page: "storyblok/Page",
				feature: "storyblok/Feature",
				grid: "storyblok/Grid",
				teaser: "storyblok/Teaser",
				author: "storyblok/Author",
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
