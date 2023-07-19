/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#61B15A",
        primary: "#4BBB8B",
        secondary: "#018383"
      },
      fontFamily: {
        poppins: ["Poppins"]
      }
    },
  },
  plugins: [],
};
