/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,jsx,js}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,jsx,js}',
    './src/**/*.{ts,tsx,jsx,js}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mts: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
}