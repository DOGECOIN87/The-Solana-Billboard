const path = require('path');

module.exports = {
  entry: './src/index.js',
  output:    {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer:    {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:    {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use:    ['style-loader', 'css-loader']
      },
      {
        test: /\.(glb|gltf)$/,
        use:    {
          loader: 'file-loader'
        }
      }
    ]
  }
};

