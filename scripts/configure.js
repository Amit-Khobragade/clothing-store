const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const paths = require("./config/paths");

process.env.isDev = !!process.argv.find((arg) => arg === "--dev");

let err = require("dotenv").config({ path: paths.dotenvDIR }).error;
if (err) {
  console.error("INVALID .env");
  console.error(err);
  process.exit(1);
}

const webpackConf = require("./config/webpack.config")();

const compiler = Webpack(webpackConf);
const devServerConf = { ...webpackConf.devServer, open: true };
const server = new WebpackDevServer(devServerConf, compiler);

server.startCallback((err) => {
  if (err) {
    console.error("There has been some error in webpack: \n\n");
    console.error(err);
  }

  console.info("server had started");
});
