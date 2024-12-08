module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", // Define the paths to your files to scan for class names.
    "./public/index.html",
  ],
  theme: {
    extend: {
      display: ["group-hover", "hover"], // Enable `hover` and `group-hover` for the `display` utility.
    }, // Extend the default theme if needed.
  },
  plugins: [], // Add Tailwind plugins here if required.
  darkMode: "class", // Optional: "media" or "class".
  
};
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("child", "& > *"); // Adds a custom "child" variant
    }),
  ],
};
