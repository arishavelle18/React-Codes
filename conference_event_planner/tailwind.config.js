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
        blackColor: "#3C3C3C",
        brightRed: "hsl(12,88%,59%)",
        brightRedLight: "hsl(12,88%,69%)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
