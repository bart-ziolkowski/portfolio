/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainGreen: "#006a4e",
        mainOrange: "#FF3B00",
        mainLight: "#F4F0E6",
        mainPurple: "#AB87FF",
        mainBlue: "#39A0ED",
      },
    },
  },
  plugins: [],
};
