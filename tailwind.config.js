/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "1rem",
        md: "1rem",
        lg: "1rem",
        xl: "1rem",

       
      },
    },
    fontFamily:{
satoshi: ["var(--font-satoshi)"]
    },
    
    extend: {
      screens: {
        lg: "1280px",  // Custom size for large screens
        xl: "1440px",  // Custom size for extra-large screens
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
       cerreneGreen : "#4C4D16",
       cerreneLightGreen : "#9CA11C",
       cerreneOrange : "#F07127",
       cerreneLightOrange : "#A24819",
       cerreneBeige: "#FFDBC5",
       cerreneYellow: "#F8FABF",
      }
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },

       
      });
    }),
  ],
};