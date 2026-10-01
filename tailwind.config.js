/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        moss: "#436B5C",
        forest: "#2B4A3E",
        rose: "#EFBBBD",
        blush: "#FBF0F0",
        ink: "#1E2A25",
      },
      fontFamily: {
        display: ["var(--font-display)", "Helvetica Neue", "Arial", "sans-serif"],
        serif: ["var(--font-text)", "Georgia", "serif"],
      },
      keyframes: {
        lineup: { from: { transform: "translateY(105%)" }, to: { transform: "none" } },
        rise: { from: { opacity: 0, transform: "translateY(20px)" }, to: { opacity: 1, transform: "none" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        pop: { from: { opacity: 0, transform: "scale(.96)" }, to: { opacity: 1, transform: "none" } },
      },
      animation: {
        lineup: "lineup 1s cubic-bezier(.2,.7,.2,1) both",
        rise: "rise .8s cubic-bezier(.2,.7,.2,1) both",
        marquee: "marquee 28s linear infinite",
        pop: "pop .3s ease-out both",
      },
    },
  },
  plugins: [],
};
