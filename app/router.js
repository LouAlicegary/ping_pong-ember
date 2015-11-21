import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('index', { path: '/' });

  this.route('players', { path: '/players' }, function() {
    this.route('show', {path: ':player_id'});
  });

  this.route('groups', { path: '/groups' }, function() {
    this.route('show', {path: ':group_id'});
  });

});

export default Router;
