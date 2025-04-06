/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // enables use of 'dark' class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'code': ['Courier New'],
    },
    extend: {},
  },
}