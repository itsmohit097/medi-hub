import { Testimonials } from './src/import-export/ImportExport';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        stickyNavbar: {
          "0%": {
            transform: "translateY(-40px)"
          },
          "100%": {
            transform: "translateY(0)"
          }
        }
      },
      colors: {
        dark_theme: "#113C49",
        main_theme: "#03565A",
        light_theme: "#B3DAD9",
        pastel_blue: "#E3EFFC",
        pastel_yellow: "#FDF1DB",
        pastel_pink: "#FCEDF2",
        cart_orange: "#FF8945",
        text: "#ffffff",
        text_grey: "#464646",
        medicine_banner: "#162C2A",
        testimonial_img_bg: "#579D93",
      },
      // height:{
      //   heroHeihgt:"calc"
      // }
    },
  },
  plugins: [],
}

