const path = require('path');

module.exports = {
  entry: './out/app.js',
  mode: 'production',
  // devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
