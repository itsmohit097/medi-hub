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
        primary: "#02475b",
        border: "#285430",
        onhover: "#29666a",
        secondary: "#1a4b4e",
        body: "#f2f2f2",
        underline: "#00b38e",
        newColor: "#A76BC3",
        theme: "#11484e",
        text: "#FFFFFF"
      }
    },
  },
  plugins: [],
}

