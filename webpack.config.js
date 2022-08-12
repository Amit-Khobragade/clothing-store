const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [new HTMLWebpackPlugin({ template: "index.html" })],
  module: {
    rules: [
      {
        test: /\.?jsx?$/,
        exclude: /node_modules/,
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
        test: /.(svg|png|jpe?g)$/,
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
  devServer: {
    static: { directory: path.join(__dirname, "public") },
    compress: true,
    port: 3000,
    hot: true,
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx", ".component.jsx"],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      assets: path.resolve(__dirname, "src/assets"),
    },
  },
};
