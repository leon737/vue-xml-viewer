module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.xml$/i,
          use: 'raw-loader',
        },
      ]
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/_variables.scss";
        `
      }
    }
  }
}