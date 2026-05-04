/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chran: {
          green: '#006837',
          lime: '#8DC63F',
          red: '#ED1C24'
        }
      }
    },
  },
  plugins: [],
}