/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'game-bg': "url('/public/assets/gamebg.png')",
      }
    },
  },
  plugins: [],
}