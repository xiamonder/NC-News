/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#F8F8F8",
      red: "#C44536",
      green: "#68906B",
      "green-light": "#9DBF9E",
      "gray-dark": "#333333",
      gray: "4F4F4F",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Jost", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
