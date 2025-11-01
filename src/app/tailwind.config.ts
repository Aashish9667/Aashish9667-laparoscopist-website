/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}', // ✅ Only .tsx files
    './pages/**/*.{ts,tsx}', // ✅ Optional if you're using /pages
    './components/**/*.{ts,tsx}', // ✅ For all components
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        loraheebo: ['var(--font-lora)', 'var(--font-heebo)', 'sans-serif'],
      },
    },
  },
};
