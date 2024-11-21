/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#1EABE2',
        secondaryColor: '#333647',
        darkTextColor: '#C1C1C1',
        sectionColor: '#252734',
      }
    },
  },
  plugins: [],
}