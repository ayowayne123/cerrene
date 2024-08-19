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
        sm: "2rem",
        md: "2rem",
        lg: "1rem",
        xl: "3.75rem",

       
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
      gridTemplateColumns: {
       
        'reverse': '450px minmax(795px, 1fr) ',

       
        'services': ' minmax(795px, 1fr) 450px',
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
       cerreneDarkOrange : "#A24819",
       cerreneLightOrange: "#FFDBC5",
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