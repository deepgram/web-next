import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import vitePreact from "@preact/preset-vite";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import image from '@astrojs/image';

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
		mdx(),
		image(),
	],
	vite: {
		ssr: { noExternal: ["node-html-parser"] },
		plugins: [vitePreact()],
		resolve: {
			// required for dev to read contents of symlinked directory
			preserveSymlinks: true,
		},
	},
});
