/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navBarText: "#3d4152",
        orange: "#f67117",
        carouselBg: "#171a29",
        shimmerUi: "#f5f5f5",
      },
      fontFamily: {
        Poopins: ["Poppins", "sans-serif"],
      },
      screens: {
        tablet: "481px",
        laptop: "769px",
        desktop: "1025px",
      },
    },
  },
  plugins: [],
};
