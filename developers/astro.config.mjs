import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import vitePreact from "@preact/preset-vite";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import image from '@astrojs/image';
import { s } from 'hastscript';
import autolinkHeadings from 'rehype-autolink-headings'

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
		mdx({
			rehypePlugins: [
				[
					autolinkHeadings,
					{
						behavior: 'prepend',
						properties: {
							class: 'autolink-header',
							ariaHidden: true,
							tabIndex: -1,
						},
						content: [
							s(
								'svg.autolink-svg',
								{
									xmlns: 'http://www.w3.org/2000/svg',
									width: 24,
									height: 24,
									fill: '#4F6278',
									viewBox: '0 0 24 24',
								},
								s('path', {
									d: 'M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z',
								})
							),
						],
					},
				],
			],
		}),
		image(),
	],
	vite: {
		plugins: [vitePreact()],
		resolve: {
			// required for dev to read contents of symlinked directory
			preserveSymlinks: true,
		},
	},
});
