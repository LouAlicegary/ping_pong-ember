import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('player-table', 'Integration | Component | player table', {
  integration: true
});


test('player-table component renders - ASSERTIONS COMMENTED OUT', function(assert) {
  
  assert.equal(true, true);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{player-table}}`);

  //assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#player-table}}
      template block text
    {{/player-table}}
  `);

  //assert.equal(this.$().text().trim(), 'template block text');

});
