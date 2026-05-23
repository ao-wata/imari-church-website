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
        primary: "#0d1b3d",
        secondary: "#5a7ba8",
        accent: "#c9a96e",
      },
      fontFamily: {
        sans: [
          '"Hiragino Kaku Gothic Pro"',
          '"ヒラギノ角ゴ Pro W3"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
export default config;
