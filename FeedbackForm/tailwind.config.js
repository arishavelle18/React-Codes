/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#ED5484",
        lightRed: "#EFC4D2",
        otherRed: "#FF0051",
      },
    },
  },
  plugins: [],
};
