import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: []
  },

  getters: { // = computed properties
    productsCount () {
      // ...
    }
  },

  actions: {
    fetchProducts () {
      // make the call
      // call setProducts mutation
    }
  },

  mutations: {
    setProducts (state, products) {
      // update products
      state.products = products
    }
  }
})









