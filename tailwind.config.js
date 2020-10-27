module.exports = {
  theme: {
    extend: {
      fill: (theme) => ({
        white: theme('colors.white'),
      }),
      backgroundColor: (theme) => ({
        light: theme('colors.gray-main.300'),
        dark: theme('colors.blue-main.900'),
      }),
      colors: {
        'red-main': {
          600: '#F43D35',
        },
        'gray-main': {
          300: '#EAEDF2',
        },
        'blue-main': {
          800: '#0d1131',
          900: '#070919',
        },
      },
    },
  },
  experimental: {
    darkModeVariant: true,
  },
  dark: 'class',
}
