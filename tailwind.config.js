/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#41BCE8',
        secondary: '#85C25B',
        black: "#000",
        black2: "#333333",
        black3: "#444444",
        white: "#FFFFFF",
        gray1: "#D9D9D9",
        gray2: "#D2E4EA"
      }
    },
  },
  plugins: [],
}
