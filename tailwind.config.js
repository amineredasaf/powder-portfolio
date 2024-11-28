/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',  // Small screens and up
        'md': '1140px',  // Medium screens and up
        'lg': '1200px', // Large screens and up
        'xl': '1280px', // Extra large screens and up
        '2xl': '1536px' // 2x Extra large screens and up
      }
    },
  },
  plugins: [],
}