const isDev = (process.env.isDev = !!process.argv.find(
  (arg) => arg === "--dev"
));

const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const paths = require("./config/paths");
const fs = require("fs-extra");

let err = require("dotenv").config({ path: paths.dotenvDIR }).error;
if (err) {
  console.error("INVALID .env");
  console.error(err);
  process.exit(1);
}

const webpackConf = require("./config/webpack.config")(isDev);
console.log(webpackConf);
const compiler = Webpack(webpackConf);

if (isDev) {
  console.log(process.env.isDev);
  const devServerConf = { ...webpackConf.devServer, open: true };
  const server = new WebpackDevServer(devServerConf, compiler);

  server.startCallback((err) => {
    if (err) {
      console.error("There has been some error in webpack: \n\n");
      console.error(err);
    }

    console.info("server had started");
  });
} else {
  fs.emptyDirSync(paths.buildDir);
  compiler.run((err, res) => {
    if (err) console.error(err);
  });
}
