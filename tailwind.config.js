/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        scroll: "scroll 10s ease-in infinite",
      },
      keyframes: {
        scroll: {
          "%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },

      fontFamily: {
        custom: ['CustomFont', 'sans-serif'], // CustomFont ব্যবহার করো
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"], 
  },
};
