const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#f2f2f2",
      orange: {
        DEFAULT: "#EC6B2D",
        600: "#ee7b44",
        400: "#f08c5b",
        200: "#f29c73",
      },
      green: "#4BD092",

      gray: {
        100: "#535F5C",
        200: "#3F4B47",
        300: "#333D3A",
        400: "#1A2320",
        500: "#151C1A",
        900: "#0C1210",
      },
      red: "#ED7272",
      blue: "#72C8ED",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        mono: ["PT Mono", ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        bearded: "url('/bg_logo.svg')",
      },
      keyframes: {
        gradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "100%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
      animation: {
        gradient: "gradient 30s linear infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};
