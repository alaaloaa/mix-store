import Vue from 'vue'
export const state = () => ({
  cart: [],
})

export const mutations = {
  addToCart(state) {
    state.cart = process.browser
      ? JSON.parse(localStorage.getItem('items')) || []
      : []
  },
  editItemQuantity(state, obj) {
    state.cart.filter((item) => {
      if (item.index === obj.index) {
        obj.status == 'increase' ? item.quantity++ : item.quantity--
        item.total = item.quantity * item.price
      }
    })
    localStorage.setItem('items', JSON.stringify(state.cart))
  },
  //   remove(state, { todo }) {
  //     state.list.splice(state.list.indexOf(todo), 1)
  //   },
  //   toggle(state, todo) {
  //     todo.done = !todo.done
  //   },
}
