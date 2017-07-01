const cowtechWebpack = require("@cowtech/webpack-config");

module.exports = function(env){
  return cowtechWebpack.webpackConfig(env, {
    entries: {
      "js/app.js": "./src/js/application.jsx",
      "sw.js": "./src/js/service-worker.js"
    },
    indexFile: "src/index.html.jsx",
    transpilers: ["babel"],
    distFolder: "dist"
  });
};
