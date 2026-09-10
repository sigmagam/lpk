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
        brand: {
          50: '#fcf3f3',
          100: '#f8e4e4',
          200: '#f1cbcb',
          300: '#e7a6a6',
          400: '#d97878',
          500: '#c85050',
          600: '#b33535',
          700: '#962929',
          800: '#7d2424',
          900: '#682222',
        },
      },
      maxWidth: {
        site: '1280px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
