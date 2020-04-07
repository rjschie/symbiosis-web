import Component from '@glimmer/component';
import { setComponentTemplate, createTemplate } from '@glimmer/core';

import './App.css';

export default class App extends Component {}

setComponentTemplate(
  createTemplate(`
    <div>Hello</div>
  `),
  App
);
