import Ember from 'ember';

export function sinRespuesta(params) {
  var pregunta = params[0];

  if(pregunta.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span> [¡no hay respuesta!]</span>');
  }
}

export default Ember.Helper.helper(sinRespuesta);
