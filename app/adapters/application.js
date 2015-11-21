import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v1'
});

// export default DS.RESTAdapter.extend({
//   namespace: 'api/v1',
//   //host: 'https://agile-gorge-4676.herokuapp.com'
// });