/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "2rem",
        slg: "2rem",
        lg: "1rem",
        xl: "3.75rem",
      },
    },
    fontFamily: {
      satoshi: ["var(--font-satoshi)"],
    },

    extend: {
      screens: {
        md: "768px", // Custom size for medium screens
        slg: "1024px", // Custom size for smaller laptop screens
        lg: "1280px", // Custom size for laptop screens
        xl: "1440px", // Custom size for extra-large screens
      },
      gridTemplateColumns: {
        reverse: "450px minmax(750px, 1fr) ",
        reverseSmall: "360px minmax(550px, 1fr) ",
        reverseMd: "300px minmax(330px, 1fr) ",
        elevate: "445px minmax(795px, 1fr) ",
        services: " minmax(750px, 1fr) 450px",
        servicesSmall: " minmax(550px, 1fr) 360px",
        servicesMd: " minmax(330px, 1fr) 300px",
      },
      gridTemplateRows: {
        vertical: "364px 223px 364px",
        verticalSmall: "300px 200px 300px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        aboutBg: " url('/images/bgAbout.png')",
        aboutBg2: " url('/images/bgAbout.png')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        cerreneGreen: "#4C4D16",
        cerreneLightGreen: "#9CA11C",
        cerreneOrange: "#F07127",
        cerreneDarkOrange: "#A24819 ",
        cerreneLightOrange: "#FFDBC5",
        cerreneAltLightOrange: "#F6B087",
        cerreneYellow: "#F8FABF",
        cerreneOffWhite: "#FFF7EB",
      },
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
