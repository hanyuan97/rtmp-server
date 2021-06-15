module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: "dist",
  css: {
    extract: { ignoreOrder: true }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      const externals = {
        vue: "Vue",
        axios: "axios",
        "vue-router": "VueRouter",
        vuetify: "Vuetify",
        vuex: "Vuex",
        "video.js": "videojs"
        
      };
      config.externals(externals);
      const cdn = {
        css: [
          "https://cdn.jsdelivr.net/npm/vuetify@2.4.x/dist/vuetify.min.css",
          "https://vjs.zencdn.net/7.11.4/video-js.css"
        ],
        js: [
          // Vue
          "https://cdn.jsdelivr.net/npm/vue@2.6",
          // vue-router
          "https://unpkg.com/vue-router@3.2.0/dist/vue-router.min.js",
          // vuex
          "https://unpkg.com/vuex@3.4.0/dist/vuex.min.js",
          // vuetify
          "https://cdn.jsdelivr.net/npm/vuetify@2.2.x/dist/vuetify.min.js",
          // axios
          "https://cdn.jsdelivr.net/npm/axios@0.19/dist/axios.min.js",
          // video.js
          "https://vjs.zencdn.net/7.11.4/video.min.js"
        ]
      };
      config.plugin("html").tap(args => {
        args[0].cdn = cdn;
        return args;
      });
    }
    config.plugin("html").tap(args => {
      args[0].title = "LTE Streaming Lab";
      return args;
    });
  }
}
