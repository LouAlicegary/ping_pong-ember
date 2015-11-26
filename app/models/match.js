import DS from 'ember-data';

export default DS.Model.extend({
 
    players: DS.hasMany('player', { async: true }),
    match_players: DS.hasMany('match-player', { async: true }),

    match_type: DS.attr('string')

});