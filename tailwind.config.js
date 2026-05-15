/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream-bg': '#000000',
        'cream-alt': '#0a0a0a',
        'border-soft': '#333333',
        'text-deep': '#ffffff',
        'text-muted': '#a3a3a3',
        'accent-gold': '#ef4444',
      }
    },
  },
  plugins: [],
}