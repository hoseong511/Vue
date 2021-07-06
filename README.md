  <strong><h1 align="center">Vue.js</h1></strong>
  <div align="center">
    <img src="https://kr.vuejs.org/images/logo.png" width= 20%; alt="Vue.js" />
  </div>
  <br>

## **CONTENTS**
### 1. Getting Started
- basic-cdn
- vue-cli
- webpack으로 vue 구성하기
### 2. Vue syntax
- create Application Instance
- 
-----
## **1. Getting Started**
### **1.1 basic-cdn**
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

### **1.2 vue-cli**
- vue-cli로 vue시작하기
  ```cmd
  npm i @vue/cli
  npx vue create [projectname]
  # vue3 이용
  cd [projectname]
  npm run dev
  ```
- Vetur 플러그인 추가

### **1.3 webpack으로 vue 구성하기**
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
## Eslint 설정하기
- VScode에 Eslint plugin(extension)을 설치한다.
- 프로젝트로 들어가서 패키지를 설치한다.
  ```cmd
  npm i -D eslint eslint-plugin-vue babel-eslint
  ```
- .eslintrc.js를 만든다.
  ```js
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

    }
  }
  ```
- Eslint 확인
  ![image](https://user-images.githubusercontent.com/62678380/121776755-97c3f900-cbc9-11eb-88ab-a220fe65f49c.png)
- ```eslint(vue/html-self-closing)```을 클릭해보면 페이지가 연결된다.
  ![image](https://user-images.githubusercontent.com/62678380/121776820-ed000a80-cbc9-11eb-81e3-e2c7d9440a0a.png)
- options의 코드를 rules에 넣어준다.
  ```js
  rules: {
   "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
  ```
- Eslint 적용되어 있는 것을 확인 할 수 있다.
  ![image](https://user-images.githubusercontent.com/62678380/121777025-f9d12e00-cbca-11eb-92ce-4d27bbedc186.png)

- 저장 후 Eslint fix 기능을 설정한다.   
  ctrl+shift+p -> settings.json
  ```json
    {
    "editor.codeActionsOnSave": {
          "source.fixAll.eslint": true 
      }
    }

  ```
- 저장하면 자동으로 fix된다
- Eslint로 코드 규칙을 설정해 동일한 규칙으로 코딩하자

## Single File Component
*.vue 파일의 형식
```html
<!-- HTML -->
  <template>
    <h1 @click="increase">
      {{ count }}
    </h1>
    <button @click="increase">
      ++
    </button>
  </template>

<!-- JS -->
  <script>
  export default {
    data: function() {
      return {
        count: 1
      }
    },
    methods: {
      increase: function() {
        this.count +=1
      }
    }
  }
  </script>

<!-- CSS -->
  <style>
    h1 {
    font-size: 50px;
    color: royalblue; 
    }

  </style>
```
