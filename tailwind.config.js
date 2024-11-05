/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9a77f6", // Custom primary color
      },
      fontFamily: {
        title: ["JosefinSans-Bold", "sans-serif"], // Example title font
        body: ["Mulish-Regular", "sans-serif"], // Example body font
      },
    },
  },
  plugins: [],
};
