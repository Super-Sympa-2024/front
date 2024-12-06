/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 3s ease-in-out infinite",
        bubble: "bubble 5s infinite", // Animation des bulles
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
        bubble: {
          "0%": { transform: "translateY(60px)", opacity: "0" },
          "50%": { opacity: "0.5" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
      },
      backgroundImage: {
        'abysses-gradient': "linear-gradient(to bottom, #0099ff, #001933, #000000)",
      },
    },
  },
  plugins: [],
};
