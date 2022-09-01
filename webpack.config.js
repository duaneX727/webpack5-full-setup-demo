const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
let mode = "development";

// i
module.exports = {
  mode: process.env.NODE_ENV === "production" ?  "production": "development",

  target: mode === "development" ?  "web" : "browserslist",

  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },

  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: '[name].[ext]',
    assetModuleFilename: "images/[name][hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type:"asset",
        /* "asset/resource"  // loads assets needed into the "dist" folder.
           "asset/inline"// for small images, no additional request to hit the server
           "asset"       // hybrid between asset/resouce and asset/inline. Webpack determines by size,  
                            whether to load the asset inline to main.js or to the "dist" folder.
        */
       /* 
       Optional load size adjustment
       //  parser: {
       //    dataUrlCondition: {
       //     maxSize: 30 * 1024
       //    }
       //   }
       */
      },
      {   
        test:/\.(s[a|c]|c)ss$/i,
        use:[
          {
            loader:  MiniCssExtractPlugin.loader,
            options: {publicPath: ""}
          },
          "css-loader",
          "postcss-loader" ,
          "sass-loader"
        ]
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
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    static: "./dist",
    port: 5003
  }
}
