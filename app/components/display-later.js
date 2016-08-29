import Ember from 'ember';

export default Ember.Component.extend({
  answerLater: Ember.inject.service(),
  actions: {
    removeLater(item) {
      this.get('answerLater').removeLater(item);
    }
  }
});
