module.exports = {
  publicPath: '/vue3-xml-viewer',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.xml$/i,
          use: 'raw-loader',
        },
      ],
    },
  },
  css: { extract: false },
};
