/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        caveat: ['Caveat', 'cursive'],
      },
      colors: {
        primary: "#807964",
        secondary: "#8F0C31",
        contentPrimary: "#1F2520",
        surface: "#FFFFFF",
        background: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
