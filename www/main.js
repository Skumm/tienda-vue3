const app = Vue.createApp({
  data() {
    return {
      carrito: [],
      premium: false
    }
  },
  methods: {
    actualizarCarrito(id) {
      this.carrito.push(id);
    }
  },
})
