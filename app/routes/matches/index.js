import Ember from 'ember';

export default Ember.Route.extend({
                         

  // model is the name of the "variable" i need to reference in the template
  model: function() {
    return this.store.findAll('match', {reload: true});
  },


  actions: {

    createMatch(newName) {
       this.store.createRecord('match', {
           name: newName,
       }).save();
    }

  }


});