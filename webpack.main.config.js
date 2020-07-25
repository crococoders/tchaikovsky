const path = require('path');
const rules = require('./webpack.rules');

function srcPaths(src) {
  return path.join(__dirname, src);
}

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  target: 'electron-main',
  entry: './app/main/main.ts',
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    alias: {
      '@main': srcPaths('app/main'),
      '@models': srcPaths('app/models'),
      '@renderer': srcPaths('app/renderer'),
      "@static": srcPaths('./static'),
      "@styles": srcPaths('./static/styles'),
      "@components": srcPaths('./app/renderer/components'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json', '.scss']
  },
};