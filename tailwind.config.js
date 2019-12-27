/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    container: {
      center: true
    },
    maxHeight: {
      superSmall: "50px",
      small: "100px",
      logo: "200px",
      Ultra: "800px"
    },
    height: {
      live: "800px",
      live_sma: "450px"
    }
  },
  variants: {
    tableLayout: ["responsive", "hover", "focus"]
  },
  plugins: []
};
