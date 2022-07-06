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
        blob: "blob 20s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(300px, -150px) scale(1.5)"
          },
          "66%": {
            transform: "translate(-300px, 400px) scale(0.8)"
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
