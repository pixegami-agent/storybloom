import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: "#FFD93D",
          500: "#f0c800",
        },
        pink: {
          400: "#FF6B9D",
          500: "#e85589",
        },
        blue: {
          400: "#4CC9F0",
        },
        purple: {
          400: "#C77DFF",
        },
      },
      fontFamily: {
        display: ["Fredoka One", "cursive"],
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
