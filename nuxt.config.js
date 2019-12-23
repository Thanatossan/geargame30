const bodyParser = require('body-parser')
const session = require('express-session')
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
            "nuxt-buefy", 
            [
              'nuxt-fontawesome', {
                imports: [
                 {
                   set: '@fortawesome/free-solid-svg-icons',
                   icons: ['fas']
                 },
                 {
                   set:'@fortawesome/free-brands-svg-icons',
                   icons: ['fab']
                 }
               ]
              }
        ],
        'vue-sweetalert2/nuxt'
      ],
  
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.baseURL || 'http://localhost:3000'
  },
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // session middleware
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 600000 }
    }),
    // Api middleware
    // We add /api/login & /api/logout routes
    '~/service'
  ],
};
