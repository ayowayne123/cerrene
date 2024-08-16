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
        md: "2rem",
        lg: "2rem",
        xl: "5rem",

       
      },
    },
    fontFamily:{
satoshi: ["var(--font-satoshi)"]
    },
    
    extend: {
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