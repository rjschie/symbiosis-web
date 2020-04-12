import { renderComponent } from '@glimmer/core';

import App from '@symbiosis/routes/App';

const containerElement = document.getElementById('app');

if (containerElement) {
  renderComponent(App, containerElement);
}
