const bodyParser = require("body-parser");
const session = require("express-session");
export default {
  target: 'static',
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
  plugins: [{ src: "~plugins/ga.js", mode: "client" }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-analytics"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ],

    "vue-sweetalert2/nuxt"
  ],
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/fontawesome-free-solid"
      }
    ]
  },

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
    baseURL: process.env.baseURL || "http://localhost:3000"
  },
  serverMiddleware: [
    // body-parser middleware
    // bodyParser.json(),
    // // session middleware
    // session({
    //   secret: "secret",
    //   resave: false,
    //   saveUninitialized: false,
    //   cookie: { maxAge: 60000000 }
    // }),
    // // Api middleware
    // // We add /api/login & /api/logout routes
    // "~/service"
  ],
  server: {
    port: 2000, // default: 3000
    host: "0.0.0.0" // default: localhost
  },
  generate: {
    fallback: true
  }
  // googleAnalytics: {
  //   id: "UA-155025579-1"
  // }
};
