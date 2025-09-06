// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0A0B0D',
        'background-secondary': '#18191B',
        'background-tertiary': '#252629',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A1A7',
        'text-tertiary': '#6B6C73',
        'accent-blue': '#0052FF',
        'accent-blue-hover': '#0040CC',
        'border-primary': '#2A2B2F',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config