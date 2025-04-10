/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        default: '.5rem',
        sm: '1rem'
      }
    },
    extend: {
      colors: {
        primary: {
          light: '#3DA661',
          dark: '#011708'
        }
      },
      backgroundImage: {
        'hero-custom': 'linear-gradient(314.66deg, #024819 -16.23%, #212121 46.55%)',
        primary: {
          light: '#3DA661',
          dark: '#011708'
        }
      },
      // keyframes: {
      //   gradientWave: {
      //     '0%': { backgroundPosition: '0% 50%' },
      //     '100%': { backgroundPosition: '200% 50%' },
      //   },
      // },
      // animation: {
      //   'gradient-wave': 'gradientWave 5s linear infinite reverse',
      // },
      // backgroundSize: {
      //   '200': '200% 200%',
      // },
    },
  },
  plugins: [],
}