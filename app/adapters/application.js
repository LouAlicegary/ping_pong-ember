import DS from 'ember-data';
import ENV from 'ping-pong/config/environment';

export default DS.ActiveModelAdapter.extend({
    namespace: 'api/v1',
    host: ENV.API_URL
});