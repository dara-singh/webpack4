/****************************************
* ENvironment and imports
*****************************************/

const path = require('path');

/***************************************
* Entry
****************************************/



module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
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
