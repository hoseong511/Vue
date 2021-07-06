<template>
  <h1 v-once @[event]="add">
    {{ msg }}
  </h1>
  <h1 v-html="msg"></h1>

  <h1 @[event]="add" :[attr]="'active'">
    {{ msg2 }}
  </h1>
</template>
<script>
export default {
  data() {
    return {
      msg: '<div style="color: red"> hello world!</div>',
      msg2: 'active',
      attr: 'class',
      event: 'click'
    }
  },
  methods: {
    add() {
      this.msg2 += '!'
    }
  }
}
</script>
<style scoped>
.active {
  color: royalblue;
  font-size: 100px;
}
</style>