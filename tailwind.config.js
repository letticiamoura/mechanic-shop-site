/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'custom': '#080517',
        'orange': '#ffbb33',
      },
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'anta': ["Anta", "sans-serif"],
      }
    },
    backgroundImage: {
      'home': "url('./src/assets/of.jpg')",
    },
  },
  plugins: [],
}
