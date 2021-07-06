<template>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello computed'
    }
  },
  computed: {
    reversedMessage() {
      return this.msg.spit('').reverse().join('')
    }
  },
  methods: {
    reverseMessage() {
      return this.msg.spit('').reverse().join('')
    }
  }
}
</script>