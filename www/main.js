const app = Vue.createApp({
  data() {
    return {
      producto: "Calcetines",
      imagen: "./assets/images/socks_green.jpg",
      inventario: 100,
      detalles: ['50% Algodon', '20% Lana', '30% Polyester'],
      tipos: [
        {
          id: 3334,
          color: 'Verde'
        },
        {
          id: 3335,
          color: 'Azul'
        },
      ]
    }
  }
})
