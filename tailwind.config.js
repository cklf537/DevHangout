/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Open Sans', 'Roboto', 'sans-serif'],
        
      },
      container:{
        center: true,
      }
    },
  },
  plugins: [],
}
