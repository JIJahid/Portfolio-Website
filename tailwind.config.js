// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",        // All HTML files in the root
    ".//*.html"      // All HTML files in subfolders
  ],
  theme: {
    extend: {},         // You can customize colors, fonts etc. here later
  },
  plugins: [],
}