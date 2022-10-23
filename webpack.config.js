const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'build'),
    libraryTarget: 'umd',
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  externals: {
    react: 'react'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['css-loader'],
      },
      {
        test: /\.tsx?/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  }
}