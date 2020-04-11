import Component from '@glimmer/component';
import { createTemplate, setComponentTemplate } from '@glimmer/core';

import './App.css';
import Counter from './components/Counter';
import TopBar from './components/TopBar';

export default class App extends Component {}

setComponentTemplate(
  createTemplate(
    { Counter, TopBar },
    `
      <TopBar />
      <Counter @label="Sun" @color="sun" />
      <Counter @label="Water" @color="water" />
      <Counter @label="Phosphorus" @color="phosphorus" />
      <Counter @label="Nitrogen" @color="nitrogen" />
      <Counter @label="Potassium" @color="potassium" />
    `
  ),
  App
);
