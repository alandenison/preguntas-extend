import DS from 'ember-data';

export default DS.Model.extend({
  usuario: DS.attr(),
  consulta: DS.attr(),
  respuesta: DS.attr()
});
