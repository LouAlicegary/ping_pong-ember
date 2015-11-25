import Ember from 'ember';

export default Ember.Route.extend({
  
  // model is the name of the "variable" i need to reference in the template
  model: function(params) {
    return this.store.findRecord('group', params.group_id, {reload: true});
  }

});