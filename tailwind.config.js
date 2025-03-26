/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#fff9e6',
          100: '#feefc0',
          200: '#fde599',
          300: '#fcdb72',
          400: '#fbd14b',
          500: '#fac724',
          600: '#f9bd1d',
          700: '#f7b519',
          800: '#f6ae14',
          900: '#f5a70c',
        },
        'secondary': {
          50: '#f4f6f7',
          100: '#e2e8ea',
          200: '#cfd9de',
          300: '#aabbbf',
          400: '#879ea6',
          500: '#64818b',
          600: '#536a72',
          700: '#435358',
          800: '#343c40',
          900: '#262d30',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 