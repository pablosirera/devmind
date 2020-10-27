export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'devmind',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org
    '@nuxtjs/color-mode',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
    // https://firebase.nuxtjs.org/
    '@nuxtjs/firebase',
  ],

  colorMode: {
    preference: 'dark',
    fallback: 'light',
    classSuffix: '',
  },

  firebase: {
    config: {
      apiKey: process.env.VUE_APP_FIREBASE_KEY,
      authDomain: 'devmind-twitch.firebaseapp.com',
      databaseURL: 'https://devmind-twitch.firebaseio.com',
      projectId: 'devmind-twitch',
      storageBucket: 'devmind-twitch.appspot.com',
      messagingSenderId: '688715005177',
      appId: '1:688715005177:web:0b4f70b06de7851a347628',
      measurementId: 'G-KKY338JQ98',
    },
    services: {
      auth: true,
      firestore: true,
      storage: true,
      analytics: true,
      perfomance: true,
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  env: {
    VUE_APP_FIREBASE_KEY: process.env.VUE_APP_FIREBASE_KEY,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
