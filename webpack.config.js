/****************************************
* ENvironment and imports
*****************************************/

const path = require('path');
 const webpack = require('webpack');

/***************************************
* Entry
****************************************/



module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
     contentBase: './dist',
     hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
 module: {
   rules: [
    {
       test: /\.css$/,
       use: [
         'style-loader',
         'css-loader'
       ]
     }
   ]
 }
};
