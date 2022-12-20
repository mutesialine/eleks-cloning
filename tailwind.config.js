/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
       25:"6.25rem",//100px
       7.5:"1.875rem"//30px
      },
      colors:{
        red:"#fd4925",
      },
      maxWidth:{
        "5xl":"64.8rem"//1036.8px
      },
    },
  },
  plugins: [],
};
