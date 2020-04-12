import GlimmerComponent from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { createTemplate, setComponentTemplate } from '@glimmer/core';
import { action, on } from '@glimmer/modifier';
import { fn } from '@glimmer/helper';

import './Counter.css';
import Storage, { slugify } from '../utils/storage';

// import minusSvg from '../'

interface Args {
  color: string;
  label: string;
}

class Counter extends GlimmerComponent<Args> {
  @tracked value = 0;
  @tracked boundingRect?: DOMRect;

  // minusSvg = minusSvg;
  // plusSvg = plusSvg;

  constructor(owner: unknown, args: Args) {
    super(owner, args);

    this.hashChange = this.hashChange.bind(this);
    window.addEventListener('hashchange', this.hashChange);

    this.value = Storage.get(this.args.label).value;
  }

  willDestroy(): void {
    window.removeEventListener('hashchange', this.hashChange);
  }

  get letter(): string {
    switch (slugify(this.args.label)) {
      case 'potassium':
        return 'K';
      default:
        return this.args.label.charAt(0).toUpperCase();
    }
  }

  get valueIsZero(): boolean {
    return this.value === 0;
  }

  @action
  onClick(dir: string): void {
    if (dir === 'right') {
      this.value = this.value + 1;
    } else if (this.value > 0) {
      this.value = this.value - 1;
    }

    Storage.set(this.args.label, this.value);
  }

  /** Listen for hash change to update state based on Strage. */
  private hashChange(): void {
    this.value = Storage.get(this.args.label).value;
  }
}

setComponentTemplate(
  createTemplate(
    { on, fn },
    `
    <div class="counter counter--{{@color}} {{if this.valueIsZero "counter--is-zero"}}">
      <div class="counter__label">
        {{this.letter}}
      </div>
      <div class="counter__value">
        {{this.value}}
      </div>
      <div class="counter__listener left"
        {{on "click" (fn this.onClick "left")}}
      >
        {{!-- {{{this.minusSvg}}} --}}
      </div>
      <div class="counter__listener right"
        {{on "click" (fn this.onClick "right")}}
      >
        {{!-- {{{this.plusSvg}}} --}}
      </div>
    </div>
  `
  ),
  Counter
);

export default Counter;
