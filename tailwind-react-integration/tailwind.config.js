module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Define the paths to your files to scan for class names.
    "./public/index.html",
  ],
  theme: {
    extend: {}, // Extend the default theme if needed.
  },
  plugins: [], // Add Tailwind plugins here if required.
  darkMode: "class", // Optional: "media" or "class".
};
