/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brownColor: "#2F4F4F",
        greenColor: "#28A745",
        darkBlue: "#2E1065",
      },
    },
  },
  plugins: [],
};
