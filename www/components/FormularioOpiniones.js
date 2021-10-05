app.component('formulario-opiniones', {
  template:
  /* html */
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Deja tu comentario</h3>
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" v-model="nombre">
        
        <label for="comentario">Comentario</label>
        <textarea id="comentario" v-model="comentario"></textarea>
        
        <label for="puntuacion">Puntuación</label>
        <select id="puntuacion" v-model.number="puntuacion">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        
        <button class="button" type="submit">Enviar</button>
    </form>`,
  data() {
      return {
        nombre: '',
        comentario: '',
        puntuacion: null
      }
  },
  methods: {
    onSubmit() {
      if(this.nombre === '' || this.comentario === '' || this.puntuacion === null) {
        window.alert('Todos los campos deben estar completos');ç
        return;
      }
      
      let resena = {
        nombre: this.nombre,
        comentario: this.comentario,
        puntuacion: this.puntuacion
      }
      this.$emit('comentario-eviado', resena);
  
      this.nombre = '';
      this.comentario = '';
      this.puntuacion = null;
    }
  }
})
