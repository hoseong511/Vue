  <strong><h1 align="center">Vue.js</h1></strong>
  <div align="center">
    <img src="https://kr.vuejs.org/images/logo.png" width= 20%; alt="Vue.js" />
  </div>
  <br>

## **CONTENTS**
### 1. Getting Started
01. basic-cdn
02. vue-cli
03. webpack으로 vue 구성하기

### 2. Vue syntax
01. 인스턴스와 라이프사이클
02. 템플릿 문법
03. Computed
04. Computed 캐싱
05. Getter, Setter
06. Watch
07. 클래스와 스타일 바인딩
08. 조건부 렌더링
09. 리스트 렌더링
10. 이벤트 핸들링
11. 이벤트 핸들링 - 이벤트 수식어
12. 이벤트 핸들링 - 키 수식어
13. 폼 입력 바인딩
14. v-model 수식어
15. 컴포넌트 - 기초
16. 컴포넌트 - 속성 상속
17. 컴포넌트 - Emit
18. 컴포넌트 - Slot
19. 컴포넌트 - Provide, Inject
20. 컴포넌트 - Refs

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
### **1.4 Eslint 설정하기**
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
## **2. Vue syntax**
### **2.1 인스턴스와 라이프사이클**
- 어플리케이션 인스턴스 생성하기
- 최상위(root) 컴포넌트
- 라이프사이클 
  ![](https://v3.ko.vuejs.org/images/lifecycle.svg)
- created: 데이터에 접근 가능
- mounted: Html 요소에 접근 가능

### **2.2 템플릿 문법** 
- 보간법
  - 문자열
    - 데이터 바인딩의 가장 기본 형태 **"Mustache"(이중 중괄호 구문)**기법을 사용한 문자열 보간법입니다.
      ```html
        <span>메시지: {{ msg }}</span>
      ```
    - v-once 디렉티브: 최초 렌더링 된 상태로 고정
      ```html
        <span v-once>최초 상태로 고정: {{ msg }}</span>
      ```
  - 원시 HTML
    - 이중 중괄호는 데이터를 HTML이 아닌 일반 텍스트로 읽어들이기에 실제 HTML 태그를 출력하려면 v-html을 사용해야합니다.
    - v-html 디렉티브: 태그가 포함된 문자열을 이용할 때
      ```html
        <p>이중 중괄호 사용: {{ rawHtml }}</p>
        <p>v-html 디렉티브 사용: <span v-html="rawHtml"></span></p>
      ```
  - 속성
    - v-bind 디렉티브: 속성을 연결 시킬 때
      ```html
        <div v-bind:id="dynamicId"></div>
      ```
  - 약어
    - v-bind
      ```html
        <!-- 전체 문법 -->
        <a v-bind:href="url"> ... </a>

        <!-- 약어 -->
        <a :href="url"> ... </a>

        <!-- 동적 전달인자와 함께 쓴 약어 -->
        <a :[key]="url"> ... </a>
      ```  
    - v-on
      ```html
        <!-- 전체 문법 -->
        <a v-on:click="doSomething"> ... </a>

        <!-- 약어 -->
        <a @click="doSomething"> ... </a>

        <!-- 동적 전달인자와 함께 쓴 약어 -->
        <a @[event]="doSomething"> ... </a>
      ```
### **2.3 Computed** 
- 템플릿 내에 표현식을 넣어 연산을 하면 코드가 지저분해지고 유지보수가 어렵게 됩니다. 이를 위한 속성입니다.  
- 템플릿 내에 표현식
  ```html
  <div id="computed-basics">
    <p>출판된 책:</p>
    <span>{{ author.books.length > 0 ? '있음' : '없음' }}</span>
  </div>
  
  ```
  ```js
    Vue.createApp({
      data() {
        return {
          author: {
            name: '존 도우',
            books: [
              'Vue 2 - Advanced Guide',
              'Vue 3 - Basic Guide',
              'Vue 4 - The Mystery'
            ]
          }
        }
      }
    })
  ```
  - computed 사용
    ```html
      <div id="computed-basics">
        <p>출판된 책:</p>
        <span>{{ publishedBooksMessage }}</span>
      </div>
    ```
    ```js
    Vue.createApp({
      data() {
        return {
          author: {
            name: '존 도우',
            books: [
              'Vue 2 - Advanced Guide',
              'Vue 3 - Basic Guide',
              'Vue 4 - The Mystery'
            ]
          }
        }
      },
      computed: {
        // computed getter
        publishedBooksMessage() {
            // 여기서의 `this` 는 vm 인스턴스이다.
            return this.author.books.length > 0 ? '있음' : '없음'
          }
        }
      }).mount('#computed-basics')
    ```
### **2.4 Computed 캐싱** 
- computed 속성에는 캐싱기능이 있습니다. 이를 활용한다면 한번 연산된 결과로 다음에도 이용할 수 있습니다. (메서드와 달리)

### **2.5 Getter Setter
- Computed 속성은 기본적으로 getter 이지만, 필요할 때엔 setter도 제공합니다.
  ```js
    computed: {
      fullName: {
        // getter
        get() {
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set(newValue) {
          const names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    }
  ```
- ```this.fullName = 'John Doe'```를 실행하면, setter가 호출됩니다. 

### **2.6 Watch**
- Vue는 현재 활성화된 인스턴스에서 데이터 변경을 관찰하고 이에 반응하는 좀 더 일반적인 방법인 watch를 제공합니다. 
  ```html
    <div id="watch-example">
      <p>
        예/아니오 질문을 물어보세요.
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
    </div>
  ```
  ```html
    <!-- 이미 Ajax 라이브러리의 풍부한 생태계와 범용 유틸리티 메소드 컬렉션이 있기 때문에, -->
    <!-- Vue 코어는 다시 만들지 않아 작게 유지됩니다. -->
    <!-- 이것은 이미 익숙한 것을 선택할 수 있는 자유를 줍니다. -->
    <script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
    <script>
      const watchExampleVM = Vue.createApp({
        data() {
          return {
            question: '',
            answer: '질문은 보통 물음표를 포합합니다. ;-)'
          }
        },
        watch: {
          // question 이 변경될 때마다, 이 함수가 실행될 것 입니다.
          question(newQuestion, oldQuestion) {
            if (newQuestion.indexOf('?') > -1) {
              this.getAnswer()
            }
          }
        },
        methods: {
          getAnswer() {
            this.answer = '생각중...'
            axios
              .get('https://yesno.wtf/api')
              .then(response => {
                this.answer = response.data.answer
              })
              .catch(error => {
                this.answer = '에러! API에 닿지 못했습니다. ' + error
              })
          }
        }
      }).mount('#watch-example')
    </script>
```