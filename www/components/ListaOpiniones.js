app.component('lista-opiniones', {
  props: {
    resenas: {
      type: Array,
      resquired: true
    },
  },
  template:
  `<div class="review-container">
    <h3>Reseñas</h3>
    <ul>
      <li v-for="(resena, index) in resenas" :key="index">
        {{ resena.nombre }} dejó {{ resena.puntuacion }} estrellas
        <br/>
        "{{ resena.comentario }}"
      </li>
    </ul>
  </div>`,
})
