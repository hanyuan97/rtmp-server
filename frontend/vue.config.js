module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: "dist",
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "LTE Streaming Lab";
      return args;
    });
  }
}
