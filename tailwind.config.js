// tailwind.config.js
module.exports = {
    content: ['./src/app/**/*.{,ts,tsx}'],
    theme: {
      extend: {
        keyframes: {
          'move-along-x': {
            '0%': { transform: 'translateX(-100)' },
            '100%': { transform: 'translateX(100vw)' },
          },
        },
        animation: {
          'move-along-x': 'move-along-x 10s linear infinite',
        }
      }
    },
  };
  