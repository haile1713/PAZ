/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter","sans-serif"],
      },
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
}

