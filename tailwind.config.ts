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
        navy: {
          50: '#F4F7FB',
          100: '#E4ECF5',
          200: '#CAD9EB',
          300: '#A4BEDC',
          400: '#739BC8',
          500: '#4D7BB2',
          600: '#346096',
          700: '#234774',
          800: '#142F52',
          900: '#0B1B32',
          950: '#060F1E',
        },
        primary: {
          50: '#F0F5FA',
          100: '#E1EBF5',
          200: '#C8DBEB',
          300: '#A1C2DD',
          400: '#73A2CD',
          500: '#4B84BC',
          600: '#2E69A3',
          700: '#1D4F88',
          800: '#133560',
          900: '#0C203E',
          950: '#061122',
        },
        vermilion: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#C8102E', // Restrained Japanese Crimson
          700: '#A10D25',
          800: '#7B0A1C',
          900: '#560714',
          950: '#34030B',
        },
        accent: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#C8102E',
          700: '#A10D25',
          800: '#7B0A1C',
          900: '#560714',
          950: '#34030B',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['var(--font-heading)', 'Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        site: '1280px',
        dashboard: '1440px',
      },
      boxShadow: {
        'subtle-3d': '0 20px 25px -5px rgba(11, 27, 50, 0.08), 0 8px 10px -6px rgba(11, 27, 50, 0.04)',
        'lift-3d': '0 30px 40px -15px rgba(11, 27, 50, 0.16), 0 10px 15px -3px rgba(11, 27, 50, 0.06)',
        'card-glass': '0 8px 30px rgba(0, 0, 0, 0.04)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float3D: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(0deg)' },
          '50%': { transform: 'translateY(-6px) rotateX(2deg)' },
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 2.5s ease-in-out infinite',
        'float-3d': 'float3D 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
