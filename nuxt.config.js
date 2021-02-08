export default {
  server: {
    host: '0.0.0.0' // default: localhost
  },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  loading: {
    color: 'black',
    height: '5px'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NazNuts',
    meta: [
      { charset: 'utf-8' },
      {name:'apple-mobile-web-app-status-bar-style',content:'#79c143'},
      {name:'theme-color',content:'#79c143'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700&display=swap'},

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      '~/plugins/axios',
    '~/plugins/i18n.js',
    '~/plugins/vue-perfect-scrollbar.js',
    '~/plugins/vue-js-modal.js',
  {src:'./plugins/vue-google-oauth2',ssr: false},
  { src: '~/plugins/vuex-persist', ssr: false }
    ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
   'v-shared-element/nuxt',

  'nuxt-i18n',
  

    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/toast',

    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  
  vSharedElement: {
    easing:'ease-in-out'
   },
  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'he',
        name: 'Hebrew',
        dir: 'rtl',
        file: 'he.js'

      },
      {
        code: 'ar',
        name: 'Arabic',
        dir: 'rtl',
        file: 'ar.js'

      },{
        code: 'en',
        name: 'English',
        dir: 'ltr',
        file: 'en.js'

      },
    ],
    vueI18nLoader: true,
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'he',
    vueI18n: { fallbackLocale: 'he' },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  router: {
    middleware: 'authenticated'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
