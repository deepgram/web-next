import { defineConfig } from "astro/config";
import globals from "./src/plugins/globalSsrComponents.mjs";
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
		globals(),
		tailwind({
			// Disable injecting a basic `base.css` import on every page.
			config: {
				applyBaseStyles: false,
			},
		}),
		vue(),
		preact(),
		storyblok({
			// accessToken: "DQ5PVW2Hi8ZeawcnLc3nvQtt",
			accessToken: "dxzwOWtkKol6qnfd54RFewtt",
			apiOptions: {
				cache: { clear: "auto", type: "memory" },
				region: "us",
			},
			bridge: true,
			components: {
				// page: "storyblok/Page",
				// feature: "storyblok/Feature",
				// grid: "storyblok/Grid",
				// teaser: "storyblok/Teaser",
				Author: "shared/components/cards/Author",
				RichTextSection: "components//storyblok/RichText",
				Iframe: "components/storyblok/Iframe",
				whitepaperLink: "shared/components/global/WhitepaperPromoSB",
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
	legacy: {
		// Adds support for legacy Markdown features
		astroFlavoredMarkdown: true,
	},
});
