/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0A0B0D',
        'background-secondary': '#18191B',
        'background-tertiary': '#252629',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A1A7',
        'text-tertiary': '#6B6C73',
        'accent-blue': '#0052FF',
        'accent-blue-hover': '#0040CC',
        'border-primary': '#2A2B2F',
        'border-secondary': '#3A3B40',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
