export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - mix-store',
    title: 'mix-store',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: ['https://fonts.googleapis.com/css2?family=Poppins'],
      },
      {
        rel: 'stylesheet',
        href: [
          'https://fonts.googleapis.com/css2?family=Passion+One&display=swap',
        ],
      },
    ],
  },

  // Global transition
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/vuetify.js', '~plugins/vue-simple-alert.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    optionsPath: './plugins/vuetify.js',
    customVariables: ['~/assets/scss/main.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['vuetify'],
    transpile: ['vue-simple-alert'],
    loaders: {
      // vue: {
      //   prettify: false,
      // },
    },
  },

  dev: {
    loaders: {
      // vue: {
      //   prettify: false,
      // },
    },
  },
}
