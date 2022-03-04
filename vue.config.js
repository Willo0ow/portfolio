module.exports = {
  lintOnSave: false,

  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: {
      alias: {
        "@": require("path").resolve(__dirname, "./src"),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};
