const path = require('path');

module.exports = {
  entry: './src/components/',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'node_modules', '-components'),
  },
};