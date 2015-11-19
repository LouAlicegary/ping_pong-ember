import DS from 'ember-data';

export default DS.Model.extend({
 
    name: DS.attr('string'),
    mu: DS.attr('string'),
    sigma: DS.attr('string')

});