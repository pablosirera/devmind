module.exports = {
  theme: {
    fill: (theme) => ({
      white: theme('colors.white'),
      red: theme('colors.red-400'),
    }),
  },
  experimental: {
    darkModeVariant: true,
  },
  dark: 'class',
}
