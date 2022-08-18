const HTMLWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("inline-chunk-html-plugin");
const paths = require("./paths");

const { isDev } = process.env;

if (!isDev) {
  throw new Error("config not found");
}

module.exports = () => ({
  devServer: isDev
    ? {
        static: { directory: paths.publicDir },
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
      }
    : null,
  entry: paths.IndexJSPath,
  mode: isDev ? "development" : "production",
  output: {
    path: paths.buildDir,
    filename: isDev
      ? "static/js/[name].[contenthash:8].chunk.js"
      : "static/js/[name].chunk.js",
    assetModuleFilename: isDev
      ? "static/media/[name][ext]"
      : "static/media/[name].[hash][ext]",
  },
  module: {
    rules: [
      {
        test: /\.?jsx?$/,
        exclude: /(node_modules|config)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.(png|jpe?g)$/,
        use: ["file-loader"],
      },
      {
        test: /.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: paths.IndexHTMLPath,
      minify: isDev
        ? false
        : {
            collapseWhitespace: true,
            keepClosingSlash: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
          },
    }),
    new InlineChunkHtmlPlugin(HTMLWebpackPlugin, [/runtime/]),
  ],
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx", ".component.jsx"],
    alias: {
      components: paths.componentsDir,
      assets: paths.assetsDir,
      auth: paths.authDir,
      areas: paths.areaDir,
      context: paths.contextDir,
    },
  },
  devtool: "eval-source-map",
});
