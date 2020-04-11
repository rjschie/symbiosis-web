import GlimmerComponent from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { createTemplate, setComponentTemplate } from '@glimmer/core';
import { action, on } from '@glimmer/modifier';
import { fn } from '@glimmer/helper';

import './Counter.css';

interface Args {
  color: string;
  label: string;
}

class Counter extends GlimmerComponent<Args> {
  @tracked value = 0;
  @tracked boundingRect?: DOMRect;

  @action
  onClick(dir: string): void {
    if (dir === 'right') {
      this.value = this.value + 1;
    } else if (this.value > 0) {
      this.value = this.value - 1;
    }
  }
}

setComponentTemplate(
  createTemplate(
    { on, fn },
    `
    <div class="counter counter--{{@color}}">
      <div class="counter__label">
        {{@label}}
      </div>
      <div class="counter__value">
        {{this.value}}
      </div>
      <div class="counter__listener left"
        {{on "click" (fn this.onClick "left")}}
      ></div>
      <div class="counter__listener right"
        {{on "click" (fn this.onClick "right")}}
      ></div>
    </div>
  `
  ),
  Counter
);

export default Counter;
