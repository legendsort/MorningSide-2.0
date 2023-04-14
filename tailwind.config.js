/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#353535",
        "sub-color": "#6a6a6a",
      },
      fontFamily: {
        'sans': ['AvenirNextBold', 'RobotoRegular', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
};
