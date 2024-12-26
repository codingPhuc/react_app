/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{html,js,jsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        green_lime: "#319795",
        red_lime: "#E53E3E",
      },
    },
  },
  plugins: [require("flowbite/plugin"), flowbite.plugin()],
};
