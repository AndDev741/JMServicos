/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "200px",
      sm: "400px",
      md: "700px",
      lg: "1150px",
      "2xl": "1536px",
    },
    prefix: "tw-",
    extend: {
      colors: {
        mainYellow: "#F8CE39",
        Greybg: "#463A3A"
      },

      boxShadow: {
        footerInputShadow: "0px 3.33333px 3.33333px rgba(0, 0, 0, 0.25)",
        navBtnShadow: "-1px 2px 5px 0px #f47d31",
      },
      borderRadius: {
        footerBorderR: "6px 0px 0px 6px",
      },
      fontFamily: {
        hFont: ["Work Sans", "sans-serif"],
        pFont: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwindcss-opacity'),
  ],
};
