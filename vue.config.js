module.exports = {
  publicPath: '/demo',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.xml$/i,
          use: 'raw-loader',
        },
      ]
    },
    // externals: {
    //   "@vue/composition-api": "@vue/composition-api"
    // }
  },
  css: {
    extract: false,
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/_variables.scss";
        `
      }
    }
  }
}