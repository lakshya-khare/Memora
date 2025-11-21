/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'apple-gray': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        'apple-blue': {
          400: '#64b5f6',
          500: '#007AFF',
          600: '#0051D5',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
      },
      borderRadius: {
        'apple': '10px',
        'apple-lg': '16px',
        'apple-xl': '20px',
        'apple-2xl': '24px',
      },
      boxShadow: {
        'apple': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'apple-md': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'apple-lg': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'apple-xl': '0 20px 50px rgba(0, 0, 0, 0.15)',
      },
      backdropBlur: {
        'apple': '24px',
        'apple-lg': '40px',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '380': '380ms',
        '420': '420ms',
        '480': '480ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        'scale-in': 'scaleIn 0.38s cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
