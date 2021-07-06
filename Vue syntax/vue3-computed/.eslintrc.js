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