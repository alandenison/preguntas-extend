import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },
  removeLater(item) {
    this.get('items').removeObject(item);
  }
});
