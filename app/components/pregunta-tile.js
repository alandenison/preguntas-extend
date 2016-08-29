import Ember from 'ember';

export default Ember.Component.extend({
  answerLater: Ember.inject.service(),
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
