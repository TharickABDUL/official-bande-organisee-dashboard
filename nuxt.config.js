export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'jobboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/tailwind.css',
    '~/assets/theme.css'
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/svg','@nuxtjs/color-mode'],
  devModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  server: {
    port:8000
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'http://localhost:3000/api/v2/modifiedAndCreateAccount', method: 'post', propertyName: 'token' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: 'http://localhost:3000/api/v2/modifiedAndCreateAccount', method: 'get', propertyName: 'user' }
        },
        tokenRequired: false,
        tokenType: '',
        // globalToken: true,
        // autoFetchUser: true
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js',
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
