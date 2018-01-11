<template>
    <div>
      <h1>Product List</h1>
      <ul>
        <li v-for="product in products">{{product.title}} - {{product.price}}</li>
      </ul>
    </div>
</template>

<script>
  import shop from '@/api/shop'
  export default {
    data () {
      return {
        products: []
      }
    },

    created () {
      shop.getProducts(products => {
        this.products = products
      })
    }
  }
</script>

<style scoped>

</style>
