/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,svelte}"],
  theme: {
    extend: {
      screens: {
        xs: "420px"
      }
    }
  },
  plugins: []
}
