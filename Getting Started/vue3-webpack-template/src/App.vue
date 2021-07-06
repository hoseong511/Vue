<template>
  <h1 @click="increase">
    {{ count }}
  </h1>
  <button @click="increase">
    ++
  </button>
<<<<<<< HEAD:Getting Started/vue3-webpack-template/src/App.vue
  <button @click="decrease">
    --
  </button>
=======
  <div v-if="count > 4">
    4 보다 큽니다!
  </div>
  <ul>
    <Fruit v-for="fruit in fruits" :key="fruit" :name="fruit">
      {{ fruit }}
    </Fruit>
  </ul>
>>>>>>> 03ed0eef3332d3ce4a64ff0d384df0409ce8a13b:vue3-webpack-template/src/App.vue
</template>

<script>
import Fruit from '~/components/Fruit'

export default {
  components: {
    Fruit
  },
  data: function() {
    return {
      count: 0,
      fruits: ['apple', 'banana', 'orange']
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

<style lang='scss'>
  h1 {
   font-size: 50px;
   color: royalblue; 
  }
  ul {
    li {
      font-size: 40px;
    }
  }

</style>