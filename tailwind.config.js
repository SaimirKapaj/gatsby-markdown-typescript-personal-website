const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        indigo: colors.indigo
      },
      fontSize: {
        md: '1.125rem'
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)'
      }
    }
  },
  variants: {},
  plugins: []
};
