var path = require('path')
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  devtool: 'eval-source-map',
  externals: {
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'},
      {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?functions=selector-parse&root=' + path.resolve('./js')}
    ]
  }
}
