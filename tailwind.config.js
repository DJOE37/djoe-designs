/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      // =========================
      // CUSTOM ANIMATIONS
      // =========================
      animation: {
        scroll: "scroll 50s linear infinite",
        "scroll-slow": "scroll 80s linear infinite",
      },

      // =========================
      // CUSTOM KEYFRAMES
      // =========================
      keyframes: {
        scroll: {

          "0%": {
            transform: "translateX(0)",
          },

          "100%": {
            transform: "translateX(-100%)",
          },

        },
      },

    },
  },

  plugins: [],
};