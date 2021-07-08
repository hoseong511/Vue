<template>
  <button @click="add">
    Add
  </button>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <!-- https://eslint.vuejs.org/rules/no-multiple-template-root.html -->
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello computed'
    }
  },
  computed: {
    // Getter
    // reversedMessage() {
    //   return this.msg.split('').reverse().join('')
    // }
    // Getter, Setter
    reversedMessage: {
      get() {
        return this.msg.split('').reverse().join('')
      },
      set(value) {
        this.msg = value
      }
    }
  },
  watch: {
    msg(value) {
      console.log('msg: ', this.msg, value);
    },
    reversedMessage(value) {
      console.log(value);
    }
  },
  methods: {
    reverseMessage() {
      return this.msg.split('').reverse().join('')
    },
    add() {
      this.reversedMessage += '!?'
    }
  }
}
</script>