// helps to avoid problems whit path declarations
const path = require("path");
const HtmlWebpackPugin = require("html-webpack-plugin");

module.exports = {
  // mode: "production",
  mode: "development",
  // IO
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle[contenthash].js",
    // avoid acumulation of bundle1234.jses
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  // modules
  module: {
    rules: [
      // SASS type file
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // use any kind of image inside the page itself
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
  devtool: "source-map",
  // dev server
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    // automatically open port on default browser
    open: false,
    // HMR
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  // plugins
  plugins: [
    // html-webpack-plugin
    new HtmlWebpackPugin({
      filename: "index.html",
      title: "Webpack is cool!",
      // favicon: path.resolve(__dirname, "src/img/heart-favicon.png"),
      template: path.resolve(__dirname, "src/template.html"),
    }),
  ],
};
