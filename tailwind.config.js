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
          700: '#A6ADB1',
          800: '#5F5F6E',
          900: '#272B31',
        },
        'blue-main': {
          800: '#1C1C24',
          900: '#131419',
        },
      },
    },
  },
  experimental: {
    darkModeVariant: true,
  },
  dark: 'class',
}
