/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-400": "#F2A945",
        "primary-500": "#F78410",
        "primary-600": "#E07516",
        background: "#ffffff",
        foreground: "#000000",
      },
    },
  },
  plugins: [],
};