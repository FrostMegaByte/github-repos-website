const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "none", // Remove eval() from dist/main.js
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
});
