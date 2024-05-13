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
        main_theme: "#03565A",
        light_theme: "#B3DAD9",
        text: "#FFFFFF"
      }
    },
  },
  plugins: [],
}

