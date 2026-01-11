/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2ff',
          100: '#b3d9ff',
          500: '#0066cc',
          600: '#0052a3',
          700: '#003d7a',
        },
        secondary: {
          500: '#2d8659',
          600: '#246b47',
        },
        accent: {
          500: '#d4af37',
          600: '#c49d2e',
        }
      }
    },
  },
  plugins: [],
}
