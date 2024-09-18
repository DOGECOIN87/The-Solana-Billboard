const path = require('path');

module.exports = {
  entry: './src/index.js',
  output:    {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer:    {
    static: path.join(__dirname, 'public'),
    historyApiFallback: true,
    port: 3000,
    hot: true
  },
  module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    // ... other rules
  ]
},
resolve: {
  extensions: ['.js', '.jsx']
}

