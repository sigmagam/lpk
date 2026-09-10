import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf2f2",
          100: "#fbe4e4",
          500: "#d32f2f",
          600: "#b31b1b",
          700: "#911515",
          900: "#4a0b0b",
        },
      },
      maxWidth: {
        site: "76rem", // 1216px
      },
    },
  },
  plugins: [],
};
export default config;
