import Ember from 'ember';

export default Ember.Route.extend({
  
  // model is the name of the "variable" i need to reference in the template
  model: function(params) {
    return [this.store.findRecord('player', params.player_id, {reload: true})];
  }

});