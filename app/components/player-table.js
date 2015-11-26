import Ember from 'ember';

export default Ember.Component.extend({

    sortedPlayers: Ember.computed.sort("players", (a, b) => {
        if (a.get("mu") > b.get("mu") ) {
            return -1;
        } else if (a.get("mu") < b.get("mu") ) {
            return 1;
        }

        return 0;
    })

});
