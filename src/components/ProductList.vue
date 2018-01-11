<template>
    <div>
      <h1>Product List</h1>
      <img
        v-if="loading"
        src="https://i.imgur.com/JfPpwOA.gif"
      >
      <ul v-else>
        <li v-for="product in products">{{product.title}} - {{product.price}}</li>
      </ul>
    </div>
</template>

<script>
  import store from '@/store/index'

  export default {
    data () {
      return {
        loading: false
      }
    },

    computed: {
      products () {
        return store.getters.availableProducts
      }
    },

    created () {
      this.loading = true
      store.dispatch('fetchProducts')
        .then(() => this.loading = false)
    }
  }
</script>

<style scoped>

</style>
