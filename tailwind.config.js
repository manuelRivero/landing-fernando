/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      container: {
        // you can configure the container to be centered
        center: true,
  
        // or have default horizontal padding
        padding: '16px',
  
        // default breakpoints but with 40px removed
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1366px'
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "9xl": "110px",
        "3xl": "60px",
        "2xl": "37px",
        normal: "30px",
        little: "20px",
      },
      colors: {
        customPink: {
          400: "#E886DF",
          500: "#F94074",
        },
        customPurple: {
          500: "#5A56EC",
          600: "#2146B6"
        },
        customBlue: {
          500: "#2C5DF3",
          600: "#2B0B57",
        },
        customOrange: {
          500: "#E85F30",
        },
        customGreen: {
          500: "#1BE5A6",
        },
      },
      lineHeight: {
        customLineHeight: "7rem"
      }
    },
  },
  plugins: [],
};
