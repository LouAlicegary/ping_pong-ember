import DS from 'ember-data';

export default DS.Model.extend({
    
    player: DS.belongsTo('player', { async: true }),
    match: DS.belongsTo('match', { async: true }),

    outcome: DS.attr('number')

});