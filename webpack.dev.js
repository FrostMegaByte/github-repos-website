const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "none", // Remove eval() from dist/main.js
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
