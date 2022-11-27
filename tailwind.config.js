const { keyframes } = require("styled-components");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.{jpg,png}",
  ],
  variants: {},
  theme: {
    extend: {
      screens: {
        s: "375px",
        sm: "480px",
      },
      colors: {
        "color-primary": "#2ab69f",
        "color-secundary": "#4a9687",
        "gray-two": "#1f2326",
        "gray-one": "#252a30",
        "gradient-start": "#252a30",
        "gradient-end": "#000",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
        20: "20px",
      },
      minWidth: {
        "full-vw": "100vw",
      },
      minHeight: {
        "full-vh": "100vh",
      },
      // fontFamily: {
      //   Teko: ["'Grape Nuts'", "cursive"],
      // },
      keyframes: {
        "progress-bar-0": {
          "0%": { width: "0%" },
          "100%": { width: "0%" },
        },
        "progress-bar-25": {
          "0%": { width: "0%" },
          "100%": { width: "25%" },
        },
        "progress-bar-50": {
          "0%": { width: "0%" },
          "100%": { width: "50%" },
        },
        "progress-bar-75": {
          "0%": { width: "0%" },
          "100%": { width: "75%" },
        },
        "progress-bar-100": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "flag-flip": {
          "0%": { transform: "rotate3d(0, 1, 0, 0deg)" },
          "100%": { transform: "rotate3d(0, 1, 0, 180deg)" },
        },
      },
      animation: {
        "progress-bar-0": "progress-bar-0 2s linear ",
        "progress-bar-25": "progress-bar-25 2s linear ",
        "progress-bar-50": "progress-bar-50 2s linear ",
        "progress-bar-75": "progress-bar-75 2s linear ",
        "progress-bar-100": "progress-bar-100 2s linear ",
        "flag-flip-animation": "flag-flip 1s linear",
      },
      cursor: {},
    },
  },
  plugins: [],
};
