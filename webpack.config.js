const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./resources/js/admin.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: '/public'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};