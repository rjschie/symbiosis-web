import Component from '@glimmer/component';
import { createTemplate, setComponentTemplate } from '@glimmer/core';
import { action, on } from '@glimmer/modifier';

import './TopBar.css';
import logo from '../../public/logo.svg';
import Storage from '../utils/storage';

export default class TopBar extends Component {
  logo = logo;

  constructor(owner: unknown, args: {}) {
    super(owner, args);
    this.hashChange = this.hashChange.bind(this);

    window.addEventListener('hashchange', this.hashChange);
  }

  willDestroy(): void {
    window.removeEventListener('hashchange', this.hashChange);
  }

  @action
  resetGame(): void {
    Storage.clear();
    window.location.hash = 'reset';
  }

  /** Listen for hash change to clear Storage and unset hash. */
  private hashChange(): void {
    if (window.location.hash.includes('reset')) {
      Storage.clear();
    }

    window.location.hash = '';
  }
}

setComponentTemplate(
  createTemplate(
    { on },
    `
      <div class="top-bar relative">
        <div class="logo absolute left-0 right-0 bottom 0 m-auto">
          {{{this.logo}}}
        </div>
        <div class="btn" role="button" {{on "click" this.resetGame}}>
          Reset
        </div>
      </div>
    `
  ),
  TopBar
);
