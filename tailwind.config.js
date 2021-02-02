module.exports = {
  theme: {
    extend: {
      fill: (theme) => ({
        white: theme('colors.white'),
      }),
      backgroundColor: (theme) => ({
        light: theme('colors.gray-main.300'),
        dark: theme('colors.gray-main.1100'),
      }),
      colors: {
        'red-main': {
          600: '#F43D35',
        },
        'gray-main': {
          300: '#EAEDF2',
          400: '#DDE1E8',
          700: '#A6ADB1',
          800: '#5F5F6E',
          850: '#2D2D3A',
          900: '#272B31',
          950: '#282B31',
          1000: '#1C1C24',
          1100: '#131419',
        },
        'violet-main': {
          700: '#4447E2',
        },
      },
    },
  },
  experimental: {
    darkModeVariant: true,
  },
  dark: 'class',
}
