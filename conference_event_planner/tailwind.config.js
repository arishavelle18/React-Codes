/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        lightGreen: "#EFC16B",
        brownColor: "rgba(64,60,64,0.7)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
