const path = require('path');

module.exports = {
  mode: 'production',
  // Mode is development or production
  // development === build to development mode
  // production === build to product mode
  entry: './src/index.js',
  // entry is start file.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // When you build, save this options.
  // resolve === 경로 합체.
  // path.resolve(__dirname, 'dist') === `$(__dirname)/dist`

};