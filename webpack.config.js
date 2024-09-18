const path = require('path');

module.exports = {
  // Entry point for the application
  entry: './src/index.js',
  
  // Output settings for the bundled code
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  // Webpack dev server settings
  devServer: {
    static: path.join(__dirname, 'public'), // Folder to serve static files from
    historyApiFallback: true,               // Fallback for HTML5 history API
    port: 3000,                             // Port for the dev server
    hot: true                               // Enable Hot Module Replacement
  },

  // Define how Webpack should transform and bundle different file types
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,                // Apply this rule to JS and JSX files
        exclude: /node_modules/,            // Ignore files in node_modules
        use: {
          loader: 'babel-loader',           // Use Babel loader for transpiling JavaScript
        }
      },
      {
        test: /\.css$/,                     // Apply this rule to CSS files
        use: ['style-loader', 'css-loader'],// Load CSS with style-loader and css-loader
      },
      {
        test: /\.(png|jpg|gif|svg)$/,       // Apply this rule to image files
        use: {
          loader: 'file-loader',            // Use file-loader for handling image files
          options: {
            name: '[name].[ext]',           // Keep original file name and extension
            outputPath: 'images/',          // Output path for images
          }
        }
      }
      // Add more rules here as necessary (e.g., SCSS, fonts, etc.)
    ]
  },

  // Resolve these file extensions without specifying the extension in imports
  resolve: {
    extensions: ['.js', '.jsx', '.css']     // Resolve .js, .jsx, and .css files automatically
  }
};
