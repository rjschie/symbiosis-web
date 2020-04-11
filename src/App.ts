import Component from '@glimmer/component';
import { createTemplate, setComponentTemplate } from '@glimmer/core';
import { tracked } from '@glimmer/tracking';

import './App.css';
import Counter from './components/Counter';
import TopBar from './components/TopBar';
import Loading from './components/Loading';

export default class App extends Component {
  @tracked showLoading = true;

  constructor(owner: unknown, args: {}) {
    super(owner, args);

    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}

setComponentTemplate(
  createTemplate(
    { Counter, TopBar, Loading },
    `
      {{#if this.showLoading}}
        <Loading />
      {{/if}}
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
