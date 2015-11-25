import Ember from 'ember';

export default Ember.Component.extend({

  winner: Ember.computed('match.match_players.@each.outcome', function() {
    
    // You can reference relations like this
    var match = this.get('match');
    var match_players = match.get("match_players");
    var winners = match_players.filterBy('outcome', 1); //.get('length');
    
    // Just leaving these here for later use -- found them valuable just now
    //console.log(Ember.keys(match.toJSON()));
    //console.log(match_players.get("length")); 
    
    var winner_string = winners.reduce(function(accum, winner){
        return accum + winner.get("player").get("name") + " and ";
    }, "").slice(0, -4);


    return winner_string;

  }),


  loser: Ember.computed('match.match_players.@each.outcome', function() {
    
    var match = this.get('match');
    var match_players = match.get("match_players");
    var losers = match_players.filterBy('outcome', 2);
    
    var loser_string = losers.reduce(function(accum, loser){
        return accum + loser.get("player").get("name") + " and ";
    }, "").slice(0, -4);


    return loser_string;

  }),


});
