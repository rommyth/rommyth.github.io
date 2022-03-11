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
      }
    }
  },
  plugins: [],
}
