const path = require('path');
// let mode = "development";

// if (process.env.NODE_ENV === "production") {
//   mode = "production";
// }

module.exports = {
  mode: process.env.NODE_ENV === "production" ?  "production": "development",

  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
   filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    static: "./dist",
    port: 5003
  }
}
