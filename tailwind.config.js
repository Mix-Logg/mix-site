/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(91deg, #009FE3 0.73%, #7C00FF 99.35%);",
      },
      fontFamily: {
        sans: 'var(--font-roboto)',
      },
      colors: {
        primary: "#ff5f00",
        secondary: "#7B7B7B",
        terciary: "#191919",
        complement1: "#F4F4F4",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
