<template>
  <h1>{{ count }}</h1>
</template>

<script>
export default ({
  data() {
    return {
      count: 2
    }
  },
  beforeCreate() {
    console.log('Before create', this.count);
  },
  created() {
    console.log("Created!", this.count);
  },
  beforeMounted() {
    console.log('before Mounted');    
    document.querySelector('h1');
    console.log(document.querySelector('h1'));
  },
  mounted() {
    console.log('Mounted');    
    console.log(document.querySelector('h1'));
  }
})
</script>
