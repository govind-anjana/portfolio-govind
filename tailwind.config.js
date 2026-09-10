/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#050509',
          surface: '#0c0c14',
          card: '#12121e',
        },
      },
    },
  },
  plugins: [],
}
