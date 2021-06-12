## Use it!
```cmd
npx degit hoseong511/vue3-webpack-template [Project name]
```
## package.json
  ```json
  {
    "devDependencies": {
      "@babel/core": "^7.14.3",
      "@babel/plugin-transform-runtime": "^7.14.3",
      "@babel/preset-env": "^7.14.2",
      "@vue/compiler-sfc": "^3.1.1",
      "autoprefixer": "^10.2.5",
      "babel-eslint": "^10.1.0",
      "babel-loader": "^8.2.2",
      "copy-webpack-plugin": "^8.1.1",
      "css-loader": "^5.2.5",
      "eslint": "^7.28.0",
      "eslint-plugin-vue": "^7.11.0",
      "file-loader": "^6.2.0",
      "html-webpack-plugin": "^5.3.1",
      "postcss": "^8.3.0",
      "postcss-loader": "^5.3.0",
      "sass": "^1.33.0",
      "sass-loader": "^11.1.1",
      "style-loader": "^2.0.0",
      "vue-loader": "^16.2.0",
      "vue-style-loader": "^4.1.3",
      "webpack": "^5.37.1",
      "webpack-cli": "^4.7.0",
      "webpack-dev-server": "^4.0.0-beta.3"
    },
    "browserslist": [
      "> 1%",
      "last 2 versions"
    ],
    "dependencies": {
      "vue": "^3.1.1"
    }
  }
  ```
## webpack.config.js
  ```js
  {
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
  }
  ```
  ## .eslintrc.js
  ```js
    {
      module.exports = {
        env: {
          browser: true,
          node: true
        },
        extends: [
          // vue
          // 'plugin:vue/vue3-essential', // level1
          'plugin:vue/vue3-strongly-recommended', // level2
          // 'plugin:vue/vue3-recommended', // level3
          // js
          'eslint:recommended'
        ],
        parserOptions: {
          parser: 'babel-eslint'
        },
        rules: {
          "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
          }],
          "vue/html-self-closing": ["error", {
            "html": {
              "void": "always",
              "normal": "never",
              "component": "always"
            },
            "svg": "always",
            "math": "always"
          }],
          "vue/max-attributes-per-line": ["error", {
            "singleline": {
              "max": 3,
              "allowFirstLine": true
            },      
            "multiline": {
              "max": 1,
              "allowFirstLine": false
            }
          }]
        }
      }
    }
  ```