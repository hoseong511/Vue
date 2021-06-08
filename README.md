## basic-cdn
- cdn을 이용해서 간단하게 vue의 원리를 살펴본다.
- [vue.js](https://v3.vuejs.org/guide/installation.html#cdn)에서 cdn ```<script src="https://unpkg.com/vue@next"></script>```을 이용
  ```html
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script src="https://unpkg.com/vue@next"></script>
    </head>
    <body>
      <div id="app">
        <h1>{{ message }}</h1>
      </div>
      <script>
        Vue.createApp({
          data() {
            return {
              message: 'hello vue!'
            }
          }
        }).mount('#app')
      </script>
    </body>
  </html>
  ```

## vue-cli
- vue-cli로 vue시작하기
  ```cmd
  npm i @vue/cli
  npx vue create [projectname]
  # vue3 이용
  cd [projectname]
  npm run dev
  ```
- Vetur 플러그인 추가

## webpack으로 vue 구성하기
- 기존에 만들어 놓았던 [webpack-template](https://github.com/hoseong511/bundler-basic-app)를 이용한다.
  ```cmd
    npx degit hoseong511/bundler-basic-app vue3-webpack-template
    # git clone이 아닌 방식으로 .git 없이 깨끗한 상태로 프로젝트이름을 바꿔 이용할 수 있다.
    cd vue3-webpack-template
    npm i vue@next
    npm i -D vue-loader@next vue-style-loader @vue/compiler-sfc
    npm i -D file-loader 
    # webpack.config.js의 module>rules확인
  ```
- webpack setting
  - vue를 위한
    ```js
      module: {
        rules: [
          {
            test: /\.vue$/,
            use: 'vue-loader',
          },
          ,
          {
            test: /\.s?css$/,
            use: [
              'vue-style-loader', //vue의 style태그를 이용
              'style-loader',
              'css-loader', //3
              'postcss-loader', //2  
              'sass-loader' // 1
            ]
          },
        ]
      }
    ```

  - ```const { VueLoaderPlugin } = require('vue-loader');```
    ```js
      plugins: [
        new VueLoaderPlugin()
    ],
    ```
  - extensions랑 alias
    ```js
      resolve: {
        extensions: ['.js', '.vue'], // 확장자 생략하기
        alias: { // 경로 별칭 
          '~': path.join(__dirname, 'src'),
          'assets': path.join(__dirname, 'src/assets')
        }
      },
    ```