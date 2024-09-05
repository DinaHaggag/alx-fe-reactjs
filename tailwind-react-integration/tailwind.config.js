// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // This ensures Tailwind checks for classes inside your components.
  
  darkMode: 'class', // Optional. If you don't need dark mode, you can remove this.
  theme: {
    extend: {},
  },
  plugins: [],
};

