/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Overpass", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: "15px",
      },
      colors: {
        primary: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        grey: {
          100: "hsl(216, 12%, 54%)",
          200: "hsl(217, 12%, 63%) ",
        },
        blue: {
          100: "hsl(216, 12%, 8%)",
          200: "hsla(216, 19%, 14%, 1)",
          300: "hsla(216, 13%, 16%, 1)",
          400: "hsl(213, 19%, 18%)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
