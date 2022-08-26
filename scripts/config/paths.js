const path = require("path");

const cwd = process.cwd();
const resolve = (...paths) => path.resolve(cwd, ...paths);

module.exports = {
  dotenvDIR: resolve("scripts", "config", ".env"),
  appPath: resolve("."),
  buildDir: resolve("build"),
  publicDir: resolve("public"),
  IndexHTMLPath: resolve("public", "index.html"),
  IndexJSPath: resolve("src", "index.js"),
  packageJSONPath: resolve("package.json"),
  srcDir: resolve("src"),
  staticDir: resolve("public"),
  componentsDir: resolve("src/components"),
  authDir: resolve("src/auth"),
  assetsDir: resolve("src/assets"),
  areaDir: resolve("src/areas"),
  contextDir: resolve("src/context"),
  cacheDir: resolve(".temp-cache"),
  stylesDir: resolve("src/styles"),
  indexProdEntry: resolve("src/service-worker.js"),
};
