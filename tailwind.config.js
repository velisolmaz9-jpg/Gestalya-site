/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF1F6",
          100: "#DCE1EC",
          200: "#B3BFD6",
          300: "#8A9DC0",
          400: "#5C709C",
          500: "#3A4C78",
          600: "#28365C",
          700: "#1C2745",
          800: "#121A32",
          900: "#0A1022",
          950: "#060A15",
        },
        champagne: {
          50: "#FBF8F2",
          100: "#F5EEDF",
          200: "#EBDFC3",
          300: "#DFCBA0",
          400: "#D3B77E",
          500: "#C6A15F",
          600: "#AD854A",
          700: "#8C693A",
          800: "#6B4F2D",
          900: "#4A3720",
        },
        gold: "#B8974E",
        offwhite: "#FAF8F4",
      },
      fontFamily: {
        heading: ["Manrope", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 20px rgba(10, 16, 34, 0.06)",
        softer: "0 1px 8px rgba(10, 16, 34, 0.04)",
        card: "0 4px 30px rgba(10, 16, 34, 0.08)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
