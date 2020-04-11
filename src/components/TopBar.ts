import Component from '@glimmer/component';
import { createTemplate, setComponentTemplate } from '@glimmer/core';
import { action, on } from '@glimmer/modifier';

import './TopBar.css';

import Storage from '../utils/storage';

export default class TopBar extends Component {
  @action
  resetGame(): void {
    Storage.clear();
    window.location.reload();
  }
}

setComponentTemplate(
  createTemplate(
    { on },
    `
      <div class="top-bar">
        <div class="btn" role="button" {{on "click" this.resetGame}}>Reset</div>
      </div>
    `
  ),
  TopBar
);
