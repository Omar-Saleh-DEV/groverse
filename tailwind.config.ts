/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#047857", // Groverse Green
        secondary: "#6B7280", // Grey
        background: "#F8FAFC", // Light Grey Background
      },
    },
  },
  plugins: [],
};
