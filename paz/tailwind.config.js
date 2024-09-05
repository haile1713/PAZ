/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				// "dark-green": "#B69121",
				"white-ish": "#FFEE99",
				"dark-green": "#2f4e30 ",
				"golden-yellow": "#fdc108",
			},
			scale: {
				100: "1.00",
			},
		},
	},
	plugins: [],
};
