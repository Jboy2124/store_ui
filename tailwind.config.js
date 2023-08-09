/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "3rem",
      },
      colors: {
        primary: "#4BBB8B",
        secondary: "#018383",
        textPrimary: "#A47E3B",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      screens: {
        sm: { min: "320px", max: "425px" },
        md: { min: "426px", max: "768px" },
        lg: { min: "769px", max: "1024px" },
        xl: { min: "1025px", max: "1440px" },
      },
    },
  },
  plugins: [require("daisyui")],
};
