import { module, renderComponent, skip, test } from '../util';

import App from '@symbiosis/routes/App';

module('App test', () => {
  test('it works', async (assert) => {
    await renderComponent(App);
    assert.dom('div').exists();
  });

  skip('it shows 5 resources', async (assert) => {
    await renderComponent(App);
    assert.dom('div');
  });

  skip('it shows reset button', async (assert) => {
    await renderComponent(App);
    assert.dom('div');
  });

  module('Counter test', () => {
    skip('it increments value on right side click', async (assert) => {
      assert.ok(true);
    });

    skip('it decrements value on left side click', async (assert) => {
      assert.ok(true);
    });
  });

  module('Storage test', () => {
    skip('it saves data to local storage', async (assert) => {
      assert.ok(true);
    });

    skip('it saves stored data through refresh', async (assert) => {
      assert.ok(true);
    });

    skip('it restores stored data on load', async (assert) => {
      assert.ok(true);
    });

    skip('it resets stored data on reset click', async (assert) => {
      assert.ok(true);
    });
  });
});
