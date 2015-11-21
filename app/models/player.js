import DS from 'ember-data';

export default DS.Model.extend({
 
    groups: DS.hasMany('group', {async: true}),

    name: DS.attr('string'),
    mu: DS.attr('string'),
    sigma: DS.attr('string'),

    //// WIN AND LOSS STATISTICS ////

    singles_wins: DS.attr('number'),
    singles_losses: DS.attr('number'),
    doubles_wins: DS.attr('number'),
    doubles_losses: DS.attr('number'),

    total_wins: function() {
        return this.get('singles_wins') + this.get('doubles_wins');
    }.property('singles_wins', 'doubles_wins'),

    total_losses: function() {
        return this.get('singles_losses') + this.get('doubles_losses');
    }.property('singles_losses', 'doubles_losses')

    /////////////////////////////////

});