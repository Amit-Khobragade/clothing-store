const HTMLWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("inline-chunk-html-plugin");
const paths = require("./paths");

module.exports = (isDev) => ({
  devServer: isDev
    ? {
        static: { directory: paths.publicDir },
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
      }
    : {},
  entry: paths.IndexJSPath,
  mode: isDev ? "development" : "production",
  output: {
    path: paths.buildDir,
    filename: !isDev
      ? "static/js/[name].[contenthash:8].js"
      : "static/js/[name].js",
    chunkFilename: !isDev
      ? "static/js/[name].[contenthash:8].chunk.js"
      : "static/js/[name].chunk.js",
    assetModuleFilename: !isDev
      ? "static/media/[name].[hash][ext]"
      : "static/media/[name][ext]",
  },
  module: {
    strictExportPresence: true,
    rules: [
      !isDev && {
        enforce: "pre",
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        test: /\.(js|mjs|jsx|ts|tsx|css)$/,
        loader: require.resolve("source-map-loader"),
      },
      {
        test: /\.?jsx?$/,
        include: paths.srcDir,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              // cacheDirectories: true,
              compact: !isDev,
            },
          },
        ],
      },
      {
        test: /.(png|jpe?g)$/,
        use: ["file-loader"],
      },
      {
        test: /.svg$/,
        use: ["@svgr/webpack"],
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
  devtool: "source-map",
});
