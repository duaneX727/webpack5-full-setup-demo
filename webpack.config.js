const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
 let mode = "development";

// if (process.env.NODE_ENV === "production") {
//   mode = "production";
// }

module.exports = {
  mode: process.env.NODE_ENV === "production" ?  "production": "development",

  target: mode === "development" ?  "web" : "browserslist",

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
        test:/\.(s[a|c]|c)ss$/i,
        use:[MiniCssExtractPlugin.loader, "css-loader","postcss-loader" ,"sass-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map",
  devServer: {
    hot: true,
    static: "./dist",
    port: 5003
  }
}
