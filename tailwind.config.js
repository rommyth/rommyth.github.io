module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/background.jpg')"
      },
      letterSpacing: {
        2: '0.2em',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      spacing: {
        zero: '0',
        'screen/1': '20vh',
        'screen/2': '40vh',
        'screen/3': '60vh',
        'screen/4': '80vh',
      },
      fontSize: {
        'tiny': '.625rem'
      },
      gridTemplateColumns: {
        'custom': 'auto max-content'
      },
      animation: {
        blob: "blob 7s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(100px, -250px) scale(1.2)"
          },
          "66%": {
            transform: "translate(-100px, 300px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      }
    }
  },
  plugins: [],
}
