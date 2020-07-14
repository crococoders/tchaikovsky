const rules = require("./webpack.rules");

const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const assets = ["styles", "fonts"]; // asset directories

function srcPaths(src) {
  return path.join(__dirname, src);
}

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

module.exports = {
  mode: "development",
  target: "electron-renderer",
  devtool: "source-map",
  module: {
    rules,
  },
  plugins: assets.map((asset) => {
    return new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "static", asset),
          to: path.resolve(__dirname, ".webpack/renderer", asset),
        },
      ],
    });
  }),
  resolve: {
    alias: {
      "@main": srcPaths("app/main"),
      "@models": srcPaths("app/models"),
      "@renderer": srcPaths("app/renderer"),
      "react-dom": "@hot-loader/react-dom",
      "@components": path.resolve("app/renderer/components"),
      "@styles": path.resolve("static/styles"),
    },
    extensions: [".js", ".ts", ".tsx", ".jsx", ".json"],
  },
};
