const app = Vue.createApp({
  data() {
    return {
      carrito: 0,
      producto: "Calcetines",
      imagen: "./assets/images/socks_green.jpg",
      stock: true,
      detalles: ['50% Algodon', '20% Lana', '30% Polyester'],
      tipos: [
        {
          id: 3334,
          color: 'green',
          imagen: "./assets/images/socks_green.jpg"
        },
        {
          id: 3335,
          color: 'blue',
          imagen: "./assets/images/socks_blue.jpg"
        },
      ]
    }
  },
  methods: {
    anadirAlCarrito() {
      this.carrito += 1;
    },
    actualizarImagen(imagen) {
      this.imagen = imagen;
    }
  }
})
