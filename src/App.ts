import Component from '@glimmer/component';
import { setComponentTemplate, createTemplate } from '@glimmer/core';
import Counter from './components/Counter';

import './App.css';

export default class App extends Component {}

setComponentTemplate(
  createTemplate(
    { Counter },
    `
      <Counter @label="Sun" @color="sun" />
      <Counter @label="Water" @color="water" />
      <Counter @label="Phosphorus" @color="phosphorus" />
      <Counter @label="Nitrogen" @color="nitrogen" />
      <Counter @label="Potassium" @color="potassium" />
    `
  ),
  App
);
