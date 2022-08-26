module.exports = {
	content: ["./src/{components,layouts,pages,assets}/**/*.{vue,astro,html,js,css}", "./src/shared/{components,assets}/**/*.{vue,astro,html,js,css}"],
	safelist: [
		"bg-darkCharcoal",
		"bg-mist",
		"bg-casper",
		"bg-white",
		"bg-black",
		"bg-almostBlack",
		"bg-cloud",
		"fill-darkCharcoal",
		"fill-mist",
		"fill-casper",
		"fill-white",
		"fill-black",
		"fill-almostBlack",
		"fill-cloud",
	],
	theme: {
		extend: {
			fontSize: {
				"body-smallest": ["0.875rem", "1.125rem"],
				body: ["1.125rem", "1.75rem"],

				// desktop sizes
				"hero-body-d": ["1.25rem", "1.75rem"],
				"h6-d": ["1.125rem", "1.5rem"],
				"h5-d": ["1.25rem", "1.625rem"],
				"h4-d": ["1.5rem", "1.75rem"],
				"h3-d": ["1.875rem", "2.375rem"],
				"h2-d": ["2.375rem", "2.75rem"],
				"h1-small-d": ["2.75rem", "3.375rem"],
				"h1-large-d": ["3.75rem", "4.375rem"],

				// mobile sizes
				"h6-m": ["0.875rem", "1rem"],
				"h5-m": ["1.125rem", "1.625rem"],
				"h4-m": ["1.25rem", "1.375rem"],
				"h3-m": ["1.375rem", "1.625rem"],
				"h2-m": ["1.625rem", "2rem"],
				"h1-small-m": ["1.75rem", "2.125rem"],
				"h1-large-m": ["2rem", "2.25rem"],
			},
			boxShadow: {
				dg: "3px 3px 10px rgba(0, 0, 0, 0.25)",
			},
			backgroundSize: {
				"10%": "10%",
				"20%": "20%",
				"30%": "30%",
				"40%": "40%",
				"50%": "50%",
				"60%": "60%",
				"70%": "70%",
				"80%": "80%",
				"90%": "90%",
				"promo-xs": "300%",
			},
			fontFamily: {
				favorit: ["favorit", "sans-serif"],
				inter: ["inter", "sans-serif"],
				firaCode: ["firaCode", "monospace"],
			},
			lineHeight: {
				11: "2.75rem",
				12: "3rem",
				13: "3.25rem",
				14: "3.5rem",
				15: "3.75rem",
				16: "4rem",
				17: "4.25rem",
			},
			colors: {
				powder: "#E8F1FF",
				cottonCandy: "#FFEBEB",
				crimson: "#AB1A22",
				transparent: "transparent",
				current: "currentColor",
				black: "#000000",
				offBlack: "#050A0F",
				white: "#ffffff",
				blueberry: "#1c4374",
				darkCharcoal: "#141E29",
				midCharcoal: "#1D2630",
				ink: "#1E2C3C",
				iris: "#5D6FD0",
				steel: "#4F6278",
				casper: "#AAB8CD",
				cloud: "#D7DFEB",
				cloud30: "rgba(215,223,235,.3)",
				shuttleGray: "#6B6E76",
				almostBlack: "#0A121B",
				fireEngine: "#FB3640",
				coral: "#FE5C5C",
				meadow: "#38EDAC",
				grass: "#00A971",
				watercourse: "#008752",
				evergreen: "#025445",
				mintChip: "#DAFFF2",
				mist: "#F7F9FC",
				rock: "#354659",
				lightPurple: "#A8ACFF",
				lightIris: "#96A2FF",
				storm: "#66788D",
				stone: "#758AA2",
				sunflower: "#FFD34B",
				gold: "#FBAC18",
				http: {
					get: "#2B2BFA",
					options: "#2B2BFA",
					patch: "#2B2BFA",
					post: "#00A971",
					put: "#A56FFF",
					delete: "#FB3640",
				},
				language: {
					nodejs: {
						green: "#3C873A",
						grey: "#303030",
					},
					python: {
						yellow: "#FFE873",
						blue: "#306998",
					},
				},
				brand: {
					twilio: "#306998",
					zoom: "#2D8CFF",
					facebook: "#4267B2",
					hackernews: "#f75500",
					linkedin: "#0072b1",
					pocket: "#f83153",
					reddit: "#ff4301",
					slack: "#4a154b",
					twitch: "#9146ff",
					twitter: "#1da1f2",
					vk: "#4a76a8",
					weibo: "#e6162d",
					stackoverflow: "#ff9900",
					github: "#24292e",
					youtube: "#ff0000",
				},
			},
		},
	},
	plugins: [],
};
