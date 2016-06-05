const merge = require('webpack-merge')
const webpack = require('webpack')
const TARGET = process.env.npm_lifecycle_event
process.env.BABEL_ENV = TARGET

const common = {
  entry: {
    app: './index.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  externals: {
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js?$/,
        loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
        exclude: /node_modules/
      }
    ]
  }
}

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map'
  })
}

if (TARGET === 'build') {
  module.exports = merge(common, {})
}
