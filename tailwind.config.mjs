/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Dark mode'u class bazlı çalıştır
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary400: "#F2A945",
        primary500: "#F78410",
        primary600: "#E07516",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};