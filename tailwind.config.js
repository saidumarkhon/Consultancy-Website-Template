const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "tb-color": "#F6F6F6",
        "primary-color": "#EF5159",
        "secondary-color": "#14223D",
      },
      fontFamily: {
        "primary-font": "Barlow, sans-serif",
        "secondary-font": "Open Sans, sans-serif",
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      container: {
        center: true,
        padding: "0.25rem",
      },
    },
  },
  plugins: [flowbite.plugin(),],
};
