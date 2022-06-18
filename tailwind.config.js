module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
        tight: '-.015em'
    },
    extend: {
      animation:['group-hover'],
      height:{
        'half-screen':'50vh',
      }
    }
  },
  plugins: [],
}
