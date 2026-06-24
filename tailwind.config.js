/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#050505',
        'brand-secondary': '#0D1117',
        'brand-surface': '#111827',
        'brand-accent': '#3B82F6',
        'brand-muted': '#94A3B8',
        'brand-text': '#FFFFFF',
        'brand-text-secondary': '#CBD5E1',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}