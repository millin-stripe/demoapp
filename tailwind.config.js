const demoConfig = require('./demo.config');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-color': demoConfig.branding.brandColor,
        'accent-color': demoConfig.branding.accentColor,
        'blurple': '#635BFF',
        'light-gray': '#F6F9FC',
        'dark-gray': '#425466',
        'slate': '#0A2540',
        'pale-blurple': '#7A73FF',
        'cyan': '#80E9FF',
        'turquoise': '#11EFE3',
        'amber': '#FFBB00',
        'magenta': '#FF80FF',
        'cobalt': "#0048E5",
        'cerulean': "#0073E6",
        'heliotrope': "#AD4FFB",

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
