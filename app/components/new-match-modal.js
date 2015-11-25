import Ember from 'ember';

export default Ember.Component.extend({

  isShowingModal: false,

  actions: {
    
    toggleModal() {
      this.toggleProperty('isShowingModal');
    },

    submitMatch(newName) {
      this.sendAction('action', newName);
      this.toggleProperty('isShowingModal');
    }    

  }

});