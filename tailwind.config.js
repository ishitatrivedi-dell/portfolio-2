/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F59E0B', // Amber-500 (Yellow)
        'primary-dark': '#D97706', // Amber-600
        'primary-light': '#FCD34D', // Amber-400 (Lighter Yellow)
        secondary: '#FBBF24', // Amber-400
        accent: '#F59E0B', // Amber-500
        dark: '#000000', // Pure Black
        'dark-light': '#1a1a1a', // Very dark gray
        gray: '#9CA3AF', // Amber-700 (Dark yellow-gray)
        'gray-light': '#FEF3C7', // Amber-50 (Very light yellow)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(245, 158, 11, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
