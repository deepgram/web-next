import { defineConfig } from "astro/config";
import globals from "./src/plugins/globalSsrComponents.mjs";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import vitePreact from "@preact/preset-vite";
import preact from "@astrojs/preact";
import storyblok from "@storyblok/astro";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: netlify({
    dist: new URL('./dist/', import.meta.url)
  }),
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
			accessToken: "DQ5PVW2Hi8ZeawcnLc3nvQtt",
			// accessToken: "dxzwOWtkKol6qnfd54RFewtt",
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
				RichTextSection: "components/storyblok/RichText",
				Iframe: "components/storyblok/Iframe",
				Image: "components/storyblok/Image",
				whitepaperLink: "shared/components/global/WhitepaperPromoSB",
				Panel: "shared/components/global/Panel",
				YouTube: "shared/components/global/YouTube",
				Alert: "shared/components/global/Alert",
				CodeEmbed: "shared/components/global/CodeEmbed",
				Table: "shared/components/global/Table",
				CodeGroup: "shared/components/code/CodeGroupSB",
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
