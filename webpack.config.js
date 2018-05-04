const path = require('path')
// const LiveReloadPlugin = require('webpack-livereload-plugin')


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, 'public')
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  // plugins: [
  //   new LiveReloadPlugin()
  // ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_moudules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
}