/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "lavender": "#CDB4DB",
      "lightPink": "#FFC8DD",
      "lighterPink": "#FFEBF2",
      "darkPink": "#FFAFCC",
      "darkerPink": "#FF70A5",
      "lightBlue": "#BDE0FE",
      "darkBlue": "#A2D2FF",
      "white": "#ffffff",
      "gray": "#6b7280",
      "black": "#000000",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
