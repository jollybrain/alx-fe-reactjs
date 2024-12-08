module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // You can enable dark mode if needed
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      // Example: Enabling hover and focus variants for background color
      backgroundColor: ['hover', 'focus'],
      textColor: ['hover', 'focus'],
      // Add more utilities and their variants as needed
    },
  },
  plugins: [],
};


