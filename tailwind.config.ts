import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ocean-blue": {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#b9e6fe",
          300: "#7dd3fd",
          400: "#38b6ff",
          500: "#0ea2e9",
          600: "#0284c5",
          700: "#036ba1",
          800: "#065986",
          900: "#0c4a6e",
        },
        sand: {
          50: "#faf8f1",
          100: "#f5efdc",
          200: "#eaddb9",
          300: "#dfc78b",
          400: "#d5b165",
          500: "#c99846",
          600: "#bb823c",
          700: "#9b6835",
          800: "#805430",
          900: "#6c462c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;
