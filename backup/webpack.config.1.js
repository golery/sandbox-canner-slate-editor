const webpack = require("webpack");
module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  externals: {
      examplepackage: {
        root: "EXAMPLEXX"
      }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devServer: {
    contentBase: "./dist",
    hot: false
  }
};
