const HTMLWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("inline-chunk-html-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const paths = require("./paths");

module.exports = (isDev) => {
  const WorkboxWebpackPlugin = isDev ? null : require("workbox-webpack-plugin");
  const plugins = [
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
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets/", to: "assets" },
        { from: "public/manifest.json", to: "manifest.json" },
        { from: "public/icons", to: "icons" },
      ],
    }),
  ];
  if (!isDev) {
    plugins.push(
      new WorkboxWebpackPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
      })
    );
    plugins.push(new InlineChunkHtmlPlugin(HTMLWebpackPlugin, [/runtime/]));
  }

  return {
    devServer: isDev
      ? {
          static: { directory: paths.publicDir },
          compress: true,
          port: 3000,
          hot: true,
          historyApiFallback: true,
        }
      : {},
    entry: isDev ? paths.IndexJSPath : paths.indexProdEntry,
    mode: isDev ? "development" : "production",
    output: {
      path: paths.buildDir,
      publicPath: "/",
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
        !isDev
          ? {
              enforce: "pre",
              exclude: /@babel(?:\/|\\{1,2})runtime/,
              test: /\.(js|mjs|jsx|ts|tsx|css)$/,
              loader: require.resolve("source-map-loader"),
            }
          : {},
        {
          test: /\.?jsx?$/,
          include: paths.srcDir,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
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
    plugins,
    resolve: {
      extensions: [".js", ".json", ".wasm", ".jsx", ".component.jsx"],
      alias: {
        components: paths.componentsDir,
        assets: paths.assetsDir,
        auth: paths.authDir,
        areas: paths.areaDir,
        context: paths.contextDir,
        styles: paths.stylesDir,
      },
    },
    cache: {
      type: "filesystem",
      cacheDirectory: paths.cacheDir,
    },
    devtool: !isDev ? "source-map" : "cheap-source-map",
  };
};
