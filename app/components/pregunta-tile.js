import Ember from 'ember';

export default Ember.Component.extend({
  answerLater: Ember.inject.service(),
  fullPregunta: Ember.computed('pregunta.usuario', 'pregunta.consulta', function() {
    return this.get('pregunta.usuario') + " Preguntó: " + this.get('pregunta.consulta');
  }),
  actions: {
    destroyPregunta(pregunta) {
      if(confirm('¿está seguro quiere borrar esto?')) {
        this.sendAction('destroyPregunta', pregunta);
      }
    },
    answerLater(item) {
      this.get('answerLater').add(item);
    }
  }
});
