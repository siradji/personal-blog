module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'main-red': "#ff4a57",
      'main-white': "#fefefe", 
      'main-blue': "#1f2235",
      'soft-blue': "#23263a"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
