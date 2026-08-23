/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B0D10',
          900: '#0D0F12',
          850: '#111418',
          800: '#15181D',
          700: '#1B1F26',
          600: '#262B33',
          500: '#3A4048',
        },
        paper: {
          100: '#EDEBE5',
          200: '#E8E6E1',
          300: '#C7C4BC',
          400: '#8B93A1',
          500: '#6B7280',
        },
        signal: {
          DEFAULT: '#D9A441',
          dim: '#8A6C2E',
          bright: '#F0C368',
        },
        trace: {
          DEFAULT: '#5B8AA6',
          dim: '#3E5E70',
          bright: '#82B4CF',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.06em' }],
      },
      backgroundImage: {
        'grid-fine':
          'linear-gradient(to right, rgba(198,196,188,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(198,196,188,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-fine': '48px 48px',
      },
      animation: {
        'pulse-slow': 'pulse 3.5s ease-in-out infinite',
        'spark-travel': 'spark-travel 1.8s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        'spark-travel': {
          '0%': { transform: 'translateX(0)', opacity: '0' },
          '12%': { opacity: '1' },
          '88%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        'fade-up': {
          '0%': { transform: 'translateY(14px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};