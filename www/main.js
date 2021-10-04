const app = Vue.createApp({
  data() {
    return {
      marca: 'Tienda',
      carrito: 0,
      producto: "Calcetines",
      tipoSeleccionado: 0,
      detalles: ['50% Algodon', '20% Lana', '30% Polyester'],
      tipos: [
        {
          id: 3334,
          color: 'green',
          imagen: "./assets/images/socks_green.jpg",
          cantidad: 50
        },
        {
          id: 3335,
          color: 'blue',
          imagen: "./assets/images/socks_blue.jpg",
          cantidad: 0
        },
      ]
    }
  },
  methods: {
    anadirAlCarrito() {
      this.carrito += 1;
    },
    actualizarEstado(index) {
      this.tipoSeleccionado = index;
    }
  },
  computed: {
    title() {
      return this.marca + ' ' +this.producto;
    },
    imagen() {
      return this.tipos[this.tipoSeleccionado].imagen;
    },
    stock() {
      return this.tipos[this.tipoSeleccionado].cantidad >= 50;
    }
  }
})
