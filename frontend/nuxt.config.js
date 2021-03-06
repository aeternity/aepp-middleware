const pkg = require('./package')

module.exports = {
  mode: process.env.NUXT_APP_MODE || 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'æternal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    continuous: true,
    color: '#FF0D6A'
  },

  /*
  ** Global CSS
  */
  css: [
    { src: 'styles/index.scss', lang: 'scss' },
    {
      src: 'vue-multiselect/dist/vue-multiselect.min.css',
      lang: 'css'
    }
  ],
  env: {
    middlewareURL: process.env.NUXT_APP_NODE_URL || 'https://mainnet.aeternal.io',
    middlewareWS: process.env.NUXT_APP_NODE_WS || 'wss://mainnet.aeternal.io/websocket',
    networkName: process.env.NUXT_APP_NETWORK_NAME || 'MAIN NET',
    swaggerHub: process.env.NUXT_APP_SWAGGER_HUB || 'https://app.swaggerhub.com/apis/sshekhar/aeternal/1.0',
    enableFaucet: process.env.NUXT_APP_ENABLE_FAUCET || false,
    faucetAPI: process.env.NUXT_APP_FAUCET_API || 'https://testnet.faucet.aepps.com/account'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/directives/copyToClipboard.js' },
    { src: '~/plugins/directives/removeSpacesOnCopy.js' },
    { src: '~/plugins/directives/vueSliderComponent.js', mode: 'client' }
  ],
  /*
    ** Router config
    */
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */

    postcss: {
      plugins: {
        autoprefixer: {}
      }
    },
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
