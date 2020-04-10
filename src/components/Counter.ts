import GlimmerComponent from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { createTemplate, setComponentTemplate } from '@glimmer/core';
import { action, on } from '@glimmer/modifier';

import './Counter.css';

class Counter extends GlimmerComponent {
  @tracked value = 0;

  @action
  onClick(e: MouseEvent): void {
    console.log('%cSUB::', 'color:#faae3c;', 'clicked', e);
    // d
  }
}

setComponentTemplate(
  createTemplate(
    { on },
    `
    <div class="counter counter--{{@color}}" {{on "click" this.onClick}}>
      <div class="counter__label">
        {{@label}}
      </div>
      <div class="counter__value">
        {{this.value}}
      </div>
    </div>
  `
  ),
  Counter
);

export default Counter;
