<template>
  <h1 @click="increase">
    {{ count }}
  </h1>
  <button @click="increase">
    ++
  </button>
  <button @click="decrease">
    --
  </button>
</template>

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
    },
    decrease: function() {
      this.count -=1
    }
  }
}
</script>

<style>
  h1 {
   font-size: 50px;
   color: royalblue; 
  }

</style>