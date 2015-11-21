import Ember from 'ember';

export default Ember.Route.extend({
                         

  // model is the name of the "variable" i need to reference in the template
  model: function() {
    return this.store.findAll('player', {reload: true});
  },


  actions: {

    createPlayer(newName) {
       this.store.createRecord('player', {
           name: newName,
       }).save();
    }

  }


});