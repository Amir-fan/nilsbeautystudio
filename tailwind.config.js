/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: { DEFAULT: '#F4EAE0', light: '#F8F1EA', porcelain: '#FFFAF5' },
        beige: { DEFAULT: '#E6D3C1', muted: '#D4BFA8' },
        taupe: { DEFAULT: '#B99D85', warm: '#A88970' },
        walnut: { DEFAULT: '#694026', light: '#7A4F33', dark: '#4A2D1A' },
        caramel: { DEFAULT: '#92552F', rich: '#7D4828' },
        chocolate: { DEFAULT: '#382116', deep: '#24140E' },
        champagne: { DEFAULT: '#C69A6A', light: '#D4AE84', dark: '#B08555' },
        brand: {
          text: '#281810',
          'text-secondary': '#6F6056',
          'text-muted': '#9B8878',
          border: '#E0CDB8',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      },
      boxShadow: {
        'brand-sm': '0 2px 8px rgba(105, 64, 38, 0.08)',
        'brand': '0 4px 16px rgba(105, 64, 38, 0.12)',
        'brand-lg': '0 8px 32px rgba(105, 64, 38, 0.16)',
        'brand-xl': '0 16px 48px rgba(105, 64, 38, 0.2)',
      },
    },
  },
  plugins: [],
}
