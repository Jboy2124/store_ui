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
    },
  },
  plugins: [require("daisyui")],
};
