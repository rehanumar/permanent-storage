const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  plugins: [new EsmWebpackPlugin()],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "PermanentStorage",
    libraryTarget: "var",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/esm",
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["transform-class-properties"],
          },
        },
      },
    ],
  },
};
