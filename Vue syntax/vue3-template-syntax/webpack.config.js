const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
//export
module.exports = {
  resolve: {
    extensions: ['.js', '.vue'], // 확장자 생략하기
    alias: { // 경로 별칭
      '~': path.join(__dirname, 'src'),
      'assets': path.join(__dirname, 'src/assets')
    }
  },

  // 파일을 읽어들이기 시작하는 진입점
  entry: './src/main.js',
  output: {
    // path: path.resolve(__dirname, 'dist'), // output의 path는 절대경로를 사용!
    // filename: 'main.js', // default-> dist
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader', //vue style
          'style-loader',
          'css-loader', //3
          'postcss-loader', //2  // 순서가 중요하다.
          'sass-loader' // 1
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static'}
      ]
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    host: 'localhost'
  }
} 