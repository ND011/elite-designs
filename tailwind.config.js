/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F3F3F1",
        concrete: {
          50: "#F9F9F8",
          100: "#F3F3F1",
          200: "#E7E5DF",
          300: "#D5D3CC",
          400: "#B8B5AC",
          500: "#8C8980",
          600: "#63615A",
          800: "#2C2D2C",
          900: "#1E1F1E",
        },
        mineral: {
          100: "#D5D3CC",
          200: "#C4C1B8",
          800: "#2A2B2A",
          900: "#1E1F1E",
        },
        charcoal: "#1E1F1E",
        border: "#D5D3CC",
        accent: {
          terracotta: "#B85D43",
          sage: "#4A6B53",
          amber: "#C88A36",
          brass: "#9A7B4F",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

