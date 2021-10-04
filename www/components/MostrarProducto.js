app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
  /*html*/
  `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="imagen">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="stock">Hay Stock</p>
                <p v-else>No hay Stock</p>
                <p>Envio: {{ shipping }}</p>
                <ul>
                    <li v-for="materiales in detalles">{{ materiales }}</li>
                </ul>
                <div v-for="(tipo, index) in tipos"
                     :key="tipo.id"
                     @mouseover="actualizarEstado(index)"
                     class="color-circle"
                     :style="{ backgroundColor: tipo.color }">
                </div>
                <button class="button" :class=" { disabledButton: !stock }"
                        @click="anadirAlCarrito"
                        :disabled="!stock">Al carrito</button>
            </div>
        </div>
    </div>`,
  data() {
    return {
      marca: 'Tienda',
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
    },
    shipping() {
      return this.premium ? 'Gratis' : '2,99€';
    }
  }
})
