import DS from 'ember-data';

export default DS.Model.extend({
 
    groups: DS.hasMany('group', {async: true}),
    matches: DS.hasMany('match', {async: true}),
    match_players: DS.hasMany('match-player', {async: true}),

    name: DS.attr('string'),
    mu: DS.attr('string'),
    sigma: DS.attr('string'),


    //// WIN AND LOSS STATISTICS ////

    singles_wins_count: Ember.computed('matches', function() {
      var match_players = this.get("match_players");
      var wins = match_players.filterBy('outcome', 1);

      return wins.filterBy('match.match_type', "singles").get("length");
    }),


    singles_losses_count: Ember.computed('matches', function() {
      var match_players = this.get("match_players");
      var losses = match_players.filterBy('outcome', 2);

      return losses.filterBy('match.match_type', "singles").get("length");
    }),


    doubles_wins_count: Ember.computed('matches', function() {
      var match_players = this.get("match_players");
      var wins = match_players.filterBy('outcome', 1);
      
      return wins.filterBy('match.match_type', "doubles").get("length");
    }),


    doubles_losses_count: Ember.computed('matches', function() {
      var match_players = this.get("match_players");
      var losses = match_players.filterBy('outcome', 2);

      return losses.filterBy('match.match_type', "doubles").get("length");
    }),


    total_losses_count: Ember.computed('match_players.@each.outcome', function() {
      var match_players = this.get("match_players");
      var losses = match_players.filterBy('outcome', 2);

      return losses.get("length");
    }),


    total_wins_count: Ember.computed('match_players.@each.outcome', function() {
      var match_players = this.get("match_players");
      var wins = match_players.filterBy('outcome', 1);

      return wins.get("length");
    }),



    /////////////////////////////////

});