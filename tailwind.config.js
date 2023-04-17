/** @type {import('tailwindcss').Config} */export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#353535",
        "sub-color": "#6a6a6a",
      },
      fontFamily: {
        sans: [
          "AvenirNextBold",
          "RobotoRegular",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
